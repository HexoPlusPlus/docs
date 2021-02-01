# 适配Hexo

# 活跃时间

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
  function loadtime() {
    var ele = document.createElement("script");
    ele.src = "https://{yourdomain}/hpp/api/getblogeractive";
    document.body.appendChild(ele);
  }
  if (window.addEventListener)
    window.addEventListener("load", loadtime, false);
  else if (window.attachEvent)
    window.attachEvent("onload", loadtime);
  else window.onload = loadtime;
</script>
```

请自行替换`{yourdomain}`

# 说说功能

说说功能是HexoPlusplus一大典型功能，简约而不简单，大小仅`14.4kb+2.6kb(JS+CSS,gzipped)`，较同类产品[artitalk](https://artitalk.js.org/) `110kb(JS,gzipped)`小五倍。

脱离LeanCloud，转向CloudFlareKV，可用性高(>99%)，读取延迟小(<2ms)

支持暗色模式

## 引入

```html
<!-- 引用 HexoPlusPlus_Talk组件 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@0.1.5/dist/talk.css" /> 
<script src="https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@0.1.5/dist/talk.js"></script>
<!-- 创建HexoPlusPlus_Talk容器 -->
<div id="hpp_talk"></div>
<!-- 激活HexoPlusPlus_Talk -->
<script>
new hpp_talk({
id:"hpp_talk",
back: "https://{yourdomain}/hpp/api/gethpptalk"
})
</script>
```

> 注意锁定版本，避免因不兼容导致的问题

![](https://cdn.jsdelivr.net/gh/HexoPlusPlus/docs@master/docs/img/23.png)

![](https://cdn.jsdelivr.net/gh/HexoPlusPlus/docs@master/docs/img/22.png)