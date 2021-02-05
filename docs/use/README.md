# 正常玩法

# 签到

右上角头像-签到。

# 管理

![](https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@master/doc_img/b_1.png)

- 统计
- 在线更新·点击更新按钮直接更新（需要您CloudFlare访问配置正确）
- <span style="color:red">重置配置</span>·在二级版本更新后您可能需要重新配置
- 从Artitalk中导入
![](https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@master/doc_img/b_2.png)
注意限定class为shuoshuo
去邮箱查看，下载，解压，里面有个json应该叫`shuoshuo.0.json`，用记事本打开，复制里面的内容。
点击`从Artitalk中导入`，粘贴即可

# 写作

写作功能是HexoPlusPlus最典型的功能，也是最`特色`的功能，支持MarkDown、在线预览，并集成了图床功能。
![](https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@master/doc_img/b_3.png)

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

点击ToolBar中的图片按钮，上传图片至Github，默认用JSDelivr加速

Anyway，以后可能会增加`ipfs图床`、`imgur图床`、`7bu图床`支持

图片成功上传后，输入框会自动出现以`![](xxx)`格式的图片，修改描述既可。

## 表情

支持OwO表情格式[表情插入后无法预览？](/faq/#a10)

# 文件管理



## 文章管理

> 文档管理用的方式是单文件获取，这样可以减少列表时间，但是不能获取超过2MB的文档

![](https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@master/doc_img/b_4.png)


## 图片管理

![](https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@master/doc_img/b_5.png)

> 已启用图片懒加载

> 自从`v0.0.7`之后，获取文件哈希不再通过单文件获取，而是通过列表形式获取，这样可以有效解决因为文件大小超过1MB而无法删除的问题


支持图片预览

# 说说

![](https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@master/doc_img/b_6.png)

## 写作

与文章写作无异

## 删除

点击
<svg t="1611833138243" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2021" width="20" height="20"><path d="M832.192 296.96c0.768 10.112 1.28 20.288 1.28 30.656l0 506.112c0 83.264-41.664 158.208-130.432 158.208L311.552 991.936c-88.704 0-130.368-74.944-130.368-158.208L181.184 327.616c0-10.304 0.768-20.544 1.984-30.656l-67.2 0L115.968 170.432l195.648-0.128L311.616 145.92c0-56.32 53.44-102.08 119.36-102.08l152.832 0c65.92 0 119.232 45.76 119.232 102.08l0 23.552 195.712 0.832L898.752 296.96 832.192 296.96 832.192 296.96zM637.76 145.92c0-21.056-24.64-38.784-54.016-38.784L430.912 107.136c-29.312 0-54.08 17.792-54.08 38.784l0 24.32 260.928 0L637.76 145.92 637.76 145.92zM768.192 327.616c0-10.56-0.704-20.8-2.112-30.656L248.512 296.96C247.168 306.816 246.4 317.12 246.4 327.616l0 506.112c0 48.512 12.48 94.976 65.152 94.976l391.488 0c52.864 0 65.216-46.528 65.216-94.976L768.256 327.616 768.192 327.616zM311.552 865.664 311.552 359.936l65.28 0 0 505.728L311.552 865.664 311.552 865.664zM474.688 865.664 474.688 359.936l65.152 0 0 505.728L474.688 865.664 474.688 865.664zM637.76 865.664 637.76 359.936l65.28 0 0 505.728L637.76 865.664 637.76 865.664z" p-id="2022" fill="#1296db"></path></svg>删除单个说说

你可以在[我的博客](https://blog.cyfan.top/%E9%9A%8F%E5%8F%A3%E8%83%A1%E8%AF%B4/) 看到用户端样例，在[适配Hexo](/use/hexoinit)章节中获取如何使用

# 配置修改

![](https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@master/doc_img/b_7.png)

> **配置修改切勿过于频繁，可能会出现提交了但没有显示的问题**

# 备份

进入KV桶，你将会看到以下配置：

- `hpp_activetime` 活跃时间统计时间戳
- `hpp_config` HPP的配置
- `hpp_comment_access_token` TwikooAccessToken
- `hpp_comment_refresh_token` TwikooRefreshToken
- `hpp_talk_data` 说说数据
- `hpp_talk_id` 说说当前id

备份仅需要备份`hpp_config`、`hpp_talk_data`、`hpp_talk_id`。

备份方式：`查看`-`下载`
导入方式：`新增空白键值`-`编辑`-`上传值`
