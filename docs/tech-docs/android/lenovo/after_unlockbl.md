# 解锁BL后干点啥

## 刷入 `Magisk` 获取Root权限

再次使用 `MTKClient` 提取设备中的 `boot` , `vbmeta` 这两个分区的镜像

提取出来的是后缀为 `bin` 的文件，不需要转换至 `img` 格式的

安装 `Magisk` ，喂给ta `boot.bin` 重新打包

打包完成后，将其打包好的 `img` 文件传入电脑
