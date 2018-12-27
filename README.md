看了egg.js后突然就想搞个全栈的项目玩玩，又喜欢在掘金上逛，所以就开发了这个项目。虽说vue3.0还没定下来，但已经能用了，喜欢它的直接在网页上搞项目，所以就用了3。  
[GIT地址](https://github.com/Izayawww/like-juejin)  
[预览地址](http://lucaswww.coding.me/myjuejin/#/)有些地方用的假数据

### 已完成
● 首页标签分类预览  
● 修改个人信息  
● 图片上传  
● 文章详情  
● 发布沸点

### 预览

![](https://user-gold-cdn.xitu.io/2018/12/19/167c4be724eefa6a?w=1436&h=716&f=png&s=133630)

![](https://user-gold-cdn.xitu.io/2018/12/19/167c4bedac9c69a2?w=1435&h=724&f=png&s=86065)
18/12/19 18 文章详情1.0
![](https://user-gold-cdn.xitu.io/2018/12/19/167c5f984a643f16?w=1440&h=831&f=png&s=158671)

18/12/20 11 文章详情2.0
![](https://user-gold-cdn.xitu.io/2018/12/20/167c9a3dfbd54631?w=1434&h=831&f=png&s=210388)

18/12/21 10
昨天把服务器弄好了
http://134.175.224.127:8081/
访问会很慢后面再慢慢弄，正好把域名也弄好

18/12/21 22 动态页面1.0
![](https://user-gold-cdn.xitu.io/2018/12/21/167d13aa0f0ece1a?w=1920&h=1058&f=png&s=175000)

18/12/24 11 动态页面2.0 增加实时发布功能
![](https://user-gold-cdn.xitu.io/2018/12/24/167de3ce9fe45791?w=1920&h=1080&f=png&s=325413)
### 项目包含
1. [vue3.0](https://cli.vuejs.org/zh/guide/prototyping.html)
2. [egg.js](https://eggjs.org/zh-cn/intro/quickstart.html)
3. 腾讯云图片上传

### 项目搭建
#### vue3.0
3的话可以向之前一样用命令行建项目，也可以用图形化界面来创建，我自己的话是用图形化界面建立的，这也是选择3的原因之一
```
//安装
npm install -g @vue/cli
//查看版本
vue --version
//打开图形化界面
vue ui
```
运行成功以后会跳转到

![](https://user-gold-cdn.xitu.io/2018/12/19/167c4e5e83ef0fce?w=1440&h=900&f=png&s=79853)
选择你要建立项目的磁盘路径，然后点击最下面的按钮，填写项目的基本信息

![](https://user-gold-cdn.xitu.io/2018/12/19/167c4e70c23da0dd?w=1440&h=900&f=png&s=97555)
到下一步的话会让你选择一些项目依赖，如果是第一次建立的话，可以选择Manual然后选择需要的依赖

![](https://user-gold-cdn.xitu.io/2018/12/19/167c4e88dd0cb553?w=1440&h=900&f=png&s=126923)

![](https://user-gold-cdn.xitu.io/2018/12/19/167c4e964837538a?w=1440&h=900&f=png&s=155016)
接下来会让你选择eslint的相关配置，虽然eslint有时候真的是太严格了，不过养成习惯以后就会很舒服了，而且这边提供了保存和提交时自动fix的功能，所以都选上

![](https://user-gold-cdn.xitu.io/2018/12/19/167c4ed71b9309de?w=1440&h=900&f=png&s=104023)
创建完成以后，可以点击右上方的按钮直接下载想要的插件，有时候甚至会直接帮你在项目中弄好引入，省了手动写一些引入的代码

![](https://user-gold-cdn.xitu.io/2018/12/19/167c4f197ca67aa5?w=1440&h=900&f=png&s=105407)
最后就是可以直接在这边运行项目了

![](https://user-gold-cdn.xitu.io/2018/12/19/167c4f356a18c357?w=1440&h=900&f=png&s=166690)
这些只是基本搭建到运行，还有很多功能可以自己去发发掘一下。

#### vue3.0配置跨域
3的话需要自己手动在根目录下建立vue.config.js，内容的话还是和以前差不多的，这里贴上我的简单的跨域配置

![](https://user-gold-cdn.xitu.io/2018/12/19/167c51271b4ba26b?w=1440&h=900&f=png&s=118632)

#### egg.js
egg的话，官网写的还是挺详细的，跟着[快速入门](https://eggjs.org/zh-cn/intro/quickstart.html)走一遍基本就差不多了。这里就贴上基本的连接mysql配置

![](https://user-gold-cdn.xitu.io/2018/12/19/167c4f9a6b5a0861?w=1440&h=900&f=png&s=134780)
![](https://user-gold-cdn.xitu.io/2018/12/19/167c4f9cf38b6c72?w=1440&h=900&f=png&s=97550)
#### 腾讯云上传
因为涉及图片上传的相关东西，所以使用了腾讯云。先去腾讯云首页添加对象存储
![](https://user-gold-cdn.xitu.io/2018/12/19/167c4ff78c2d9dd9?w=1311&h=782&f=png&s=216693)
然后创建存储桶

![](https://user-gold-cdn.xitu.io/2018/12/19/167c5010f928cbd7?w=1492&h=726&f=png&s=86054)
然后在基础设置中配置一下cors的白名单

![](https://user-gold-cdn.xitu.io/2018/12/19/167c501ee9bb63a4?w=1920&h=1080&f=png&s=199090)
注意这边的Expose-Headers，不设置的话到时候上传完以后的回调会没有url。  

然后去这边把Secretid和SecretKey拿一下后面要用
![](https://user-gold-cdn.xitu.io/2018/12/19/167c50890f83e3e4?w=1779&h=922&f=png&s=106339)
项目中使用：  
```
//安装一下
npm install cos-js-sdk-v5 -S

//在需要上传的文件中
import COS from "cos-js-sdk-v5";

this.myCos = new COS({
      SecretId: "你的id",
      SecretKey: "你的key"
    });
    
//在获取到上传文件对象后
this.myCos.putObject(
        {
          Bucket: "你的存储桶空间名称",
          Region: "你的存储桶所在地域",
          Key: e.target.files[0].name,//上传的文件名
          StorageClass: "STANDARD",
          Body: e.target.files[0], // 上传文件对象
          onProgress: function(progressData) {
            self.user.avator = progressData.Location;//Location就是上传完成以后的对象路径
          }
        },
        function(err, data) {
          console.log(err || data);
          console.log(data.Location);
        }
      );
```

整个项目的流程大概就是这样，好了不多说了，我要去写详情页了。3.0+
