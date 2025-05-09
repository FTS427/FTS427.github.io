# 刷系统————逃离原厂各种垃圾功能

## 前言

如果你已经看了 *[刷入 GSI 系统](./flash_gsi_system.md)* 一文，你可能会有一些疑问： 这个所谓的 `底层刷机包` 是个什么东西？为什么没有？我该如何获取并刷入这种系统？

在这篇文章中，将会解答你的疑问

## 底层刷机包

### 这是个啥？和 GSI 有啥区别？

不需要有 `Treble Project` 支持就可以刷入的刷机包均为 `底层刷机包`，这类刷机包都是通过 AOSP 源码、设备树源码(Device Tree)、内核源码(Kernel) 等等一系列源码通过编译得到的 各种分区镜像文件 进行打包后的刷机包

这类刷机包现在基本很少有人会制作了，因为这需要你有做够多的软硬件知识、Android 开发经验等多项技能，并且非常难获取设备源代码，因为越来越多的厂商不提供设备树和相关源码文件

但是这一类刷机包都对设备底层进行了调整，兼容性比较强，也比较稳定

而 GSI 不一样，这是一类通过 AOSP 源码直接编译出来的调用 Treble Project 通用 API 的刷机包

这类制作相对比较简单

但是问题也比较多，比如：刷入后设备亮度不正常，耗电大，掉 root 等等

## 开始刷入

!!! info "注意"
    以下的刷机步骤在 带有 ADB 的 Windows10 环境下进行，在其他平台上可能有所不一样

### 相关信息

!!! warning "警告"
    此刷机包处于测试阶段，问题很多，非常不建议作为日常使用的系统！！！

目前发现的问题：无法使用手电筒（根据 [我的询问](https://xdaforums.com/t/open-beta-lineageos-17-1-for-lenovo-tab-m10hd-2nd-gen-x306x-a10.4680619/post-89738681) 和下面的帖子可以得知我们的 `TB-X306FC` 和国外的 `TB-X306X` 的不同之处之一就是没有手电筒），`Blue Archive` 和 `Soul Knight` 这一类的游戏无法正常玩以及电量使用情况显示不是很正常

[刷机包下载站](https://ota.vistaslayer.ovh/) **严禁 DDOS 或一切摧毁网站的行为！！！！**

Lineage OS 21 Android 13 Kernel: linux 4.9

### 回滚至 Android 10

首先我们需要确保设备现在运行的系统是 Android 10，如果是 Android 10 你可以直接跳过这一步，如果不是，请乖乖完成这一步

首先在 *[相关刷机资源](./resource.md)* 中找到 `X306X Android 10 SP原厂国际刷机包` 和 `SP Flash Tool v5` 两样内容，下载至您的计算机上的任意位置，并将其解压（尽量不要是带有中文的路径）

确保已经备份完毕后，将设备关机

打开解压后的 `SP Flash Tool v5` 的文件目录下，找到带有 `SP Flash Tool`字样的可执行文件，打开

### 刷入 rec

从下载站下载最新的 lineageos 刷机包，把里面的 `recovery.img` 解压出来

将设备通过 `adb reboot bootloader` 命令或按下 `电源` 与 `音量-` 键等方式进入 `fastboot` 模式

然后通过 `fastboot` 命令刷入

```pwsh
fastboot flash recovery 下载好的 rec 位置
```

### 下载并调整刷机包

> 接下来的步骤只适用于第一次刷入 lineageos 的设备

把下载好的刷机包复制一份解压到一个文件夹里，找到 `META-INF/com/google/android/updater-script` 这个文件

把第一行 `assert` 检查机型那一行删掉，之后重新压缩回去

刷机包就调整好了

### 刷入

将设备重启至 recovery 模式，然后把 data, cache, system（先挂载上） 全部格式化，然后将设备连接至计算机调整成 `从 adb sideload 更新`，然后使用 `adb sideload 调整好的刷机包的路径` 把刷机包 sideload 上去

之后等待安装完成，重启， lineageos 就刷好啦！

### 后期注意事项

刷入后请谨慎刷 magisk ，有可能会反复重启！

视频播放不了可以关掉 hw 层

部分功能不正常可以试着关掉 SELinux
