---
title: RouterOS CHR v7 UEFI 镜像，使用 Github Actions 构建
description: 构建过程全透明，不存在后门的可能。官方镜像，非破解。
slug: routeros-uefi
date: 2023-12-07T17:11:11+08:00
image: cover.png
categories:
  - system
tags:
  - ros
  - mikrotik
  - chr
---

🔥🔥🔥：稳定好用的机场/梯子 [TAG 全球250+节点、99+流媒体解锁](https://558343.dedicated-afflink.com/#/auth/2neqgxFl)，更多参考[机场推荐](/p/airport-recommend/)

---

👉 需要的朋友自取。

使用 Github Actions 构建，过程全透明，不存在后门的可能。官方镜像，`非破解`。

RouterOS chr-7.x 已经包含了 efi 启动文件，但是分区类型是 ext2。

所以，只要把分区类型从 ext2 转成 fat 就可以从 uefi 引导启动了。

当然，喜欢 GPT 的话，也可以制作 Hybrid MBR。

## [镜像下载](https://github.com/alecthw/mikrotik-routeros-chr-efi/releases)

👉 [Release](https://github.com/alecthw/mikrotik-routeros-chr-efi/releases) 👈

👉 [破解版传送门](https://www.right.com.cn/forum/thread-8271574-1-1.html) 👈

包含的镜像类型：

- img
- qcow2
- vdi
- vhd
- vhdx
- vmdk

## Hybrid MBR 记录

```bash
(
echo 2 # use GPT
echo t # change partition code
echo 1 # select first partition
echo 8300 # change code to Linux filesystem 8300
echo r # Recovery/transformation
echo h # Hybrid MBR
echo 1 2 # partitions added to the hybrid MBR
echo n # Place EFI GPT (0xEE) partition first in MBR (good for GRUB)? (Y/N)
echo   # Enter an MBR hex code (default 83)
echo y # Set the bootable flag? (Y/N)
echo   # Enter an MBR hex code (default 83)
echo n # Set the bootable flag? (Y/N)
echo n # Unused partition space(s) found. Use one to protect more partitions? (Y/N)
echo w # write changes to disk
echo y # confirm
) | sudo -E gdisk /dev/nbd1
```
