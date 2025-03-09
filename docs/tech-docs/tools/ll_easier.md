# LL_Easier -- 一个让安装 LeviLamina 更简单轻松的 Git Action

## 引入

如果你是一个开 基岩版 服务器很久的服主，你多多少少会听说过一个神奇的东西———— LiteLoaderBDS ，这是一个可以让你的服务器 绚丽多彩、玩法丰富、禁止作弊 的插件加载器，安装仅仅需要把对应版本号的一些 DLL 和一个 PeEditor 放在 BDS 根目录里，之后注入一下即可

但是随着 LiteLoaderBDS 的不断发展，为了提升性能和做到模块化， LiteLoaderBDS 更名为 LeviLamina 开始重新发展

可是，新的 LeviLamina 安装方法看起来令人困扰，所以有了这个 个人 项目———— LL_Easier

> [LeviLamina 官方安装文档](https://levilamina.liteldev.com/quickstart/)，右上角切换中文

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

### Auto 自动构建

在创建仓库时注意要选择 包含所有分支 选项

之后把分支切换为 auto 分支，找到 `auto_pack_config.json` 文件，打开，进行编辑，最后保存， Git Action 会自动打包

#### auto_pack_config.json 解释

```json title="auto_pack_config.json"
[
    {
        "LeviLaminaVersion": "0.13.5",  // 要打包的 LeviLamina 的版本号，如果填写为 "latest" 则会自动打包最新版本
        "includeLSE": false,  // 是否开启 LSE
        "includeRuntime": false,  // 是否包含适用于 LeviLamina 的 C++ Runtime
        "useUserScripts": false  // 是否启用 user_scripts.ps1 功能
        // true -> 开启， false -> 关闭
    }
]
```

### 安装 LeviLamina

先前往 [这里](https://www.minecraft.net/zh-hans/download/server/bedrock) 下载 所需版本 的 BDS 压缩包

??? question "官方网站中的 BDS 版本和打包出来的需求版本不一致怎么办"
    如果发现版本在官方界面下载的与 Git Action 已经打包好的所需版本不一致，可以前往 [Minecraft Wiki](https://zh.minecraft.wiki/) 中查找所需版本，下载 BDS，~~或者修改官网下载链接对应的版本号~~

    格式：https://minecraft.azureedge.net/bin-win/bedrock-server-版本.zip
    
    举个栗子：`https://minecraft.azureedge.net/bin-win/bedrock-server-1.21.20.03.zip`

将下载好的 BDS 压缩文件解压在一个用于存储服务器文件的安全位置（以下简称 `BDS 根目录` ）

然后将 `Releases` 的压缩包文件解压在任意一个地方，然后将解压出的 `ll` 字样文件夹里的东西全部移动至 `BDS 根目录`

如果之前没有安装 msvc2015 运行库，请先安装运行库，本项目支持打包运行库安装程序进入压缩包

在确保 BDS 版本和 LL 版本匹配的情况下双击运行 `PeEditor.exe` ，等待 `LeviLamina` 注入完成

最后，双击注入完成的 `bedrock_server_mod.exe`，成功开服！

## `Run workflow` 页中选项解释

| 名称          | 解释                       | 默认值        |
| ------------- | ------------------------- | ------------- |
| `LL_VER`      | `LeviLamina` 所需安装版本   | 0.1.0         |
| `LSE`         | 是否安装 `LSE`             | false         |
| `RUNTIME`     | 是否包括`LeviLamina`所需的 C++ 运行时| false|
| `SCRIPTS`     | 是否运行仓库目录下的 `scripts/user_scripts.ps1`|false|

### 安装 `LSE` 包括了哪些脚本支持包

QuickJs, Lua, NodeJS, Python

### 编写 user_scripts.ps1 -- 提前准备好你所需要的环境

默认的 user_scripts.ps1 会包含一行安装最新版 GMLIB 的示例

```text title="user_scripts.ps1"
lip install -y github.com/GroupMountain/GMLIB
```

#### 如何编写？

很简单，其实就是 powershell 脚本的编写，所有的cmd功能他都能实现

#### 注意事项

如果其中想使用 lip 安装别的包，请一定写成这个样式，否则将可能出现故障

```text title="user_scripts.ps1"
lip install -y 包的url
```

其次，请不要更改此文件的名称，否则将会出现问题

## 工作原理

在 Git Action 的服务器上先安装 lip ，之后利用 Git Action 的服务器 “网速快” 的 “特性”，用 lip 安装 LeviLamina 之类，安装完成后再将其文件压缩并扔在 `Releases` 中

## 已知的问题

在打包 LL 时选择附带 LSE ，会一律打包为最新版本的 LSE ，这可能会带来一些问题 ~~正在思考解决方案咕~~

## Bug 反馈和建议?

提在 [Issues](https://github.com/FTS427/ll_easier/issues) 里，或交 [PR](https://github.com/FTS427/ll_easier/pulls)

!!!note "请注意，LL 和 LSE 的问题请不要投递到这里"

什么？你说从 `Releases` 中下载更慢？可以用一些镜像站嘛～

[镜像站1](https://moeyy.cn/gh-proxy)

[镜像站2](https://gh.lldc.top)

当然，你如果想把这个项目运用到你的 个人/社团/企业 项目中，这也是被许可的；不过，我请您严格遵守此项目的开源协议！

## 感谢

很感谢 [Litezero](https://github.com/Litezero) 大佬贡献的 auto 自动更新版本 & 检测对应 BDS 版本功能！

很感谢 Luna 大佬提供的 py 脚本进行检测 BDS 版本

很感谢 [n15421](https://github.com/xzfg-n15421) 对项目进行优化
