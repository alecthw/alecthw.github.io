---
title: RouterOS 给 UPNP 设置白名单，避免 APP 白嫖上行带宽
description: UPNP 有时候必须开，但是容易被各个流氓 APP 白嫖上行带宽，不管电视应用还是手机应用，都存在这些情况。
slug: routeros-upnp-blcok
date: 2024-02-26T20:11:45+08:00
image: cover.jpg
categories:
  - system
tags:
  - ros
  - mikrotik
---

🔥🔥🔥：稳定好用的机场/梯子 [TAG 全球250+节点、99+流媒体解锁](https://tagss05.pro/#/auth/2neqgxFl)，更多参考[机场推荐](/p/airport-recommend/)

---

## ROS 的 UPNP

由于 ROS 的 UPNP 功能没有自带类似黑白名单类似的功能，那只能从防火墙入手了。

UPNP 服务端涉及两个端口，1900(UDP) 和 2828(TCP)。那么，目标就很明确了：

1. 建个白名单
2. 仅允许白名单内的 IP 访问这两个端口

## 配置过程

### 创建一个名称为 `allow_upnp` 的地址列表作白名单

```bash
/ip firewall address-list
add address=192.168.1.1 list=allow_upnp
add address=192.168.1.2 list=allow_upnp
```

### 创建两条 filter 规则

```bash
/ip firewall filter
add action=drop chain=input dst-port=1900 protocol=udp src-address-list=!allow_upnp
add action=drop chain=input dst-port=2828 protocol=tcp src-address-list=!allow_upnp
```

如果原来规则较多，注意下放的位置。

### 重启下 UPNP 服务

```bash
/ip upnp
set enabled=no
set enabled=yes
```

这样就配置好了，等个几个小时看看，NAT 列表里，除了允许的几个 IP 有 UPNP，其他应该都没有。世界清净了。

如果有问题，优先检查 filter 规则顺序。

## 附：DHCP 静态自动添加到地址列表

```bash
/ip dhcp-server lease
add address=192.168.1.x mac-address=xx:xx:xx:xx:xx:xx address-lists=allow_upnp
```
