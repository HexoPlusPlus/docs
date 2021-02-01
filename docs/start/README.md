# 快速上手

开始之前，鄙人希望您能认识到以下几点

1.我是Hexo用户【或者Hugo、vuepress|Typecho和Wordpress用户请点击右上角&times;】

2.我已经实现了[集成部署](https://hexo.io/zh-cn/docs/github-pages) 【GithubAction、Vercel、Travis-CI|依旧是通过本机上传生成静态网页的用户请点击右上角&times;】

3.我的源代码部署在Github上【Gitlab以后有可能会支持|Coding永远不支持】

4.HexoPlusPlus诞生的意义就是为了解决文件存储在Github上不方便更改的问题，并不是Hexo生成器，所以还是需要集成部署来生成静态文件。

## 部署代码

 先下载，你可以直接从[Github](https://raw.githubusercontent.com/HexoPlusPlus/HexoPlusPlus/main/dist/index.js) 上下载，也可以用[JSdelivr](https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@main/dist/index.js) 加速下载，复制里面的内容。 

 进入[CloudFlare](https://cloudflare.com),注册账户，开通workers不再阐述。 

 点击KV选项，进入并创建一个KV桶，命名空间名称随意 

![](https://cdn.jsdelivr.net/gh/HexoPlusPlus/docs@master/docs/img/2.png) 

 新建一个Worker，将获得的源代码直接复制到里头，修改左上角三级域名【可选】，点击保存并部署。 
![](https://cdn.jsdelivr.net/gh/HexoPlusPlus/docs@master/docs/img/1.png) 
返回，先配置变量，`hpp_username`和`hpp_password`，这将分别为你的登录用户名和密码. 

> 强烈建议两者加密保护安全。

再划到底下-KV 命名空间绑定-编辑变量-新增变量绑定-变量名称：KVNAME【此处不可更改】，KV命名空间：您之前写的空间名字，如图所示

![](https://cdn.jsdelivr.net/gh/HexoPlusPlus/docs@master/docs/img/5.png) 

绑定域名【可选】

![](https://cdn.jsdelivr.net/gh/HexoPlusPlus/docs@master/docs/img/11.png)

> 此处域名后面必须加`/*`

> 如果你直接将HPP绑定在博客以下，并且您的博客是由CloudFlare作为CDN的，那么请将绑定路由设置为`youdomain/hpp/*`

## 安装

直接进入域名会得到错误页面，请在后面加上`/hpp/admin/login`再登录。

![](https://cdn.jsdelivr.net/gh/HexoPlusPlus/docs@master/docs/img/3.png)
![](https://cdn.jsdelivr.net/gh/HexoPlusPlus/docs@master/docs/img/4.png)


### `域名` 
指HexoPlusPlus绑定的域名，可以是上一步自定义的域名，也可以是CloudFlare分配的三级域名

### `头像地址` 
~~就是头像地址呗~~

### `标题` 
~~同上~~

### `跨域请求` 
默认为`*`，如果担心盗链，可以将其设置为博客域名

### `Github文档/图片仓库Token`
能够修改github上存储文档/图片的Token，至少具有写入权和读取权，留空则导致文档功能无法使用.
[Token获取](https://github.com/settings/tokens/new)

### `Github文档/图片仓库用户名` 、`Github文档/图片仓库仓库名` 、`Github文档/图片仓库路径`、`Github文档/图片仓库分支`  

如果我存储文档的Github完整路径是`https://github.com/ChenYFan/blog/tree/master/source/_posts`，那么以上配置分别为`ChenYFan`、`blog`、`/source/_posts/`、`master`.

这一切的前提都是您愿意将图片和文件存储在Github上。

> **请注意！！！路径前后必须带`/`。**

> **如果存在`abc`文件夹下,那么路径为`/abc/`,若存在根目录下,则为`/`**

> **这个地方大小写敏感！点名表扬Lete**

### `Global API Key`

CloudFlare的Global API Key，用于修改Worker代码以实现自动更新，在[API 密钥](https://dash.cloudflare.com/profile/api-tokens)获取

> 注意！这地方不是**API 令牌**，而是**API 密钥**

![](https://cdn.jsdelivr.net/gh/HexoPlusPlus/docs@master/docs/img/16.png)

点击查看，输入密码，复制即可

> **Global API Key是您账户中权限最高的token，请不要泄露**

### `目标Workers名称`

在[部署代码](#部署代码)这一步中填写的三级域名名称，文档中的例子是`white-feather-f3eb`

### `Workers账户ID`

![](https://cdn.jsdelivr.net/gh/HexoPlusPlus/docs@master/docs/img/17.png)

Worker界面中的账户ID

### `账户登录邮箱`

指您CloudFlare登陆时所需的邮箱

### `是否自动签到` 

指自动记录博主最近登录时间，开启会大量损耗KV写入限额，**不建议开启**。

填写完毕，提交即可！现在，你将进入主页。[刷新之后还停留在配置页面？](/faq/#a2)
