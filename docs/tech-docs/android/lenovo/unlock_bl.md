# 解 BL

## 何为 BL ？

BL 是 `bootloader` 的缩写，译为 `镜像检查引导工具` ，就是用来检查当前设备的镜像签名是否正确，如果正确，则会继续开机；否则会报错，自动关机。

BL 在默认情况下是被厂商上锁的，手机厂商基本不会让你随意解锁（ Google 的 Pixel 是个例外）

在 BL 解锁后，设备开机就不会检查当前的镜像，直接开机

当然，具体详情可以自己 [Bing](https://www.bing.com) 一下

## 准备

首先，您的设备必须是 MTK(联发科) 的芯片，如果不是，请另找办法解锁

其次，你需要一台可以正常使用、已经配置好 `platform-tools` 环境的计算机设备( Linux / Windows / MacOS 均可)，并且拥有通畅的网络

注意备份！注意备份！注意备份！重要的事情说三遍！因为设备解锁时会将你的所有用户数据清空！

### 联想国际版设备解锁方案

1. 打开 “设置” ，找到 “系统” > “关于平板电脑” > “版本号” ，多次点击 “ 版本号” 直到出现提示 “您已处于开发者模式，无需进行此操作。”
2. 打开 “设置” ，找到 “系统” > “开发者选项” ，找到 “OEM解锁” 选项，打开此选项
3. 将设备重启至 `fastboot` [^ADB命令]并使用 **数据线** 连接至电脑，在计算机的终端中键入 `fastboot devices` 查看设备已经正常与计算机连接
4. 一切准备就绪，键入 `fastboot flashing unlock` 解锁，这时设备上会出现询问是否确认要解锁设备，按照询问内容，按下设备的 `音量-` 确认解锁，按下 `音量+` 取消解锁

[^ADB命令]: adb reboot bootloader

### MTKClient 强制解锁

由于联想不让中国大陆用户解 BL 或者其他原因，所以我们选择自己进行强行解锁

`MTKClient` 是一个利用联发科芯片 ~~漏洞~~ 特性进行对设备底层控制的一个开源工具，我们将会使用 ta 帮助我们解锁

> [项目地址](https://github.com/bkerler/mtkclient)，不要忘记给一个星标！

Arch Linux 用户可以在 AUR 上找到 ta ，然后可以用 AUR 助手 进行安装，当然您也可以用别的办法安装

```zsh
paru -S mtkclient
```

!!! warning "请注意"
    在安装完成后一定一定一定要重启您的计算机设备，否则 `MTKClient` 将无法正常工作！

## 开始解锁

以下的操作也需要在设备处于关机状态，使用 **数据线** 连接至电脑，且同时按着 `音量+` 和 `音量-` 两个按键

> 您完全可以根据 `MTKClient` 项目中的自述文件进行解锁操作，以下内容只能说是我个人对于自述文件的非官方翻译

首先，清除 用户数据分区（metadata userdata）和 md_udc 分区的数据，保证解锁顺利（这一步可以跳过）

```zsh
sudo mtk e metadata,userdata,md_udc
```

然后，进行解锁

```zsh
sudo mtk da seccfg unlock
```

如果看到最后返回 `Done!` ，恭喜你！成功了！什么？没有返回？尝试重试或放弃

最后，重启设备

```zsh
sudo mtk reset
```

### 图形界面操作

如果你对命令行实在不了解，你可以尝试使用带有图形界面的 `MTKClient` 进行操作

```zsh
sudo mtk_gui
```

## 解锁后的一些问题

设备解锁后在每次开机时会出现 `Orange State. Your device has been unlocked and can't be trusted. Your device will boot in 5 seconds.` 的字样，不用担心，也不用理睬，这是联发科设备解锁后的正常现象，我目前未找到有关于 关掉联发科解锁提示 这一类的方案

设备解锁后也会出现 `电源` + `音量+` 无法正常进入 `recovery` 模式的情况，但是可以通过 `fastboot reboot recovery` 或 `adb reboot recovery` 进入 `recovery` 模式，我目前也未找到相关解决方案

## 解锁后干点啥

在设备已经解锁后，您就可以对您的设备进行随心所欲的调整了，比如说：[刷 `Magisk`](./after_unlockbl.md) 、[刷系统](./flash_gsi_system.md) 等等
