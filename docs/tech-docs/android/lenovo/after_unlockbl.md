# 解锁BL后干点啥

> 在您阅读本文章之前，务必阅读 [*如何解锁BL*](./unlock_bl.md) 后操作

## 刷入 `Magisk` 获取Root权限

1. 再次使用 `MTKClient` 提取设备中的 `boot` , `vbmeta` 这两个分区的镜像

    提取出来的是后缀为 `bin` 的文件，不需要转换至 `img` 格式的

2. 安装 `Magisk` ，喂给ta `boot.bin` 重新打包

    打包完成后，将其打包好的 `img` 文件传入电脑

3. 重启您的设备至 Fastboot (Bootloader) 状态

4. 刷入打包好的boot文件

    ```zsh
    fastboot flash boot 打包好的boot文件路径
    ```

!!! warning 警告
    刷入后请不要马上重启！否则会陷入反复重启！

5. 刷入原厂的vbmeta文件并关闭 avb

    `avb`是一种从Android11开始的一种基于vbmeta出于安全考虑的一种对系统进行检查的功能，如果校验不通过系统会陷入无限重启

    ```zsh
    fastboot vbmeta vbmeta文件路径 --disable-verification
    ```

刷入成功后，重启， `Magisk` 就刷好了！
