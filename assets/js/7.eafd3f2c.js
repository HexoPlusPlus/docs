(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{338:function(a,t,r){},368:function(a,t,r){"use strict";r(338)},377:function(a,t,r){"use strict";r.r(t);r(368);var s=r(40),e=Object(s.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"常见问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[a._v("#")]),a._v(" 常见问题")]),a._v(" "),r("h1",{attrs:{id:"a1"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#a1"}},[a._v("#")]),a._v(" A1：")]),a._v(" "),r("p",[a._v("KV会不会读/写炸？炸了之后会不会产生额外费用？")]),a._v(" "),r("h1",{attrs:{id:"b1"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#b1"}},[a._v("#")]),a._v(" B1：")]),a._v(" "),r("p",[a._v("首先弄清楚的是，无论什么办法都不能彻底保证防御别人故意搞你。关于读取，CloudFlareKV支持每天高达10万次的读取量【因为这货生来就是为了频繁读取的】，即使被攻击了10万次一时半会儿搞不完，而且Workers一旦一分钟请求超过1000就会开5s盾，读取这一块是不必担心的。至于写入，每天只有1000次机会，但不用担心，这一千次机会全部掌握在你自己手中，KV的写入、列表和删除都需要鉴权才行，不鉴权根本写不进【所以强烈建议把自动签到关闭，因为这样子很容易写完】一旦次数用尽，Free版本会停止运行或直接回源【回源了也是返回错误】，不必担心费用；至于捆绑计划扣不扣费，没有实际体验，无法得出结论。")]),a._v(" "),r("h1",{attrs:{id:"a2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#a2"}},[a._v("#")]),a._v(" A2：")]),a._v(" "),r("p",[a._v("为什么点击上传配置之后还是在配置界面？")]),a._v(" "),r("h1",{attrs:{id:"b2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#b2"}},[a._v("#")]),a._v(" B2：")]),a._v(" "),r("p",[a._v("首先得看一下KV里面有没有写入东西，如果有，那是KV缓存周期的锅，按照文档的说法，因为是全球边缘计算，KV值需要60s才能同步到各个节点；当然了，实际体验中只要20s既可【个人仅出现过一次，正常情况下都是刷新就进去了】")]),a._v(" "),r("h1",{attrs:{id:"a3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#a3"}},[a._v("#")]),a._v(" A3：")]),a._v(" "),r("p",[a._v("CloudFlare，慢！")]),a._v(" "),r("h1",{attrs:{id:"b3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#b3"}},[a._v("#")]),a._v(" B3：")]),a._v(" "),r("p",[a._v("那是你自己的事情，绑定域名的时候可以把ip指向适合你的节点可以得到较好的结果，Cloudlare的任播在中国境内没有起到很好的作用【不过移动指向HKG还是杠杠的】再不济，国内CDN再套一层也能解决问题。")]),a._v(" "),r("p",[a._v("或者，你可以用"),r("a",{attrs:{href:"https://github.com/badafans/better-cloudflare-ip",target:"_blank",rel:"noopener noreferrer"}},[a._v("这个项目Better CloudFlare IP"),r("OutboundLink")],1),a._v(" ，获取最适合你当前环境的CloudFlareIP，然后修改Hosts或者绑定域名时指向这个IP。")]),a._v(" "),r("h1",{attrs:{id:"a4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#a4"}},[a._v("#")]),a._v(" A4：")]),a._v(" "),r("p",[a._v("我要部署到自己的服务器上！")]),a._v(" "),r("h1",{attrs:{id:"b4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#b4"}},[a._v("#")]),a._v(" B4：")]),a._v(" "),r("p",[a._v("首先，HPP诞生的意义就是无服务器，其次，真的硬要部署，你可以使用CloudFlare的Wrangler间接实现，或者反向代理。")]),a._v(" "),r("h1",{attrs:{id:"a5"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#a5"}},[a._v("#")]),a._v(" A5：")]),a._v(" "),r("p",[a._v("莫得Vercel版本？")]),a._v(" "),r("h1",{attrs:{id:"b5"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#b5"}},[a._v("#")]),a._v(" B5：")]),a._v(" "),r("p",[a._v("Vercel是不可能的，这辈子都是不可能的；Vercel可没有像KV一样的键值存储，两者也难以同步。\n当然如果你就算是自选ip也无法忍受时,可以用官方仓库的CloudFlare2Vercel,用Vercel中继CloudFlareWorker,获得使用加速，"),r("strong",[a._v("【但Worker还是要部署的】")])]),a._v(" "),r("h1",{attrs:{id:"a6"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#a6"}},[a._v("#")]),a._v(" A6：")]),a._v(" "),r("p",[a._v("为什么直接打开提示Error？")]),a._v(" "),r("h1",{attrs:{id:"b6"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#b6"}},[a._v("#")]),a._v(" B6：")]),a._v(" "),r("p",[a._v("HexoPlusPlus考虑到有些人会直接部署在博客域名底下，所以故意往下嵌套了一层/hpp/，直接部署在博客底下只要将域名绑定在youdomain/hpp/*即可。")]),a._v(" "),r("h1",{attrs:{id:"a7"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#a7"}},[a._v("#")]),a._v(" A7：")]),a._v(" "),r("p",[a._v("HexoPlusPlus这么牛逼，完全可以另开发一套博客系统，为什么不？")]),a._v(" "),r("h1",{attrs:{id:"b7"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#b7"}},[a._v("#")]),a._v(" B7：")]),a._v(" "),r("p",[a._v("首先，Hexo无论是在用户体验上还是插件主题市场上都占有极高的优势，新的博客系统反而会受制于此，并且，Github亦有类似项目，再弄也只是雷同，与之新开发带来的种种麻烦，不如给当插件。")]),a._v(" "),r("p",[a._v("再说了，Hexo用户会有几个会迁入？Hexo主打静态，这个时候用Worker返回网页岂不是逆向而行。")]),a._v(" "),r("h1",{attrs:{id:"a8"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#a8"}},[a._v("#")]),a._v(" A8：")]),a._v(" "),r("p",[a._v("配置完后出现文件统计undefined，无法获取文件")]),a._v(" "),r("h1",{attrs:{id:"b8"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#b8"}},[a._v("#")]),a._v(" B8：")]),a._v(" "),r("ol",[r("li",[a._v("请确保你的路径都填写正确了，"),r("span",{staticClass:"heimu"},[a._v("眼睛上起雾的可能不只你一个")])]),a._v(" "),r("li",[a._v("请确保大小写正确。")]),a._v(" "),r("li",[a._v("你Token还有效吗？你有没有吊销这个Token？")])]),a._v(" "),r("h1",{attrs:{id:"a9"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#a9"}},[a._v("#")]),a._v(" A9：")]),a._v(" "),r("p",[a._v("文档可以获取，但无法修改")]),a._v(" "),r("h1",{attrs:{id:"b9"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#b9"}},[a._v("#")]),a._v(" B9：")]),a._v(" "),r("ol",[r("li",[a._v("请确保版本"),r("code",[a._v(">=1.0.2")]),r("span",{staticClass:"heimu"},[a._v("这锅我得背")])]),a._v(" "),r("li",[a._v("Token没有写入权限")])]),a._v(" "),r("h1",{attrs:{id:"a10"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#a10"}},[a._v("#")]),a._v(" A10：")]),a._v(" "),r("p",[a._v("表情插入后无法预览")]),a._v(" "),r("h1",{attrs:{id:"b10"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#b10"}},[a._v("#")]),a._v(" B10：")]),a._v(" "),r("p",[r("s",[a._v("Editor.md的问题，无法识别路径中的"),r("code",[a._v("@")]),a._v("符号，"),r("span",{staticClass:"heimu"},[a._v("这锅我不背")]),a._v("，我已提出Issues"),r("a",{attrs:{href:"https://github.com/pandao/editor.md/issues/901",target:"_blank",rel:"noopener noreferrer"}},[a._v("#901"),r("OutboundLink")],1),a._v("。")])]),a._v(" "),r("p",[a._v("1.0.3版本已修复"),r("span",{staticClass:"heimu"},[a._v("还是要我背")])]),a._v(" "),r("h1",{attrs:{id:"a11"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#a11"}},[a._v("#")]),a._v(" A11：")]),a._v(" "),r("p",[a._v("救命啊，我部署还有一大堆问题。")]),a._v(" "),r("h1",{attrs:{id:"b11"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#b11"}},[a._v("#")]),a._v(" B11：")]),a._v(" "),r("p",[a._v("如果你文档实在看不懂，加群吧，"),r("a",{attrs:{href:"https://jq.qq.com/?_wv=1027&k=rAcnhzqK",target:"_blank",rel:"noopener noreferrer"}},[a._v("群号467731779"),r("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);