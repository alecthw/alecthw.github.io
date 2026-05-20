# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A personal Hugo blog (`小甲哥の垃圾工厂`, zh-cn) deployed to GitHub Pages. The theme `hugo-theme-stack` is consumed as a **Hugo Module** (see `go.mod`), not as a git submodule or `themes/` folder — there is no theme source in this repo, only overrides.

## Commands

Requires Hugo **extended** (the deploy workflow pins `latest`) and Go ≥ 1.21 (for `hugo mod`).

- Local dev server with drafts: `hugo server -D`
- Production build (matches CI): `hugo --minify --gc`
- Update theme module to latest: `hugo mod get -u github.com/CaiJimmy/hugo-theme-stack/v3 && hugo mod tidy`
- Pull module sources locally (needed once after clone, and after theme bumps): `hugo mod get`

There are no tests, linters, or package.json — JS in `assets/js/` is concatenated and fingerprinted by Hugo Pipes at build time.

## Deploy

`.github/workflows/deploy.yml` runs on push to `master` and builds **two** sites in one job:

1. Default `baseURL` → `public/` → pushed to `gh-pages` branch (serves `alecthw.github.io`).
2. `--baseURL https://www.uufly.org/` → `public_uufly.org/` → pushed to `uufly.org` branch (serves the mirror).

Both deploys use `single-commit: true` (force-rewrites the deploy branch). If you change `baseurl` in [config/_default/config.yaml](config/_default/config.yaml) or add a third deploy, update **both** the build step and a matching `JamesIves/github-pages-deploy-action` step.

A separate weekly cron in `update-theme.yml` bumps the theme module and commits to `master`, which then triggers a redeploy.

## Architecture

### Theme override model

Because the theme is a Go module, **never edit theme files directly** — they don't exist in this checkout. To customize:

- Place a file at the same relative path under [layouts/](layouts/) or [assets/](assets/) and Hugo Module mounts let it shadow the theme's version.
- The theme exposes two intentional empty hooks that this repo uses heavily:
  - [layouts/partials/head/custom.html](layouts/partials/head/custom.html) — extra `<head>` content (currently jQuery + optional Prism CSS).
  - [layouts/partials/footer/custom.html](layouts/partials/footer/custom.html).
- [layouts/partials/scripts.html](layouts/partials/scripts.html) is a full override of the theme's script loader. It wires up KaTeX (+ mhchem), Mermaid, and Markmap based on `params.yaml` flags, then concatenates `assets/js/markmap.js` and `assets/js/mermaid.js` via Hugo Pipes (`resources.Concat` → `minify` → `fingerprint` in production).

### Diagram / math code fences

[layouts/_default/_markup/](layouts/_default/_markup/) contains `render-codeblock-*.html` files for `mermaid`, `markmap`, `math`, and `chem`. These are Goldmark render hooks — fenced code blocks with those languages are transformed into diagram containers that the JS in `assets/js/` then hydrates. The matching JS expects specific CSS class names emitted by these templates; keep them in sync if you touch either side.

Markdown rendering is configured in [config/_default/markup.yaml](config/_default/markup.yaml) with `passthrough` enabled for `\[…\]`, `$$…$$`, `\(…\)` so KaTeX can see raw TeX before Goldmark mangles it.

### Content layout

- Posts: [content/post/{slug}/index.md](content/post/) — each post is a **page bundle** (directory with `index.md` + assets like `cover.jpg`). The `image:` front-matter field points at the cover relative to the bundle.
- Pages: [content/page/](content/page/) — `archives`, `book`, `links`, `search`. Each is also a bundle; the theme picks layouts by the `type:` front-matter.
- Permalinks ([permalinks.yaml](config/_default/permalinks.yaml)): posts → `/p/:slug/`, pages → `/:slug/`. Don't change without checking inbound links in existing posts.
- `mainSections: [post]` in [params.yaml](config/_default/params.yaml) — only `post` shows up on the homepage / archive / RSS.

### Config split

All site config lives under [config/_default/](config/_default/) and is split by concern (`config.yaml`, `params.yaml`, `menu.yaml`, `markup.yaml`, `module.yaml`, `permalinks.yaml`, `related.yaml`, `_languages.yaml`). Hugo merges them automatically — pick the right file rather than dumping everything in `config.yaml`. Theme features (widgets, comments provider, image processing, mermaid/markmap/katex toggles) all live in `params.yaml`.

Comments use **giscus** wired to this repo's Discussions; the repo ID / category ID in `params.yaml` are specific to `alecthw/alecthw.github.io` and would need regenerating for a fork.

## Gotchas

- `static/` files are copied verbatim to the site root (e.g. `BingSiteAuth.xml`, `googlea9e618d1a7f44859.html`, `socks5.pac`) — these are domain-verification / utility files, don't rename them.
- The `tag` menu entry in [menu.yaml](config/_default/menu.yaml) is an **external affiliate link**, not a real `/tags/` page. Don't "fix" it.
- `defaultContentLanguage: zh-cn` + `hasCJKLanguage: true` — required for correct `.WordCount` / `.Summary`. Leave both set when adding more languages.
