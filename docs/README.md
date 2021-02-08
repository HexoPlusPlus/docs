---
home: true
heroImage: https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@master/doc_img/icon.png
actionText: 快速上手
actionLink: /start/
features:
- title: 方便
  details: 多后端无缝衔接，以最少的配置帮助你专注于写作。
- title: Workers驱动
  details: 享受世界上最快的JS引擎-GoogleV8，在10ms之内完成难以匹及的事情。
- title: 多功能
  details: 完美解决Hexo做为静态博客无后端的痛苦，包括后端写作、文件管理、微语系统。
footer: MIT Licensed | ChenYFan 2021-永远
---
<style>
span.heimu a.external,span.heimu a.external:visited,span.heimu a.extiw,span.heimu a.extiw:visited {
    color: #252525
}

.heimu,.heimu a,a .heimu,.heimu a.new {
    background-color: #252525;
    color: #252525;
    text-shadow: none
}

body:not(.heimu_toggle_on) .heimu:hover,body:not(.heimu_toggle_on) .heimu:active,body:not(.heimu_toggle_on) .heimu.off {
    transition: color .13s linear;
    color: #fff
}

body:not(.heimu_toggle_on) .heimu:hover a,body:not(.heimu_toggle_on) a:hover .heimu,body:not(.heimu_toggle_on) .heimu.off a,body:not(.heimu_toggle_on) a:hover .heimu.off {
    transition: color .13s linear;
    color: #add8e6
}

body:not(.heimu_toggle_on) .heimu.off .new,body:not(.heimu_toggle_on) .heimu.off .new:hover,body:not(.heimu_toggle_on) .new:hover .heimu.off,body:not(.heimu_toggle_on) .heimu.off .new,body:not(.heimu_toggle_on) .heimu.off .new:hover,body:not(.heimu_toggle_on) .new:hover .heimu.off {
    transition: color .13s linear;
    color: #ba0000
}
</style>
HexoPlusPlus~~也叫Hexo艹~~ 或者叫HPP、Hexo++，是一个基于`CloudFlareWorkers`和`CloudFlareKV`技术的Hexo后端程序，目的是解决Hexo无后端带来的种种麻烦，支持但不限于Hexo等静态博客。

![](https://cdn.jsdelivr.net/gh/HexoPlusPlus/CDN@master/doc_img/b_1.png)

# HexoPlusPlus是干什么的？

HexoPlusPlus是一个无服务器Hexo后端，实现云写作，集成了大部分动态博客的功能，致力于解决静态博客所有痛点。

HexoPlusPlus不是Hexo，也不是静态网页生成器，它是一个插件，辅助Hexo云端写作。

众所周知，<span class="heimu">Hexo+HexoPlusPlus+Twikoo=Typecho</span>

**本篇文档仅始用HexoPlusPlus1.1.x**

**注意，HexoPlusPlus在使用前您的博客必须保证已完成集成部署**

## 特色

- 免费
- 易上手
- 图形化安装，KV数据库
- 登录验证码
- 多用户登录
- 高度自适应编辑器,手机端流畅写作
- 全主题适配
- Material Dashboard，细腻书写新体验
- 快,服务端处理不超过10ms<span class="heimu">主要是CloudFlare的限制，很多高负荷运算只能拉到前端处理</span>
- 高度自适应，全平台写作

## 功能

- 文章在线编辑
- Github图床支持
- 文件管理
- 博主活跃时间获取
- 说说功能
- Twikoo加强

点击快速上手，开始使用 | [QQ群：467731779](https://jq.qq.com/?_wv=1027&k=rAcnhzqK)
