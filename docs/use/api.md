# API

# 非鉴权API

## `/hpp/api/getblogeractive` `GET` 

### NEED `零配置`

获取博主活跃时间，默认以js输出，请前往[适配Hexo](/use/hexoinit)获取使用方法

## `/hpp/api/captchaimg` `GET` 

### NEED `零配置`

获取验证码的图像，来自生成对抗网络thispersondoesnotexist以拦截机器人

![](https://blogadmin.cyfan.top/hpp/api/captchaimg)

## `/hpp/api/gethpptalk` `POST` 

### NEED `零配置`

hpptalk说说用户获取接口，返回格式：`JSON`

POST数据:

```json
{
	limit:10, //只获取10条
	start:0//从第0条开始
}
```

返回实例

```json
[{"id":47,"time":"2021-1-31 22:12","name":"ChenYFan","avatar":"https://cdn.jsdelivr.net/gh/ChenYFan/CDN/img/avatar.png","content":"第一篇说说测试\n\n> 测试\n\n# 测试\n## 测试\n### 测试\n#### 测试\n##### 测试\n###### 测试\n\n```\n测试\n```\n\n![](https://cdn.jsdelivr.net/gh/ChenYFan-Tester/DailyGet@gh-pages/bingpic/bing.jpg)"},{"id":48,"time":"2021-1-31 22:13","name":"ChenYFan","avatar":"https://cdn.jsdelivr.net/gh/ChenYFan/CDN/img/avatar.png","content":"![](https://cdn.jsdelivr.net/gh/ChenYFan-tester/test@test/imagetest/1611994635000.png)"}]
```

## `/hpp/api/twikoo` `POST` 

### NEED `hpp_twikoo_envId`

获取Twikoo评论内容，格式：

```json
{
	//before: 1,//指上一个评论的创建时间戳，可选
	path: ""//文章路径
}
```


# 鉴权API


## `/hpp/admin/api/kick` `GET`

### NEED `零配置`

博主手动签到，点击右上角头像-签到，以任意性形式访问都能够刷新活跃时间。

返回：

```
OK
```

## `/hpp/admin/api/adddoc/` `POST` 

### NEED `hpp_githubdoctoken` `hpp_githubdocbranch` `hpp_githubdocusername` `hpp_githubdocrepo` `hpp_githubdocroot`

增加文档，/后面是文件名，以post提交base64后的文件既可。

返回值与Github返回值相同。

## `/hpp/admin/api/addimage/` `POST` 

### NEED `hpp_githubimagetoken` `hpp_githubimagebranch` `hpp_githubimageusername` `hpp_githubimagerepo` `hpp_githubmagepath`

增加图片，/后面是后缀名，以post提交base64后的文件既可
返回值是jsd加速连接。


## `/hpp/admin/api/deldoc/` & `/hpp/admin/api/deldraft/` & `/hpp/admin/api/delimage/` `POST` 

删除文章、草稿、图片

### NEED `GithubALL`

删除图片/文档，/后面是文件名。
返回值：

```
Delete Success
``` 

返回状态与Github返回状态相同

## `/hpp/admin/api/getdoc/` & `/hpp/admin/api/getdraft/` `GET` 

获取文章/草稿内容

### NEED `hpp_githubdoctoken` `hpp_githubdocbranch` `hpp_githubdocusername` `hpp_githubdocrepo`
获取文档，此处不用jsd获取的原因是缓存更新太慢，所以用CloudFlare中间件中继

## `/hpp/admin/api/getlist` & `/hpp/admin/api/get_draftlist` & `/hpp/admin/api/getimglist` `GET`

获取文章/草稿/图片列表

### NEED `GithubALL`

获取文档/图片列表

获取实例：
```json
[{"name":"2020QM.md","path":"source/_posts/2020QM.md","sha":"595d9178e67bddb62394ebf129f54d843d7c5c93","size":2303,"url":"https://api.github.com/repos/ChenYFan/blog/contents/source/_posts/2020QM.md?ref=master","html_url":"https://github.com/ChenYFan/blog/blob/master/source/_posts/2020QM.md","git_url":"https://api.github.com/repos/ChenYFan/blog/git/blobs/595d9178e67bddb62394ebf129f54d843d7c5c93","download_url":"https://raw.githubusercontent.com/ChenYFan/blog/master/source/_posts/2020QM.md","type":"file","_links":{"self":"https://api.github.com/repos/ChenYFan/blog/contents/source/_posts/2020QM.md?ref=master","git":"https://api.github.com/repos/ChenYFan/blog/git/blobs/595d9178e67bddb62394ebf129f54d843d7c5c93","html":"https://github.com/ChenYFan/blog/blob/master/source/_posts/2020QM.md"}},{"name":"AVorBV.md","path":"source/_posts/AVorBV.md","sha":"9ada07bab5f8a05d2645d2a779f92825bf49d6ea","size":15740,"url":"https://api.github.com/repos/ChenYFan/blog/contents/source/_posts/AVorBV.md?ref=master","html_url":"https://github.com/ChenYFan/blog/blob/master/source/_posts/AVorBV.md","git_url":"https://api.github.com/repos/ChenYFan/blog/git/blobs/9ada07bab5f8a05d2645d2a779f92825bf49d6ea","download_url":"https://raw.githubusercontent.com/ChenYFan/blog/master/source/_posts/AVorBV.md","type":"file","_links":.....}}]
```

```json
[{"name":"1611731226000.png","path":"imagetest/1611731226000.png","sha":"fefaaa5c6295779cd4919e98a045c54d466c87ea","size":24632,"url":"https://api.github.com/repos/ChenYFan-Tester/test/contents/imagetest/1611731226000.png?ref=test","html_url":"https://github.com/ChenYFan-Tester/test/blob/test/imagetest/1611731226000.png","git_url":"https://api.github.com/repos/ChenYFan-Tester/test/git/blobs/fefaaa5c6295779cd4919e98a045c54d466c87ea","download_url":"https://raw.githubusercontent.com/ChenYFan-Tester/test/test/imagetest/1611731226000.png","type":"file","_links":{"self":"https://api.github.com/repos/ChenYFan-Tester/test/contents/imagetest/1611731226000.png?ref=test","git":"https://api.github.com/repos/ChenYFan-Tester/test/git/blobs/fefaaa5c6295779cd4919e98a045c54d466c87ea","html":"https://github.com/ChenYFan-Tester/test/blob/test/imagetest/1611731226000.png"}},{"name":"1611873019000.jpg","path":"imagetest/1611873019000.jpg","sha":"f7fc5e5088e15c80a1abe3425583f5631484e2a0","size":72361,"url":"https://api.github.com/repos/ChenYFan-Tester/test/contents/imagetest/1611873019000.jpg?ref=test","html_url":"https://github.com/ChenYFan-Tester/test/blob/test/imagetest/1611873019000.jpg","git_url":"https://api.github.com/repos/ChenYFan-Tester/test/git/blobs/f7fc5e5088e15c80a1abe3425583f5631484e2a0","download_url":"https://raw.githubusercontent.com/ChenYFan-Tester/test/test/imagetest/1611873019000.jpg","type":"file","_links":{"self":"https://api.github.com/repos/ChenYFan-Tester/test/contents/imagetest/1611873019000.jpg?ref=test","git":"https://api.github.com/repos/ChenYFan-Tester/test/git/blobs/f7fc5e5088e15c80a1abe3425583f5631484e2a0","html":"https://github.com/ChenYFan-Tester/test/blob/test/imagetest/1611873019000.jpg"}},{"name":"1611994635000.png","path":"imagetest/1611994635000.png","sha":"9ea1c55df72c93feacfaa8e27a49c04fa7ed9d0f","size":29369,"url":"https://api.github.com/repos/ChenYFan-Tester/test/contents/imagetest/1611994635000.png?ref=test","html_url":"https://github.com/ChenYFan-Tester/test/blob/test/imagetest/1611994635000.png","git_url":"https://api.github.com/repos/ChenYFan-Tester/test/git/blobs/9ea1c55df72c93feacfaa8e27a49c04fa7ed9d0f","download_url":"https://raw.githubusercontent.com/ChenYFan-Tester/test/test/imagetest/1611994635000.png","type":"file","_links":{"self":"https://api.github.com/repos/ChenYFan-Tester/test/contents/imagetest/1611994635000.png?ref=test","git":"https://api.github.com/repos/ChenYFan-Tester/test/git/blobs/9ea1c55df72c93feacfaa8e27a49c04fa7ed9d0f","html":"https://github.com/ChenYFan-Tester/test/blob/test/imagetest/1611994635000.png"}}]
```

## `/hpp/admin/api/addtalk` `POST` `零配置`

提交格式
```json
{
"time":"2021-2-1 10:8",
"content":"Hi~ o(*￣▽￣*)ブ",
"avatar":"https://cdn.jsdelivr.net/gh/ChenYFan/CDN/img/avatar.png",
"name":"ChenYFan"
}
```

返回：

```
OK
```


## `/hpp/admin/api/deltalk` `POST`

### NEED `零配置`

删除单个说说。

POST数据为说说的id。

返回：

```
OK
```

## `/hpp/admin/api/checkupdate` `GET` 

### NEED `hpp_account_identifier` `hpp_script_name` `hpp_CF_Auth_Key` `hpp_Auth_Email`

获取自动更新的脚本。

## `/hpp/admin/api/update` `GET`

### NEED `hpp_account_identifier` `hpp_script_name` `hpp_CF_Auth_Key` `hpp_Auth_Email`

自动更新。

成功返回值：

```
true
```

失败返回值：

```
false
```

## `/hpp/admin/api/small_white_mouse_update` `GET`

### NEED `hpp_account_identifier` `hpp_script_name` `hpp_CF_Auth_Key` `hpp_Auth_Email`

获取[`DEV`](https://github.com/HexoPlusPlus/HexoPlusPlus/tree/dev)分支的更新，普通用户**强烈不建议**使用

## `/hpp/admin/api/inputtalk` `POST` 

### NEED `零配置`

导入artitalk接口

## `/hpp/admin/api/del_all` `GET`

### NEED `零配置`

销毁所有配置，说说等个人数据不会被销毁。

## `/hpp/admin/api/get_config` `GET`

### NEED `零配置`

返回所有配置

## `/hpp/admin/api/edit_config` `POST`

### NEED `零配置`

格式：

```json
{
	index: index, //键值名称
	value: value  //键值
}
```

将会覆盖当前配置

## `/hpp/admin/api/del_config` `POST` 

### NEED `零配置`

删除键值为post数据的配置值


