# LL_Easier -- 一个让安装 LeviLamina 更简单轻松的 Git Action

## 引入

如果你是一个开 基岩版 服务器很久的服主，你多多少少会听说过一个神奇的东西———— LiteLoader ，这是一个可以让你的服务器 绚丽多彩、玩法丰富、禁止作弊 的插件加载器，安装仅仅需要把对应版本号的一些 DLL 和一个 PeEditor 放在 BDS 根目录里，之后注入一下即可

但是随着 LiteLoader 的不断发展，为了提升性能和简易性， LiteLoader 更名为 LeviLamina 开始重新发展

可是，新的 LeviLamina 安装方法看起来令人困扰，所以有了这个 个人 项目———— LL_Easier

> [LeviLamina 官方安装文档](https://levilamina.liteldev.com/quickstart/)

## 如何使用

### 使用模板

首先以[此仓库](https://github.com/FTS427/ll_easier)为模板在您 Github 的帐户下建立一个新仓库

![temp](/assets/tech/ll_e_temp.png)

选择 `Create a new repository`

![add info](/assets/tech/ll_e_info.png)

填写一下相关信息，然后点击 `Create repository`

至此，你已经成功把本仓库克隆到你的账户下

### Action, 启动!

打开 `Action` 页面

![open action](/assets/tech/ll_e_action.png)

点击右侧的 `Pack LeviLamina`

![action select](/assets/tech/ll_e_action_select.png)

点击 `Run workflow` 填入你需要的 LeviLamina 版本号，以及按照个人需求填写其他内容

![run workflow](/assets/tech/ll_e_run.png)

填写好后，点击绿色的 `Run workflow` 按钮，再等个一杯白开水的功夫你就可以去 `Releases` 里找到期待中的 `ll_ll版本号_ll所需bds版本号.zip` 啦！

### 安装 LeviLamina

先前往 [这里](https://www.minecraft.net/zh-hans/download/server/bedrock) 下载 所需版本 的 BDS 压缩包

??? question "官方网站中的 BDS 版本和打包出来的需求版本不一致怎么办"
    如果发现版本在官方界面下载的与 Git Action 已经打包好的所需版本不一致，可以前往 [Minecraft Wiki](https://zh.minecraft.wiki/) 中查找所需版本，下载 BDS

将下载好的 BDS 压缩文件解压在一个用于存储服务器文件的安全位置（以下简称 `BDS 根目录` ）

然后将 `Releases` 的压缩包文件解压在任意一个地方，然后将解压出的 `llbds` 字样文件夹里的东西全部移动至 `BDS 根目录`

双击运行 `PeEditor.exe` ，等待 `LeviLamina` 注入完成

最后，双击注入完成的 `bedrock_server_mod.exe`，成功开服！

## `Run workflow` 页中选项解释

| 名称          | 解释                       | 默认值        |
| ------------- | ------------------------- | ------------- |
| `LL_VER`      | `LeviLamina` 所需安装版本   | 0.1.0         |
| `LSE`         | 是否安装 `LSE`             | false         |
| `RUNTIME`     | 是否包括`LeviLamina`所需的 C++ 运行时| false|
| `SCRIPTS`     | 是否运行仓库目录下的 `user_scripts.bat`|false|

!!! exaple "实验性"
    `SCRIPTS` 功能未经测试，出现任何问题后果自负！

## 工作原理

在 Git Action 的服务器上先安装 lip ，之后利用 Git Action 的服务器 “网速快” 的 “特性”，用 lip 安装 LeviLamina 之类，安装完成后再将其文件压缩并扔在 `Releases` 中

## Bug 反馈和建议?

提在 [Issues](https://github.com/FTS427/ll_easier/issues) 里，或交 [PR](https://github.com/FTS427/ll_easier/pulls)

什么？你说从 `Releases` 中下载更慢？可以用一些镜像站嘛～

[镜像站1](https://moeyy.cn/gh-proxy)

[镜像站2](https://gh.lldc.top)
