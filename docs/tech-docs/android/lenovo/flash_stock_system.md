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
    此刷机包处于测试阶段, 问题较多, 不建议作为日常使用的系统!

目前发现的问题:

1. 无法使用手电筒 (根据 [我的询问](https://xdaforums.com/t/open-beta-lineageos-17-1-for-lenovo-tab-m10hd-2nd-gen-x306x-a10.4680619/post-89738681) 和下面的帖子可以得知 `TB-X306FC` 和国外的 `TB-X306X` 的不同之处之一就是没有手电筒)

2. [其他小问题](https://github.com/Bakoubak/amar_row_lte-A11-releases/issues)

### 下载合适的刷机包

~~ [刷机包下载站](https://ota.vistaslayer.ovh/) **严禁 DDOS 或一切摧毁网站的行为！！！！** ~~

Lineage OS 19 Android 12 Kernel linux 4.19.127

### 更换底包

**此步必须严格进行**

1. 准备
    从 *[相关刷机资源](./resource.md)* 中找到 `SP Flash Tool v5` 进行下载, 并解压到一个合适的位置 (尽量不要包含有中文的路径)

    下载 [Android 11 底包](https://mirror.vistaslayer.ovh/Firmwares/amar_row_lte/X306X/Android-11/TB-X306X_S230973_240402_BMP.zip) 并解压到一个合适的位置 (尽量不要包含有中文的路径)

    确保已经备份完毕后, 将设备关机

2. 配制 SP Flash Tool
    打开压后的 `SP Flash Tool v5` 的文件目录下, 找到带有 `SP Flash Tool` 字样的可执行文件, 打开

    将

3. 刷入底包
    先同时按住 `音量+` 和 `音量-`, 然后将设备接入计算机, 看到 `SP Flash Tool` 上出现以下画面即为连接成功

    鼠标点击 `` 进行刷入, 等出现类似以下画面即为刷入成功

### 重解 BL

上一步中重新刷了底包, 故需要重新解开 BL, 方法参考 [此处](./unlock_bl.md)

### 刷入 recovery

1. 准备
    从 *[此处](https://github.com/Bakoubak/amar_row_lte-A11-releases/releases)* 下载最新的 LineageOS 刷机包 (如: LineageOS-19.1_amar-row-lte-11_ALPHA2-HF2.zip ), 并把里面的 `recovery.img` 解压出来

    将设备通过 `adb reboot bootloader` 命令或长按 `电源` 与 `音量-` 键等方式重启至 `fastboot` 模式

2. 刷入 recovery
    通过以下命令命令刷入

    ```powershell
    fastboot flash recovery recovery.img 所在的位置
    ```

### 刷入

1. 准备
    将设备重启至 recovery 模式, 然后把 data, cache 全部格式化

2. 侧载刷机包
    将设备连接至计算机并在 recovery 界面选择 `Apply update` 并进入, 然后选择 `Apply from ADB` 并进入, 现在设备已经进入 `sideload` 模式

    在电脑上执行:

    ```powershell
    adb sideload 你下载好的刷机包位置
    ```

3. 清除数据
    等显示安装完成后不要立即重启, 找到 `Factory reset` 并进入, 选择 `Format data/factory reset` 并点击进行再次清除数据

4. 成功!
    之后等待操作完成, 重启, LineageOS 就刷好啦!

### 后期注意事项

刷入后请谨慎刷 Magisk , 有可能会出现意料之外的情况!

部分功能不正常可以试着关掉 SELinux (请保持谨慎!)

```bash
setenforce 0
```
