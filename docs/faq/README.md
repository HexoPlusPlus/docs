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
# 常见问题

# A1：
KV会不会读/写炸？炸了之后会不会产生额外费用？
# B1：
首先弄清楚的是，无论什么办法都不能彻底保证防御别人故意搞你。关于读取，CloudFlareKV支持每天高达10万次的读取量【因为这货生来就是为了频繁读取的】，即使被攻击了10万次一时半会儿搞不完，而且Workers一旦一分钟请求超过1000就会开5s盾，读取这一块是不必担心的。至于写入，每天只有1000次机会，但不用担心，这一千次机会全部掌握在你自己手中，KV的写入、列表和删除都需要鉴权才行，不鉴权根本写不进【所以强烈建议把自动签到关闭，因为这样子很容易写完】一旦次数用尽，Free版本会停止运行或直接回源【回源了也是返回错误】，不必担心费用；至于捆绑计划扣不扣费，没有实际体验，无法得出结论。

# A2：
为什么点击上传配置之后还是在配置界面？
# B2：
首先得看一下KV里面有没有写入东西，如果有，那是KV缓存周期的锅，按照文档的说法，因为是全球边缘计算，KV值需要60s才能同步到各个节点；当然了，实际体验中只要20s既可【个人仅出现过一次，正常情况下都是刷新就进去了】

# A3：
CloudFlare，慢！
# B3：
那是你自己的事情，绑定域名的时候可以把ip指向适合你的节点可以得到较好的结果，Cloudlare的任播在中国境内没有起到很好的作用【不过移动指向HKG还是杠杠的】再不济，国内CDN再套一层也能解决问题。

或者，你可以用[这个项目Better CloudFlare IP](https://github.com/badafans/better-cloudflare-ip) ，获取最适合你当前环境的CloudFlareIP，然后修改Hosts或者绑定域名时指向这个IP。

# A4：
我要部署到自己的服务器上！
# B4：
首先，HPP诞生的意义就是无服务器，其次，真的硬要部署，你可以使用CloudFlare的Wrangler间接实现，或者反向代理。

# A5：
莫得Vercel版本？

# B5：
Vercel是不可能的，这辈子都是不可能的；Vercel可没有像KV一样的键值存储，两者也难以同步。

# A6：
为什么直接打开提示Error？

# B6：
HexoPlusPlus考虑到有些人会直接部署在博客域名底下，所以故意往下嵌套了一层/hpp/，直接部署在博客底下只要将域名绑定在youdomain/hpp/*即可。

# A7：
HexoPlusPlus这么牛逼，完全可以另开发一套博客系统，为什么不？

# B7：
首先，Hexo无论是在用户体验上还是插件主题市场上都占有极高的优势，新的博客系统反而会受制于此，并且，Github亦有类似项目，再弄也只是雷同，与之新开发带来的种种麻烦，不如给当插件。

再说了，Hexo用户会有几个会迁入？Hexo主打静态，这个时候用Worker返回网页岂不是逆向而行。

# A8：
配置完后出现文件统计undefined，无法获取文件

# B8：

1. 请确保你的路径都填写正确了，<span class="heimu">眼睛上起雾的可能不只你一个</span>
2. 请确保大小写正确。
3. 你Token还有效吗？你有没有吊销这个Token？

# A9：
文档可以获取，但无法修改

# B9：

1. 请确保版本`>=1.0.2`<span class="heimu">这锅我得背</span>
2. Token没有写入权限

# A10：
表情插入后无法预览
# B10：

~~Editor.md的问题，无法识别路径中的`@`符号，<span class="heimu">这锅我不背</span>，我已提出Issues[#901](https://github.com/pandao/editor.md/issues/901)。~~

1.0.3版本已修复<span class="heimu">还是要我背</span>

