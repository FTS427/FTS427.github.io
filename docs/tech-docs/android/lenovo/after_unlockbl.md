# 解锁 BL 后干点啥

> 在您阅读本文章之前，务必阅读 [*如何解锁 BL*](./unlock_bl.md) 后操作

## 刷入 `Magisk` 获取 Root 权限

1. 使用 `MTKClient` 提取设备中的 `boot` , `vbmeta` 这两个分区的镜像

    提取出来的是后缀为 `bin` 的文件，不需要管它

2. 安装 `Magisk` 应用，喂给 ta `boot.bin` 进行 patch

    打包完成后，将 patch 好的 `img` 文件传入电脑

3. 重启您的设备至 Fastboot (Bootloader) 状态

   ```zsh
   adb reboot bootloader
   ```

4. 刷入打包好的 boot 文件

    ```zsh
    fastboot flash boot 打包好的 boot 文件路径
    ```

    !!! danger "警告"
        刷入后请不要马上重启！否则会陷入反复重启！

5. 刷入原厂的 vbmeta 文件并关闭 avb

    `avb`是一种从 Android 10 开始的一种基于 vbmeta 出于安全考虑的一种对系统进行检查的功能，如果校验不通过系统会陷入无限重启

    ```zsh
    fastboot vbmeta vbmeta文件路径 --disable-verification
    ```

最后重启， `Magisk` 就刷好了，你已经拿到了设备的最高权限: root

### 小技巧 ———— 在已经 root 后的设备上快速获取分区镜像

1. 打开你计算机中的终端，输入以下命令进入 Android 系统内的 shell

    ```zsh
    adb shell
    ```

2. 为 shell 取得 root 权限

    ```shell
    su
    ```

3. 查看当前设备的分区对应情况，确定其路径

    ```shell
    ls -l /dev/block/by-name/
    ```

    输入该命令并按下回车后，你将看到类似如下的内容

    ```shell
    lrwxrwxrwx 1 root root 21 2024-08-05 12:12 boot -> /dev/block/mmcblk0p31
    lrwxrwxrwx 1 root root 20 2024-08-05 12:12 boot_para -> /dev/block/mmcblk0p1
    lrwxrwxrwx 1 root root 21 2024-08-05 12:12 cache -> /dev/block/mmcblk0p35
    lrwxrwxrwx 1 root root 21 2024-08-05 12:12 dtbo -> /dev/block/mmcblk0p32
    lrwxrwxrwx 1 root root 20 2024-08-05 12:12 expdb -> /dev/block/mmcblk0p4
    lrwxrwxrwx 1 root root 21 2024-08-05 12:12 flashinfo -> /dev/block/mmcblk0p42
    lrwxrwxrwx 1 root root 21 2024-08-05 12:12 fpinfo -> /dev/block/mmcblk0p36
    ...(省略)
    ```

    我们在下一步的提取中需要 `->` 后面的内容

4. 找到需要提取的分区，并提取

    ```shell
    dd if=上一步命令执行后显示的分区对应路径 of=你需要存放分区镜像的绝对路径以及该分区提取后的文件名称
    ```

    示例:

    ```shell
    dd if=/dev/block/mmcblk0p31 of=/sdcard/boot.img
    ```

    该命令执行成功后会在 /sdcard/ 目录下生成一个叫做 boot.img 的分区镜像文件

5. 拉取提取好的分区镜像文件

    先退出 shell

    ```shell
    exit
    ```

    使用 ADB 拉取

    ```zsh
    adb pull 分区镜像文件绝对路径 ./
    ```
