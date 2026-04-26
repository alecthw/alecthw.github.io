---
title: 普通人如何使用 AI 大模型
description: 从普通人视角出发，盘点 2026 年最值得用的 AI 大模型工具，覆盖对话、编程、图片生成、深度调研等高频场景。
slug: ai-llm-tools
date: 2026-04-26T10:11:11+08:00
image: cover.jpg
categories:
  - llm
tags:
  - claude
  - codex
  - gemini
  - chatbox-ai
  - cherry-studio
---

很多朋友初次接触 AI 大模型时，仅知道这是个 AI，可以问他问题，可以让他帮忙干活。盲目地装了一堆 APP、开了一堆会员，用来用去，似乎又不是那么好用。

这次，我们换个思路——不从产品出发，从你的真实使用场景出发，看 2026 年的 AI 大模型该如何用，并盘点对话、编程、图片生成、深度调研四大场景下值得入手的免费工具。

## 什么是 AI 大模型

AI 大模型，全称"人工智能大语言模型"，是近几年最火的技术之一。你所熟悉的 ChatGPT、Claude、Gemini、豆包、元宝，本质上都是大模型驱动的产品。

**一句话描述大模型原理**：通过对互联网海量文本进行训练，学习语言规律，在你提问时，预测并生成最合适的回答。

听起来像"预测下一个词"，但规模足够大之后，这个能力就变得无比强大——写代码、做分析、画图、翻译、总结，几乎无所不能。

### 大模型的局限性：幻觉问题

理解大模型的原理，才能更好地使用它。

大模型的本质是**概率**。它每次生成一个词，都是在"猜"当前语境下最可能出现的下一个词，而不是真的在"查资料"或"推理"。这意味着：

- 它说的话听起来很流畅、很自信，但不一定是对的
- 它会把没见过的知识"脑补"出来，给你一个听起来合理的答案
- 它没有实时联网能力（除非特别配置），训练截止日之后的事它不一定知道

这种现象有个专有名词，叫**幻觉（Hallucination）**——大模型一本正经地"编造"事实。比如你问它某篇论文的引用，它可能给你一个格式完美、作者姓名真实、但根本不存在的 DOI 链接。

**幻觉出现的根本原因**：问题越模糊，大模型越容易"发挥"。当你的提问缺乏约束，它只能靠概率填充内容，准确率自然下降。

**怎么减少幻觉？**

- **给足限定条件**：不要问"介绍一下量子计算"，而是问"用 200 字，面向非技术读者，介绍量子计算的基本原理"
- **让它说不知道**：加上"如果你不确定，请直接告诉我，不要猜测"
- **重要信息必须核实**：数字、日期、人名、链接、法律条款，永远不要直接用，自己查一遍

记住这一点，你就能在正确的场景用对大模型，而不是在该严谨的地方被它"忽悠"。

## 什么是大模型 API

推出大模型的公司，基本都会做两件事：

1. **做自己的 APP**：豆包（字节）、元宝（腾讯）、通义千问（阿里）、Claude（Anthropic）、ChatGPT（OpenAI）、Gemini（Google）……这些 APP 面向普通用户，开箱即用，但功能受限、价格不菲。

2. **开放 API**：API（应用程序接口）是给开发者和第三方工具用的。你可以把 API 理解成一把"钥匙"——拿到这把钥匙，任何工具都能直接调用模型能力，而不必被厂商的 APP 束缚。

**为什么要用 API 而不直接用 APP？**

- **更便宜**：按用量付费，相比订阅制会员，轻度用户省钱明显。
- **更灵活**：可以自由切换 GPT-5、Claude Opus 4.7、Gemini 3.1 Pro 等不同模型，不用为每家单独开会员。
- **能用上更多工具**：大量优秀的免费开源工具，只接受 API 接入，不支持账号登录。

## 如何获得 API

获取 API 的渠道主要有两种：**官方渠道**和**中转站**。

### 官方渠道

直接去各大厂商官网注册，充值购买 API 额度：

| 厂商 | 平台 | 特点 |
| --- | --- | --- |
| OpenAI | platform.openai.com | GPT-5 / GPT-5-Codex 系列，编程能力强 |
| Anthropic | console.anthropic.com | Claude Opus 4.7 / Sonnet 4.6，公认最强 |
| Google | aistudio.google.com | Gemini 3.1 Pro，自带免费额度 |

官方渠道的优点是**稳定可靠**，缺点是部分平台需要境外信用卡，且价格相对较高。

### 中转站

中转站（也叫 API 分发平台）是第三方服务商，他们聚合多家模型，以统一的接口和更便捷的付款方式转售给用户。但中转站良莠不齐，使用前有必要搞清楚两类平台的区别。

#### 正规平台：只做自己有资质的事

正规平台的特点是**只提供自己有合法授权或自主部署能力的模型**，不会声称能给你提供 GPT-5、Claude 这类境外商业模型。

- **[OpenRouter](https://openrouter.ai)**：国际平台，合法聚合了几乎所有主流模型（OpenAI、Anthropic、Google、xAI 等），按量付费。缺点是需要境外信用卡，且访问需要特殊网络环境。
- **[硅基流动](https://siliconflow.cn)**：国内合规平台，提供 DeepSeek-V3.2、Qwen3.6、GLM-5 等国产开源模型的推理服务，OpenAI 兼容格式开箱即用，新用户有免费额度。**注意：正规的国内平台受合规限制，无法转售 GPT、Claude 等境外商业模型的 API。**

如果你的需求用国产模型（GLM-5、DeepSeek-V3.2、Qwen3.6 等）能满足，硅基流动是最省心的选择——目前国产顶尖模型在中文场景已和境外旗舰差距很小，且价格仅为后者的几分之一。

#### 非正规平台：价格实惠，灰色地带，用之需谨慎

另一类平台声称能以极低价格提供 GPT-5、Claude Opus 等境外旗舰模型的 API，如 **Cubence**、**PackyCode** 等。这类平台的商业模式处于灰色地带——他们通常通过批量购买官方账号额度或其他非正式渠道来转售。

使用这类平台的优势：

- 不需要境外信用卡和特殊网络环境，即可使用国外旗舰模型
- 不会让你的官方账号承担封号风险
- 按量计费，价格通常比官方便宜

使用这类平台的风险：

- 平台随时可能跑路，充值打水漂
- 模型版本和质量难以保证，可能不是真实的官方模型，需谨慎选择

**风险控制建议**：如果确实需要用 GPT、Claude 这类境外模型，且无法直接向官方付费，选择此类平台时坚持**小额充值、按需补充**，把单次充值控制在百元以内，损失可接受范围内。

- [Cubence](https://cubence.com/signup?code=SCNXVCAI) — （👍强烈推荐）专业的 AI API 网关，企业级可靠性，无缝访问 Claude Code 和 Codex。这家的好处是一个密钥可以分别选择 Anthropic、OpenAI 和 Gemini 分组，不像其他基于 New API 的中转站需要配置一堆密钥。
- [PackyCode](https://www.packyapi.com/register?aff=xNUg) — 老牌 Claude Code 中转站，当前按量计费性价比最高的选择，价格、服务、技术、稳定性综合下来都很不错，新模型适配及时。

> 💡 **小建议**：日常用 GLM、DeepSeek、Qwen 等国产模型，选**硅基流动**、**阿里百炼**等正规平台，稳定省心。确实需要 GPT / Claude，选 Cubence 或 PackyCode 等，小额充值，按需使用。

---

## 如何让大模型替你干活

首先，明确你需要大模型干什么，比盲目试用更重要。大模型看起来无所不能，但并非真的万能——比如无法实时获取地图数据、无法直接操控你的电脑（除非配合 Computer Use 等特定工具），精确计算也需要借助代码执行能力。

下面按使用场景，分类推荐工具。

---

### 日常对话与工作助手

这类工具定位是"万能助手"，把 API 接入后，可以用来写文案、翻译、总结文件、回邮件、头脑风暴……几乎覆盖大部分日常需求。

#### Cherry Studio

**项目地址**：[github.com/CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)

Cherry Studio 是目前最推荐的 API 客户端，功能全面，界面美观，免费开源。

主要特性：

- 支持几乎所有主流 API（OpenAI、Anthropic、Gemini、本地 Ollama 等）统一调度
- 内置知识库（RAG），可上传文件、PDF、URL，让模型基于你的文档回答
- 支持 MCP（Model Context Protocol），可接入文件系统、网页抓取、数据库等工具
- 内置深度调研模式，自动多轮搜索后汇总成结构化报告
- 支持图片生成、语音输入、跨会话记忆
- 多平台（Windows / macOS / Linux）

**适合人群**：希望一站式管理多个模型，同时有知识库、文件处理、Agent 自动化需求的用户。

#### Chatbox AI

**官网**：[chatboxai.app](https://chatboxai.app/zh)

Chatbox 是入门级 AI 客户端，轻巧易用，跨平台支持是一众客户端中最好的——这点对手机用户尤其重要。

主要特性：

- 界面简洁，上手极快，零学习成本
- 支持 OpenAI、Claude、DeepSeek、本地 Ollama 等
- 支持 MCP 与知识库（轻量版 RAG），覆盖大部分日常需求
- 有免费基础版（功能有限制），API 模式完全免费无限制
- Windows / macOS / Linux / iOS / Android 五端齐全，多设备会话同步

**适合人群**：需要在手机和电脑之间同步对话，或只需要日常对话不想折腾复杂功能的用户。

---

### 编程辅助

AI 在编程领域的能力已经远超大多数人的想象。从写代码、改 Bug，到整个功能模块的自动实现，以下工具可以大幅提升开发效率。

#### cc-switch（强烈建议先装）

**项目地址**：[github.com/farion1231/cc-switch](https://github.com/farion1231/cc-switch)

在正式上手 Claude Code、Codex 之前，强烈建议先安装 cc-switch。

为什么要先装它？因为你会经常切换 API 供应商——可能官方账号、中转站 A、中转站 B 之间反复横跳，或同时给 Claude Code、Codex、Gemini CLI 配不同的 Key。每切换一次都要手动编辑 `~/.claude`、`~/.codex` 等配置文件，非常折腾。cc-switch 就是为了解决这个痛点。

主要特性：

- 跨平台桌面 GUI（Windows / macOS / Linux），免费开源，已收获 14.5K Star
- 一站式管理 Claude Code、Codex、Gemini CLI、OpenCode 等多个 CLI 工具的配置
- 内置 50+ 中转站预设，输入 API Key 即可使用，无需手动写配置
- 系统托盘一键切换 Provider，自动写入对应 CLI 的配置文件
- 支持 MCP 管理、用量统计、自动故障转移（节点宕机自动切换备用）

使用方式：从 GitHub Releases 下载对应平台的安装包，打开后点击 "Add Provider"，选择内置预设或填入自己的 API Key 和基地址，再点击 "Enable" 即可启用。

**适合人群**：所有用 Claude Code、Codex 的用户，尤其是同时使用多个中转站的用户。

#### Claude Code

**官网**：[claude.com/product/claude-code](https://www.claude.com/product/claude-code)

Claude Code 是 Anthropic 官方出品的命令行编程工具，目前公认最强的 AI 编程助手。基于 Claude Opus 4.7 / Sonnet 4.6，在复杂软件工程任务上的能力遥遥领先。

主要特性：

- 在终端中直接运行，可读取和修改整个项目代码
- 支持 1M token 上下文，配合 Task Budgets 能让 Claude 自主规划长流程任务
- 具备完整的工具调用能力（读文件、写文件、执行命令、调用 MCP）
- 支持接入自定义 API（可配置中转站地址）
- 适合复杂任务，可"接管"整个编程流程

使用方式：安装 CLI 后配置 API Key，在项目目录运行 `claude` 即可进入交互式会话。

**适合人群**：有编程基础，希望 AI 深度参与开发流程的开发者。

#### Codex

**官网**：[openai.com/codex](https://openai.com/zh-Hans-CN/codex/)

OpenAI 官方出品的 AI 编程助手，是 Claude Code 最直接的对手。新版 Codex 已经从纯命令行工具升级为带交互式界面的编程代理，体验大幅提升。

主要特性：

- 自带交互式 TUI 界面，会话、文件操作、命令执行一目了然
- 支持 GPT-5、GPT-5-Codex 等 OpenAI 最新模型，编程能力强
- 开源免费，接入 API 即可使用
- 可配置 OpenAI 兼容接口（支持中转站）
- 同时提供 IDE 插件（VSCode）和云端 Web 版三种入口

使用方式：安装 CLI 或下载 Codex 应用，配置 API Key 后即可进入界面。

**适合人群**：习惯 OpenAI 模型，想要在终端中获得类 IDE 编程体验的用户。有了 UI 之后，也适合普通用户使用了。

---

### 图片生成

AI 画图已经进入实用阶段，2026 年 Flux 2、Nano Banana 2、Seedream 5.0 等模型让生成质量再上一台阶——海报、设计素材、表情包、内容配图，效率远超手工。

#### Cherry Studio（内置图片生成）

前面已经介绍过 Cherry Studio，它内置了图片生成功能，支持调用 Flux 2、Nano Banana 2、Seedream 5.0、SD 系列等主流图像 API。

对于只是偶尔需要生成图片的用户，不用单独安装图片工具，在 Cherry Studio 里切换到图片模式即可，简单高效。

**适合人群**：对图片生成需求不高，偶尔用用的轻度用户。

#### ComfyUI

**项目地址**：[github.com/comfyanonymous/ComfyUI](https://github.com/comfyanonymous/ComfyUI)

ComfyUI 是目前最强大的 AI 图片/视频生成工作流工具，以节点式界面著称，高度可定制。

主要特性：

- 免费开源，支持本地运行（需要一定显存）也可纯 API 模式使用
- 通过 API 节点可接入 Flux 2、Nano Banana 2、Sora 2、Seedance 等闭源旗舰模型，无需本地 GPU
- 社区工作流丰富，覆盖写实、动漫、设计、视频、音乐等场景
- 支持图生图、局部重绘、ControlNet、角色一致性等高级功能

**适合人群**：有一定折腾能力，对图片生成质量或工作流定制有要求的用户。

#### 即梦 AI

**官网**：[jimeng.jianying.com](https://jimeng.jianying.com)

字节跳动出品的 AI 图片生成平台，背后是 Seedream 5.0 模型——2026 年最大亮点是首次将实时联网搜索集成进图像生成，可以基于当前热点信息生成信息图、数据可视化、新闻配图。

主要特性：

- 免费注册，每日有免费生成次数，无需 API
- 中文提示词友好，文字渲染（海报、品牌视觉）效果出色
- 支持文生图、图生图、人像参考、视频生成等功能
- 支持 4K 分辨率输出

**适合人群**：不想折腾 API，只想简单生成图片的国内用户。

---

### 深度调研

AI 做资料调研的效率是人工的数倍。从行业分析、竞品对比，到学术查阅、新闻梳理，以下工具能帮你快速生成有深度的调研报告。

#### Gemini Deep Research

**入口**：[gemini.google.com](https://gemini.google.com) 或通过 Gemini API 调用

Google 在 2026 年 4 月推出了全新一代 Deep Research 智能体，分为 **Deep Research** 和 **Deep Research Max** 两个版本，均基于 Gemini 3.1 Pro 模型，是目前最强的 AI 调研工具之一。

主要特性：

- 自动分解问题、多轮联网搜索（一次任务可访问 100+ 网页），生成结构化报告
- DeepSearchQA 准确率 93.3%，Humanity's Last Exam 54.6%，外部基准全面领先
- 支持 MCP，可接入企业内部数据源做混合调研
- 原生可视化能力（图表、信息图），直接嵌入报告
- 调研计划可手动编辑，告诉 AI 应该重点查哪些来源
- Deep Research 适合快速调研，Deep Research Max 适合深度报告（每份报告成本约 $4.80）

通过 [Google AI Studio](https://aistudio.google.com) 可以免费体验，新用户有免费额度，通过 API 接入中转站价格更实惠。

**适合人群**：需要做深度行业调研、学术资料整理、市场分析的用户。

#### Perplexity AI

**官网**：[perplexity.ai](https://www.perplexity.ai)

Perplexity 是一款以"联网搜索 + AI 总结"为核心的调研工具，2026 年 Deep Research 模块已升级到 Claude Opus 4.5/4.6 驱动，回答附带信息来源，方便核实。

主要特性：

- 免费基础版可每日进行有限次数的高质量搜索
- Deep Research 模式 2-5 分钟出报告，跨引用、标矛盾、自带结构化章节和引用
- 提供 Sonar API 系列（Sonar、Sonar Pro、Sonar Reasoning、Sonar Deep Research），OpenAI 兼容格式，开发者可直接接入
- 推出 Comet 浏览器，可作为 AI 化的日常浏览工具

**适合人群**：需要快速获取有据可查信息的用户，或作为日常搜索引擎的替代品。

---

## 总结

用一张表梳理一下上面推荐的所有工具：

| 场景 | 工具 | 是否需要 API | 免费获取 |
| --- | --- | --- | --- |
| 日常对话 | Cherry Studio | ✅ | ✅ 开源 |
| 日常对话 | Chatbox AI | ✅ | ✅ 免费版 |
| 编程辅助 | cc-switch | — | ✅ 开源 |
| 编程辅助 | Claude Code | ✅ | ✅ 免费 CLI |
| 编程辅助 | OpenAI Codex | ✅ | ✅ 开源 |
| 图片生成 | Cherry Studio | ✅ | ✅ 开源 |
| 图片生成 | ComfyUI | ✅（可选） | ✅ 开源 |
| 图片生成 | 即梦 AI | ❌ | ✅ 免费额度 |
| 深度调研 | Gemini Deep Research | ✅（可选） | ✅ 免费额度 |
| 深度调研 | Perplexity AI | ✅（可选） | ✅ 免费基础版 |

**最佳入门路径**：

1. 在 [硅基流动](https://siliconflow.cn/) 注册，领取免费额度，获取 API Key（国产模型够用 90% 场景）
2. 下载 [Cherry Studio](https://github.com/CherryHQ/cherry-studio)，填入 API Key，开始日常对话
3. 需要使用 Claude Code 或 Codex 时，先装 [cc-switch](https://github.com/farion1231/cc-switch) 管理多供应商配置
4. 需要 GPT / Claude 等境外旗舰模型，到 [Cubence](https://cubence.com/signup?code=SCNXVCAI) 或 [PackyCode](https://api2d.com/r/YOUR_AFF_CODE) 小额充值

从这一步开始，你会发现 AI 大模型远比你想象的好用——而且远比开会员便宜。
