# Scoop --Windows 上的非官方包管理器使用

## 为什么要用 `包管理器` ？何为 `包管理器` ？

所谓 `包管理器`，是一种统一性强的安装、卸载、控制型的工具，几乎所有的类 Unix 发行版都拥有自己的包管理器，例如 `Arch Linux` 酱的“吃豆人”( `pacman` )

但是早期的 Windows(8.1, 8, 7, XP) 没有类似的工具(Windows 10 后期引入了 `winget` 的官方包管理器)，用户只能在犹如茫茫大海的互联网上自己搜寻零散的软件，这很麻烦，所有有了 `scoop` (中文译为“勺”)

## 安装

由于 `scoop` 是由 PowerShell 写的一个工具，所以请确保您的计算机中拥有 PowerShell

> 链接：[*如何安装 PowerShell*](https://learn.microsoft.com/zh-cn/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.4)

请先以 `Administrator` 身份打开 PowerShell，键入以下命令确保 PowerShell 拥有远程权限

```powershell
    Set-ExecutionPolicy RemoteSigned -scope CurrentUser
```

之后以正常普通用户启用 PowerShell ，键入以下命令获取 `scoop` 安装脚本

```powershell
    irm get.scoop.sh -outfile 'install.ps1'
```

获取成功后脚本会自动运行安装 `scoop` ，默认的安装目录位于 `C:\Users\ 你的用户名 \scoop` ，当然，你可以更改安装目录用以下命令

```powershell
    .\install.ps1 -ScoopDir ' scoop 目录 ' -ScoopGlobalDir ' 安装的程序的目录 ' -NoProxy
```

!!! info "注意"
    指定的目录中最好不要有中文或特殊符号，这可能会引起意想不到的不必要的麻烦

自此， `scoop` 已经成功安装在计算机中

## 使用
