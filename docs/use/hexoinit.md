# 适配Hexo

> 功能旁边的键值为开启该功能必须所需的配置，一个都不能少

# 活跃时间 

## NEED `零配置`

首先，修改主题模板，一般为`footer.ejs`，在你需要的地方塞入以下代码：

```html
<span id="bloggeractivetime"></span>
```

接着在底下加入js代码:

```html
<script src="https://{yourdomain}/hpp/api/getblogeractive"></script>
```

如果你觉得直接引入会拖慢时间，那你可以和我一样进行懒加载：

```html
<script type="text/javascript">
document.onreadystatechange = function(){
    if(document.readyState == "complete"){
        var ele = document.createElement("script");
        ele.src = "https://{yourdomain}/hpp/api/getblogeractive";
        document.body.appendChild(ele);
     }
}
</script>
```

请自行替换`{yourdomain}`

![](https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@master/doc_img/b_8.png)

# 说说功能 

## NEED `零配置`

说说功能是HexoPlusplus一大典型功能，简约而不简单，大小仅`14.4kb+2.6kb(JS+CSS,gzipped)`，较同类产品[artitalk](https://artitalk.js.org/) `110kb(JS,gzipped)`小五倍。

脱离LeanCloud，转向CloudFlareKV，可用性高(>99%)，读取延迟小(<2ms)

支持暗色模式。

## 引入

> **1.0.5版本及以上静态文件不再存储在/dist/文件夹下，而直接存储在根目录下**

```html
<!-- 引用 HexoPlusPlus_Talk组件 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@1.1.0/talk.css" /> 
<script src="https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@1.1.0/talk_user.js"></script>
<!-- 创建HexoPlusPlus_Talk容器 -->
<div id="hpp_talk"></div>
<!-- 激活HexoPlusPlus_Talk -->
<script>
new hpp_talk({
id:"hpp_talk",//容器id
domain: "",//您的HexoPlusPlus域名，如blogadmin.cyfan.top
limit: 10,//单次获取的最多条数
start: 0,//从第几条开始
//themecss: "" //自定义说说主题，可选【仅1.1.0版本及以上使用】
});
</script>
```

themecss列表：

|提供者|链接|说明|
|---|---|---|
|2X-ercha|(https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@master/plugin/theme/hpp_user_talk/Butter_Fly_1.css)|(https://noionion.top/14413.html)适用于ButterFly|

> 注意锁定版本，避免因不兼容导致的问题

![](https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@master/doc_img/b_9.png)
![](https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@master/doc_img/b_10.png)

# 评论系统-Twikoo加强功能 

## NEED `hpp_twikoo_envId`

Twikoo-一个简洁、安全、免费的静态网站评论系统，基于腾讯云开发。

Twikoo作为一款评论系统，在中国大陆和香港内访问速度非常理想，api的CDN面向中国大陆十分丰富，但面向国外只有一个香港节点，对国外网友体验不佳。

并且Twikoo首次匿名登陆需要发送6个请求，在国内这点时间基本可以忍受，但国外体验就十分糟糕。

而CloudFlare即使是免费版也拥有全球50+数据中心，Anycast优化，全球平均延迟<5ms，但中国大陆体验非常糟糕

TwikooPlus采用CloudFlareWorker中继，首次获取将6个请求简化为3个【refresh_token+access_token+get_comment】，并且缓存refresh_token和access_token【2小时有效】，极大提升了Twikoo在国外的性能【仅只读模式】，同时，对timelimit的设置可以减少误判，对国内访问基本无影响

## 引入


```html
<!-- 引用 HexoPlusPlus_Comment_TwikooPlus组件 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoComment_TwikooPlus@main/dist/comment.css" /> 
<script src="https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoComment_TwikooPlus@main/dist/comment.js"></script>
<!-- 创建HexoPlusPlus_Comment_TwikooPlus容器 -->
<div id="hpp_comment"></div>
<!-- 激活HexoPlusPlus_Comment_TwikooPlus -->
<script>
new hpp_comment({
id:"hpp_comment",//HexoPlusPlus_Comment_TwikooPlus容器ID
envId:"blog-comment-6g821sad74db776c",//与原配置相同，可以不写，若不写，请将mode改为0
//region:"ap-shanghai",//与原配置相同，可以不写
ver:"1.2.0",//Twikoo原组件的版本号，建议写上，避免兼容性问题
domain: "",//您的HexoPlusPlus域名，如blogadmin.cyfan.top
path: 'window.location.pathname',//与原配置相同，必须写上
cdn:"https://dn-qiniu-avatar.qbox.me/avatar/",//头像CDN，必须写上
adminmail: '',//管理员邮箱md5
friendmail: [''],//小伙伴邮箱md5，多个请用,分割
guestcolor: '#8080809e',//路人卡片颜色
friendcolor: 'rgb(102 175 233 / 60%)',//小伙伴卡片颜色
admincolor: '#ffd700',//管理员卡片颜色
timelimit: 200,//单位毫秒，超时设置，默认访问/cdn-cgi/trace拉取用户侧信息，若超过timelimit/位置是CN【中国大陆】/位置是HK【中国香港】则使用Twikoo原生，否则使用TwikooPlus中继
mode:1//1为检测模式，0为强制使用TwikooPlus，但依旧允许手动强制原版
})
</script>
```

你可以访问[我的博客](https://blog.cyfan.top/com/) 查看案例，使用时请以国外IP访问。你也可以进入[我的博客-关于页面](https://blog.cyfan.top/about/) 这个地方的TwikooPlus采用了强制模式【国内访问较差】 

![](https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@master/doc_img/b_11.png)
![](https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@master/doc_img/b_12.png)

