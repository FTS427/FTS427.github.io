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

!!! 警告
    刷入后请不要马上重启！否则会陷入反复重启！

5. 刷入原厂的vbmeta文件并关闭 `avb`

    ```zsh
    fastboot vbmeta vbmeta文件路径 --disable-verification
    ```

刷入成功后，重启， `Magisk` 就刷好了！
