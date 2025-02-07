# 在 Waydroid 上愉快的玩 Blue Archive

没错，你如果看过 [我的个人简介](../../../about_me.md) ，你会知道我喜欢玩的游戏之一就是 `Blue Archive`（国际版），但是根据 [`TB-X306FC` 刷 stock rom](../lenovo/flash_stock_system.md) 这里的描述，`Blue Archive` 是没办法在我的平板上正常运行的，这怎么办呢，这就引出了本文的主角 -- `Waydroid`

## 安装

1. 仅仅需要直接安装 waydroid，linux-zen 和 waydroid-image 就好

    ``` zsh
    paru -S waydroid linux-zen waydroid-image
    ```

2. 安装过后执行以下代码进行 waydroid 初始化

    ``` zsh
    doas waydroid init
    # sudo 用户只需要把 doas 换成 sudo 就好，下文不再赘述
    ```

3. 启用 waydroid 并在自动启动程序里加入 `waydroid session start`

    ``` zsh
    doas systemctl enable waydroid-container
    ```

4. 重启计算机

## GApps 和所需要的 lib

对于 GApps ，你可以安装 waydroid-image-gapps 懒人包直接完事，当然也可以用下面的脚本完成

### waydroid_script

我们接下来将会需要用到 casualsnek 大佬编写的一个 py 脚本对 waydroid 进行一些调整

[项目地址](https://github.com/casualsnek/waydroid_script)

1. 先 clone 仓库并进入

    ``` zsh
    git clone https://github.com/casualsnek/waydroid_script.git && cd ./waydroid_script
    ```

2. 创建 venv 环境
    因为 pip 的一些原因，我们需要创建一个独立的 venv 环境进行执行脚本（请先安装好 python）

    ``` zsh title="./waydroid_script"
    python -m venv ./venv
    ```

3. 安装 libndk 和 libhoudini 库

    ``` zsh title="./waydroid_script"
    doas ./venv/bin/python3 ./main.py install libndk
    ```

    ``` zsh title="./waydroid_script"
    doas ./venv/bin/python3 ./main.py install libhoudini
    ```

    widevine 是可选的，安装方法和上面一致

    !!! note
        下载速度真的很慢，请提前准备好魔法环境！

4. patch libhoudini 使之可以运行 Blue Archive
    根据 [这个仓库](https://github.com/natsumerinchan/libhoudini-package) 的指引，我们来到 [这个 Issue](https://github.com/waydroid/waydroid/issues/788#issuecomment-2162386712)

    根据 qwerty12345-wart 这位大佬的讲解，我们需要使用 [这个脚本](https://github.com/user-attachments/files/15800844/scripton.txt) 对 libhoudini 进行 patch，将脚本下载下来，授权执行

    ``` zsh
    curl "https://github.com/user-attachments/files/15800844/scripton.txt" -o ./patch_script.sh
    chmod +x ./patch_script.sh
    doas bash ./patch_script
    ```

    运行结果输出为 `Already patched` 的时候，将 waydroid 重启

    !!! warning
        不要盲目的相信和运行来自网上的脚本！请先检查他们再做，即使是从我这里获取的
        Do not blindly trust and run script off of the Internet. Always check its content first, even from me.

5. 安装 Blue Archive
    你有多种办法可以在 waydroid 安装 Blue Archive，比方说从 Google Play 正版下载，或者从 APKMirror 这种搬运站上获取，甚至可以通过恢复备份的手段将之前你设备上的 Blue Archive 恢复至 waydroid 上，这里不再赘述

至此，你已经可以在 waydroid 上快乐的玩 Blue Archive 了（起码在我的设备上是可以通过这种方式玩的）

## 后话

### 使用 GApps

当你安装好 GApps 的时候会发现 Google 会不停地提示你 `此设备未验证`，这个理论可以使用上面提到的 waydroid_script 这个项目进行验证操作，但是通过我的反复操作始终无法完成，所以这个问题我没法解决

### 关于玩 BA 的一些技巧

因为是国际版的 BA，不免需要魔法，可是魔法有时候很不稳定，怎么可以保证可以一直愉快的玩耍呢

#### 资源下载

每次 BA 更新就有好多资源需要下载，魔法不稳定的玩家就很难受了，不过其实你在 BA 刚开始下载到 0.01% 的时候就可以断开魔法，你会发现资源还可以正常下载，甚至速度还不错（起码在我这里是这样的）

之后注意在资源快下载完的时候再把魔法连上就好

#### 日常游玩

其实 BA 在进入主界面的时候就不需要魔法了，所以进入主界面后把魔法关掉就好，终于可以不用忍受玩到一半突然蹦出来 “网络连接不畅” 的弹窗了

### 作者的怪话

我的游戏 id 是 `` ，游戏名字是 `` ， 希望可以一起来守护学生的笑容口牙😋
