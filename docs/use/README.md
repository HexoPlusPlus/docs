# 正常玩法

# 写作

写作功能是HexoPlusPlus最典型的功能，也是最`特色`的功能，支持MarkDown、全屏写作，并集成了图床功能。

![](https://cdn.jsdelivr.net/gh/HexoPlusPlus/docs@master/docs/img/7.png)
![](https://cdn.jsdelivr.net/gh/HexoPlusPlus/docs@master/docs/img/18.png)

## 修改
点击输入框，会自动下拉列表所有的文章，选择文章，点击GET，输入框就会输出文章内容，直接修改即可。

## 新增
清空输入框，输入文件名+`.md`后缀即可

## 上传

修改完毕后，点击上传按钮既可 

> 注意：此处不要点击过于频繁，Github可能没有清除原始哈希导致上传失败

## 删除

请使用[文件管理功能](#文件管理)删除。

## 图床

点击<img src="https://cdn.jsdelivr.net/gh/HexoPlusPlus/docs@master/docs/img/19.png">上传图片至Github，默认用JSDelivr加速

Anyway，以后可能会增加`ipfs图床`、`imgur图床`、`7bu图床`支持

图片成功上传后，输入框会自动出现以`![](xxx)`格式的图片，修改描述既可。

# 文件管理

> 自从`v0.0.7`之后，获取文件哈希不再通过单文件获取，而是通过列表形式获取，这样可以有效解决因为文件大小超过1MB而无法删除的问题

## 文章管理

`/hpp/admin/docsmanager`

![](https://cdn.jsdelivr.net/gh/HexoPlusPlus/docs@master/docs/img/20.png)

桌面环境下可以进行地址获取、删除、信息获取，手机版只能进行删除或加速地址获取。

## 图片管理

`/hpp/admin/imgsmanager`

![](https://cdn.jsdelivr.net/gh/HexoPlusPlus/docs@master/docs/img/21.png)

支持图片预览





