# 主题支持

以下主题已适配HexoPlusPlus:

## https://github.com/lete114/hexo-theme-MengD

MengD仅支持HPP_Talk

## https://github.com/volantis-x/hexo-theme-volantis

volantis在2/8的dev分支中仅支持HPP_Talk

## https://github.com/jerryc127/hexo-theme-butterfly

~~ButterFly在2/11的dev分支中仅支持HPP_Talk~~

ButterFly用户请安装`hexo-butterfly-hpptalk`或自行引入


<details>
    <summary>ButterFly插件安装方式</summary>

1. 前期部署
    参考[hexoplusplus 文档- 快速上手](https://hexoplusplus.js.org/start/)

2. 添加配置信息
    在**主题**的配置文件中添加

  ```yaml
  # HexoPlusPlus Talk
  # see https://hexoplusplus.js.org
  hpptalk:
    enable: true 
    domain:
    path:
    limit:
    start:
    js:
    css:
    option:
    front_matter:
  ```

  | 参数| 解释 |
  | ------------ | ------------------------------------------------------------ |
  | domain | 【必须】您的HexoPlusPlus 域名，如admin.immyw.com |
  | limit | 【可选】单次获取的最多条数（默认`8`） |
  | start | 【可选】从第几条开始（默认`0`） |
  | path | 【可选】hpptalk 的路径名称（默认为` hpptalk`，生成的页面为hpptalk/index.html） |
  | js | 【可选】更换hpptalk 的JS CDN（默认：`https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@latest/talk_user.js`) |
  | css | 【可选】更换hpptalk 的CSS CDN（默认`https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@latest/talk.css`） |
  | option | 【可选】hpptalk 需要的额外配置 |
  | front_matter | 【可选】hpptalk 页面的front_matter 配置 |

</details>

## https://github.com/hifun-team/hexo-theme-miracle

Miracle 主题在 `v1.5.5` 版本后支持 HPP_Talk 与签到
