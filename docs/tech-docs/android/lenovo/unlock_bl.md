# 解BL锁

## 什么是BL锁？

BL是`bootloader`的缩写，译为`镜像检查引导工具`，就是用来检查当前设备的镜像签名是否正确，如果正确，则会继续开机；否则会报错，自动关机。

BL在默认情况下是锁着的，并且手机厂商基本不会让你随意解锁（Google的Pixel是个例外）

在BL解锁后，设备开机就不会检查当前的镜像，直接开机

当然，具体详情可以自己必应一下（

## 准备

首先，您的设备必须是MTK联发科的芯片，如果不是，下文的内容只能让您感慨联发科的芯片是多么好，请另找办法解锁吧

由于联想根本就没给用户解BL锁的方法，所以我们选择自己解锁

### MTK-Client

MTK-Client是一个利用联发科的芯片~~漏洞~~特性进行对设备操控的一个开源工具，我们将会使用ta帮助我们解锁

> [项目地址]()，不要忘记给一个星标！

Archlinux用户可以在AUR上找到ta，然后可以用AUR助手进行安装，当然您也可以用别的办法安装

yay
```zsh
yay -S mtkclient
```

paru
```zsh
paru -S mtkclient
```

注意：在安装完成后一定一定一定要重启您的计算机设备，否则MTK-Client将不会工作！

## 开始解锁

> 您完全可以根据MTK-Client项目中的自述文件进行解锁，以下内容只能说是我个人对于自述文件的非官方翻译

首先，清除用户数据（metadata userdaata）和md_udc分区的数据，保证解锁顺利（这一步可以跳过）

```zsh
sudo mtk e metadata,userdata,md_udc
```

然后，进行解锁

```zsh
sudo mtk 
```
