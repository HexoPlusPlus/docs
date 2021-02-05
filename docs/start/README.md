# 快速上手

开始之前，鄙人希望您能认识到以下几点

1.我是Hexo用户【或者Hugo、vuepress **|** Typecho和Wordpress用户请点击右上角&times;】

2.我已经实现了[集成部署](https://hexo.io/zh-cn/docs/github-pages) 【GithubAction、Vercel、Travis-CI、GitlabCI、CodingCI **|** 依旧是通过本机上传生成静态网页的用户请点击右上角&times;】

为什么一定要集成部署？你不集成部署那能叫Hexo吗？

集成部署分三步：
1.博客源文件传Github上去【**不是hexo d生成的静态文件！而是源文件！**】
2.选择集成部署服务商
3.创建集成部署，绑定集成部署

一些给小白的参考链接：

GithubAction：[https://blog.cyfan.top/p/e626cb30.html](https://zhuanlan.zhihu.com/p/170563000)

Travis-CI：[鄙人早年经历-ChenYFan的博客](https://blog.cyfan.top/p/e626cb30.html)

Vercel：**暂无** 【鄙人使用Vercel是Clone生成后的静态文件实现CDN加速】

CodingCI：[Coding持续集成实现Hexo自动化部署](https://colsrch.cn/posts/df35c5b1/) 【**此处源代码不能存储在Coding上，只能存在Github上**】

3.我的源代码部署在Github上【这里指的是博客源代码存储于Github，与最终集成部署服务商、CDN无关，如果你将原代码存储在Gtihub，然后用其他的CI部署到CodingPages，这也是允许的】

4.HexoPlusPlus诞生的意义就是为了解决文件存储在Github上不方便更改的问题，并不是Hexo生成器，所以还是需要集成部署来生成静态文件。

5.HexoPlusPlus版本命名遵循Semantic Versioning 3.0.0，格式为`X.Y.Z`。在仅修订版本更新的情况下，不必重新配置。如`1.0.0`-`1.0.99`的更新都不需要重新配置。

6.本站所需要的平台是[CloudFlare](https://cloudflare.com/)，如果你当前网络不适合使用，可以用[Better Cloudflare IP](https://github.com/badafans/better-cloudflare-ip) 获取最适合当前网络环境的CloudFlareIP(如`1.0.0.1`)，然后修改hosts文件重定向：

```
1.0.0.1 cloudflare.com
1.0.0.1 dash.cloudflare.com
1.0.0.1 sparrow.cloudflare.com
1.0.0.1 cloudflareworkers.com
1.0.0.1 assets.hcaptcha.com
1.0.0.1 hcaptcha.com
1.0.0.1 imgs.hcaptcha.com
1.0.0.1 {your_workers_name}.{your_domain_name}.workers.dev
```

> 自行替换`{your_workers_name}`、`{your_domain_name}`

7.HexoPlusPlus比较适合那些使用Hexo有一定经验，并且即使是集成了也存在困扰的用户。如果你是`Hexo小白/萌新`，那么我们建议先在本地部署完毕，使用熟练后再使用集成。

## 部署代码

 先下载，你可以直接从[Github](https://raw.githubusercontent.com/HexoPlusPlus/HexoPlusPlus/main/dist/index.js) 上下载，也可以用[JSdelivr](https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@main/dist/index.js) 加速下载，复制里面的内容。 

 进入[CloudFlare](https://cloudflare.com),注册账户，开通workers不再阐述。 

 点击KV选项，进入并创建一个KV桶，命名空间名称随意 

![](https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@master/doc_img/2.png) 

 新建一个Worker，将获得的源代码直接复制到里头，修改左上角三级域名【可选】，点击保存并部署。 
![](https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@master/doc_img/1.png) 

### 配置账户

返回，先配置变量，`hpp_username`和`hpp_password`，这将分别为你的登录用户名和密码. 

> 强烈建议两者加密保护安全。

> 0.1.3版本及以上支持了多用户登录，多个用户名和密码请用英文符号`,`分割，并且一一对应

> 例如：

> hpp_username：A,B,C

> hpp_password：A'sPassword,B'sPassword,C'sPassword

再划到底下-KV 命名空间绑定-编辑变量-新增变量绑定-变量名称：KVNAME【此处不可更改】，KV命名空间：您之前写的空间名字，如图所示

![](https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@master/doc_img/5.png) 

绑定域名【可选】

![](https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@master/doc_img/11.png)

> 此处域名后面必须加`/*`

> 如果你直接将HPP绑定在博客以下，并且您的博客是由CloudFlare作为CDN的，那么请将绑定路由设置为`yourdomain/hpp/*`

## 安装

> **注意！** HexoPlusPlus安装时所有配置都没有默认值，请不要偷懒。如果实在没有所需的键值或不需要此功能，可以留空

直接进入域名会得到错误页面，请在后面加上`/hpp/admin/login`再登录。

![](https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@master/doc_img/3.png)
![](https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@master/doc_img/4.png)

> **注意！** HexoPlusPlus默认以HTTPS格式传输，外部链接也必须以HTTPS，否则会加载失败

### `域名` 
指HexoPlusPlus绑定的域名，可以是上一步自定义的域名，也可以是CloudFlare分配的三级域名

### `头像地址` 
~~就是头像地址呗~~

### `标题` 
~~同上~~

### `跨域请求` 
默认为`*`，如果担心盗链，可以将其设置为博客域名

### `OwOJSON地址`

表情功能，请填写OwO的JSON地址，向上兼容Twikoo的表情格式。

### `面板背景图片`

背景图片地址

### `Github文档/图片仓库Token`

获得Token的用户至少能够修改github上存储文档/图片的Token，至少具有写入权和读取权，留空则导致文档功能无法使用.
[Token获取](https://github.com/settings/tokens/new)

此处不建议全选。

### `Github文档/图片仓库用户名` 、`Github文档/图片仓库仓库名` 、`Github文档/图片仓库路径`、`Github文档/图片仓库分支`  

如果我存储文档的Github完整路径是`https://github.com/ChenYFan/blog/tree/master/source/_posts`，那么以上配置分别为`ChenYFan`、`blog`、`/source/_posts/`、`master`.

这一切的前提都是您愿意将图片和文件存储在Github上。

> 一般来说，Hexo的仓库路径是`/source/_posts/`，此处无需更改

> **请注意！！！路径前后必须带`/`。**

> **如果存在`abc`文件夹下,那么路径为`/abc/`,若存在根目录下,则为`/`**

> **这个地方大小写敏感！点名表扬Lete**

### `Global API Key`

CloudFlare的Global API Key，用于修改Worker代码以实现自动更新，在[API 密钥](https://dash.cloudflare.com/profile/api-tokens)获取

> 注意！这地方不是**API 令牌**，而是**API 密钥**

![](https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@master/doc_img/16.png)

点击查看，输入密码，复制即可

> **Global API Key是您账户中权限最高的token，请不要泄露**

### `目标Workers名称`

在[部署代码](#部署代码)这一步中填写的三级域名名称，文档中的例子是`white-feather-f3eb`

> 这地方不是你**绑定的域名**，这一步的用处是帮你更新源代码

### `Workers账户ID`

![](https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@master/doc_img/17.png)

Worker界面中的账户ID

### `账户登录邮箱`

指您CloudFlare登陆时所需的邮箱

### `是否自动签到` 

指自动记录博主最近登录时间，开启会大量损耗KV写入限额，**不建议开启**。

### `TwikooEnvId`

Twikoo加强版需要，指Twikoo配置中EnvId。


填写完毕，提交即可！现在，你将进入主页。[刷新之后还停留在配置页面？](/faq/#a2)
