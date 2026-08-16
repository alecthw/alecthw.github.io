---
title: 极连云机场怎么样？三网接入、IEPL 专线与优惠码
description: 极连云机场使用评测，包括三网接入、IEPL 专线、轻量套餐、流媒体和 AI 解锁、自有客户端限制及优惠码。
slug: airport-jilian
date: 2026-08-16T00:00:00+08:00
lastmod: 2026-08-16T00:00:00+08:00
image: cover.jpg
draft: true
categories:
  - passgfw
tags:
  - 机场评测
  - 科学上网
  - 极连云
  - jilian
---

<!-- markdownlint-disable-file MD034 -->

极连云是一家由新加坡运营团队维护的专线机场，通过广州电信、深圳移动和深圳联通三线接入，再搭配 IEPL 专线。它提供低流量年付套餐，定位是预算有限但希望尝试专线的轻度用户。

> **重要限制：**极连云不支持通用订阅链接，不能直接在小火箭、Surge、Stash 等第三方客户端中使用，主要依赖官方客户端。

> **推广说明：**本文包含推广链接。套餐、入口和节点解锁会调整，购买前请核对最新面板并从短周期开始测试。

## 套餐、优惠码与入口

{{< airport
  url="https://a01.jlyvipaff.cc/#/?code=tILdRY17"
  protocol="VLESS"
  sub="不支持订阅链接，无法使用小火箭等第三方客户端"
  sub_status="no"
  app="提供专属客户端"
  app_status="ok"
>}}
8 折优惠码 | JLY888
{{< /airport >}}

历史套餐包含 96 元/年、每月 60G 流量的轻量方案，配合优惠码后适合用量不高的用户。套餐价格和流量可能变化，以下截图仅记录更新时的情况。

![极连云机场套餐](https://raw.githubusercontent.com/alecthw/images/refs/heads/master/avif/hyperlink-plan.avif)

## 线路和节点表现

三线接入用于分别优化国内不同运营商的连接，IEPL 专线负责跨境传输。相比单一入口，它更有机会适配不同网络环境，但“手搓 BGP”并不等同于每个地区都能自动获得最佳线路，仍需要实际测试。

![极连云机场测速](https://raw.githubusercontent.com/alecthw/images/refs/heads/master/avif/hyperlink-speedtest.avif)

## 流媒体和 AI 解锁

运营方面板会标示 Netflix、Disney+、TikTok、ChatGPT 等流媒体和 AI 服务的解锁节点，同时单独标注支持 Gemini 的节点。解锁结果以具体节点和测试时间为准，不能视为永久保证。

## 客户端限制

官方客户端降低了新用户的配置门槛，但不提供通用订阅也意味着无法自由选择第三方客户端、软路由方案和自定义分流规则。购买前应先确认需要使用的设备是否都有官方客户端。

## 优点与缺点

### 优点

- 电信、移动、联通三线接入
- IEPL 专线，提供轻量年付套餐
- 节点标注流媒体和 AI 解锁状态
- 官方客户端适合不想配置规则的新用户

### 缺点

- 不支持第三方订阅
- 对软路由和高级客户端用户不友好
- 新用户仍需在自己的运营商环境中验证三线效果

更多支持第三方订阅的选择可以查看[机场推荐总榜](/p/airport-recommend/)。

## 更新记录

- 2026-08-16：从总榜拆分为独立草稿，保留三网接入、套餐、测速、解锁和客户端限制。
