<template>
  <div class="post-main">
    <div class="active">
      <div class="active-cont-main">
        <div style="position: relative;">
          <div class="active-cont-div" v-text="content" @input="hanldeCont($event)" contenteditable="true" placeholder="告诉你个小秘密，发沸点时添加话题会被更多小伙伴看见呦~" :class="{empty:isNotEmpty}"></div>
          <span class="active-cont-len">{{contentLen}}</span>
        </div>
        <div class="active-cont-action">
          <div>
          </div>
          <button class="attent-button" :class="{'not-allow':!isNotEmpty}" @click="submitActive">{{pushStatus}}</button>
        </div>
      </div>
  
      <div v-for="item in actives" class="active-list" :key="item.node.id">
        <div class="user-top">
          <img class="actorImg" :src="item.node.actors[0].avatarLarge" alt>
          <div class="user-info">
            <div class="user-name">{{item.node.actors[0].username}}</div>
            <div class="user-blone">
              <span>{{item.node.actors[0].jobTitle}}</span>
              <span v-if="item.node.actors[0].company">@ {{item.node.actors[0].company}}</span>
            </div>
          </div>
          <div class="flow-div">
            <button class="attent-button">关注</button>
          </div>
        </div>
        <div class="active-content">
          <span>{{item.node.targets[0].content}}</span>
          <div class="imgs-main">
            <div class="imgs-div" v-for="imgs in item.node.targets[0].pictures" :style="`background-image:url(${imgs});`" :key="imgs.index"></div>
          </div>
        </div>
        <div class="active-tags">
          <span v-if="item.node.targets[0].topic">{{item.node.targets[0].topic.title}}</span>
        </div>
        <div class="active-actions">
          <div>
            <div>
              <i class="iconfont icon-like"></i>赞
            </div>
          </div>
          <div>
            <div>
              <i class="iconfont icon-pinglun"></i>评论
            </div>
          </div>
          <div>
            <div class="noborder">
              <i class="iconfont icon-share"></i>分享
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="post-nav">
      <div class="nav-list">
        <div class="nav-item user-nav-item">
          <div class="imgs-div" :style="`background-image:url(${user.avator})`"></div>
          <div class="nav-info nav-user-info">
            <div>{{user.name}}</div>
            <div class="user-post">{{user.post}}</div>
          </div>
        </div>
        <div class="active-actions">
          <div>
            <div>沸点
              <div>{{user.active_nums}}</div>
            </div>
          </div>
          <div>
            <div>关注
              <div>{{user.attentions}}</div>
            </div>
          </div>
          <div>
            <div class="noborder">关注者
              <div>{{user.followers}}</div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="nav-list">
        <span class="nav-title">你可能感兴趣的人</span>
        <div class="nav-item" v-for="item in userRecommend" :key="item.id">
          <div class="imgs-div" :style="`background-image:url(${item.user.avatarLarge})`"></div>
          <div class="nav-info">
            <div>{{item.user.username}}</div>
            <div class="user-post">{{item.description}}</div>
            <div class="user-post">{{item.achievement}}</div>
          </div>
          <div>
            <button class="attent-button" :date-v-id="item.user.id">关注</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "active",
    data() {
      return {
        actives: [],
        user: {},
        userRecommend: [],
        content: "",
        isNotEmpty: false,
        contentLen: 1000,
        pushStatus:'发布'
      };
    },
    methods: {
      hanldeCont(e) {
        this.isNotEmpty = e.target.innerHTML != "";
        this.contentLen = 1000 - e.target.innerHTML.length;
        this.content = e.target.innerHTML;
        let sel = window.getSelection();
        sel.collapseToEnd;
      },
      submitActive(){
        this.isNotEmpty = true;
        this.pushStatus = '发布中...'
        this.axios.post("/local/add-active",{
          data: {
            user_id: 2,
            content:this.content
          }
        }).then(res => {
          if(res.data.result.success==true){
            this.isNotEmpty = false;
            this.pushStatus = '发布'
            this.content = ''
            this.user.active_nums = this.user.active_nums+1
            this.$notify({
              message: '发布成功',
              type:'push'
            })
          }
        });
      }
    },
    mounted() {
      // this.axios("https://web-api.juejin.im/graphql", {
      //   method: "POST",
      //   headers: {
      //     "X-Agent": "Juejin/Web"
      //   },
      //   data: {
      //     extensions: {
      //       query: {
      //         id: "964dab26a3f9997283d173b865509890"
      //       }
      //     }
      //   }
      // }).then(res=>{
      //     this.actives = res.data.data.recommendedActivityFeed.items.edges
      // });
  
      // this.axios("https://web-api.juejin.im/graphql", {
      //   method: "POST",
      //   headers: {
      //     "X-Agent": "Juejin/Web"
      //   },
      //   data: {
      //     extensions: {
      //       query: {
      //         id: "2dc8fd603ff34277d121086abc655ff5"
      //       }
      //     }
      //   }
      // }).then(res => {
      //   this.userRecommend = res.data.data.userRecommendationCard.items.slice(0,5);
      // });
  
      this.user = this.$store.getters.userInfo;
      this.actives = [
        {
          node: {
            id: "5c1cdd7dd66d638f4ce221e2",
            action: "PUBLISH_PIN",
            actors: [{
              id: "5b3ee2cfe51d451993586a11",
              avatarLarge: "https://user-gold-cdn.xitu.io/2018/7/6/1646da75cd08b439?w=700&h=384&f=jpeg&s=25374",
              username: "Fridayo",
              company: "某云计算小公司",
              jobTitle: "python"
            }],
            targets: [{
              id: "5c1cdd7d092dcb63cb42781d",
              content: "新版本的微信更新日志",
              createdAt: "2018-12-21T12:33:01.267Z",
              commentCount: 1,
              likeCount: 0,
              isTopicRecommend: false,
              uid: "5b3ee2cfe51d451993586a11",
              url: "",
              urlPic: "",
              urlTitle: "",
              updatedAt: "2018-12-21T12:33:01.267Z",
              viewerHasLiked: false,
              pictures: [
                "https://user-gold-cdn.xitu.io/2018/12/21/167d0c0c1f57e17c?w=690&h=1227&f=jpeg&s=109930"
              ],
              topic: null,
              user: {
                id: "5b3ee2cfe51d451993586a11",
                avatarLarge: "https://user-gold-cdn.xitu.io/2018/7/6/1646da75cd08b439?w=700&h=384&f=jpeg&s=25374",
                username: "Fridayo",
                company: "某云计算小公司",
                jobTitle: "python",
                viewerIsFollowing: false
              }
            }]
          }
        },
        {
          node: {
            id: "5c1cdc1fd66d638f4ce209bb",
            action: "PUBLISH_PIN",
            actors: [{
              id: "59f99ce3f265da43247fc40c",
              avatarLarge: "https://user-gold-cdn.xitu.io/2018/12/21/167cf06152aefac3?w=694&h=693&f=jpeg&s=344764",
              username: "newArray",
              company: "易宝支付有限公司",
              jobTitle: "前端开发er"
            }],
            targets: [{
              id: "5c1cdc1ff265da3254088947",
              content: "今天领导给我丢了一堆前端简历，看了一下实在没有让我一眼心动的。简历不应该是内容硬堆上去的。希望自己以后的简历可以让人眼前一亮。为之奋斗吧！",
              createdAt: "2018-12-21T12:27:11.594Z",
              commentCount: 1,
              likeCount: 0,
              isTopicRecommend: false,
              uid: "59f99ce3f265da43247fc40c",
              url: "",
              urlPic: "",
              urlTitle: "",
              updatedAt: "2018-12-21T12:32:24.134Z",
              viewerHasLiked: false,
              pictures: [],
              topic: {
                id: "5b6eb8b3092dcb61bd728956",
                title: "人在职场"
              },
              user: {
                id: "59f99ce3f265da43247fc40c",
                avatarLarge: "https://user-gold-cdn.xitu.io/2018/12/21/167cf06152aefac3?w=694&h=693&f=jpeg&s=344764",
                username: "newArray",
                company: "易宝支付有限公司",
                jobTitle: "前端开发er",
                viewerIsFollowing: false
              }
            }]
          }
        },
        {
          node: {
            id: "5c1cd80fd66d638f4ce1b751",
            action: "PUBLISH_PIN",
            actors: [{
              id: "58a126d31b69e60059d2a392",
              avatarLarge: "https://user-gold-cdn.xitu.io/2018/12/6/1678198b829e9cd1?w=245&h=231&f=jpeg&s=15412",
              username: "creanme",
              company: "",
              jobTitle: "打杂工程师"
            }],
            targets: [{
              id: "5c1cd80fe51d4519b6466006",
              content: "总算发现vscode上面的代码粘贴到onenote简单的办法了，那就是使用ctrl shift p然后使用Convert Indention to Taps把空格转换为tab符号（右下角点击切换没用），然后就可以复制粘贴到onenote里面了😂",
              createdAt: "2018-12-21T12:09:51.567Z",
              commentCount: 0,
              likeCount: 0,
              isTopicRecommend: false,
              uid: "58a126d31b69e60059d2a392",
              url: "",
              urlPic: "",
              urlTitle: "",
              updatedAt: "2018-12-21T12:21:58.632Z",
              viewerHasLiked: false,
              pictures: [],
              topic: null,
              user: {
                id: "58a126d31b69e60059d2a392",
                avatarLarge: "https://user-gold-cdn.xitu.io/2018/12/6/1678198b829e9cd1?w=245&h=231&f=jpeg&s=15412",
                username: "creanme",
                company: "",
                jobTitle: "打杂工程师",
                viewerIsFollowing: false
              }
            }]
          }
        },
        {
          node: {
            id: "5c1cd526d66d638f4ce17f0b",
            action: "PUBLISH_PIN",
            actors: [{
              id: "587476401b69e6005cb58ea2",
              avatarLarge: "https://user-gold-cdn.xitu.io/2018/6/9/163e4713c84fb36c?w=748&h=446&f=png&s=355312",
              username: "戴小超",
              company: "",
              jobTitle: "web前端"
            }],
            targets: [{
              id: "5c1cd526f265da325408891e",
              content: "现在的人套路都太多了，我跟你推心置腹，你觉得我对你居心不良，我对你君子之交淡如水，你觉得我装逼高冷没人情味，WQNMD",
              createdAt: "2018-12-21T11:57:26.977Z",
              commentCount: 0,
              likeCount: 0,
              isTopicRecommend: false,
              uid: "587476401b69e6005cb58ea2",
              url: "",
              urlPic: "",
              urlTitle: "",
              updatedAt: "2018-12-21T12:19:52.885Z",
              viewerHasLiked: false,
              pictures: [],
              topic: null,
              user: {
                id: "587476401b69e6005cb58ea2",
                avatarLarge: "https://user-gold-cdn.xitu.io/2018/6/9/163e4713c84fb36c?w=748&h=446&f=png&s=355312",
                username: "戴小超",
                company: "",
                jobTitle: "web前端",
                viewerIsFollowing: false
              }
            }]
          }
        },
        {
          node: {
            id: "5c1cd49ed66d638f4ce175dd",
            action: "PUBLISH_PIN",
            actors: [{
              id: "5a311af051882554bd510dd0",
              avatarLarge: "https://user-gold-cdn.xitu.io/2018/3/9/162084193cb4922d?w=1920&h=1080&f=jpeg&s=176715",
              username: "史前图腾",
              company: "不想说...",
              jobTitle: "苹果API搬运工"
            }],
            targets: [{
              id: "5c1cd49e6fb9a05c17bb5b6a",
              content: "我初步实现了 AR 中的虚拟物体和现实平面互相遮挡的效果，虽然很粗糙，很弱智。\n下图中绿色是 1 米外的虚拟小球，蓝色的是识别出的竖直平面（电脑屏幕），由于是原始 demo，再加上iPhone SE 效果不好，识别出的平面边缘和真实平面边缘没有对齐",
              createdAt: "2018-12-21T11:55:10.857Z",
              commentCount: 0,
              likeCount: 2,
              isTopicRecommend: false,
              uid: "5a311af051882554bd510dd0",
              url: "",
              urlPic: "",
              urlTitle: "",
              updatedAt: "2018-12-21T12:19:50.814Z",
              viewerHasLiked: false,
              pictures: [
                "https://user-gold-cdn.xitu.io/2018/12/21/167d09e86818bb94?w=191&h=227&f=gif&s=847490"
              ],
              topic: null,
              user: {
                id: "5a311af051882554bd510dd0",
                avatarLarge: "https://user-gold-cdn.xitu.io/2018/3/9/162084193cb4922d?w=1920&h=1080&f=jpeg&s=176715",
                username: "史前图腾",
                company: "不想说...",
                jobTitle: "苹果API搬运工",
                viewerIsFollowing: false
              }
            }]
          }
        },
        {
          node: {
            id: "5c1cd25fd66d638f4ce13ad7",
            action: "PUBLISH_PIN",
            actors: [{
              id: "57924f6a75c4cd0e7188ca58",
              avatarLarge: "https://user-gold-cdn.xitu.io/2016/11/30/70ebba657e166fedea26c628bfcac2b0",
              username: "仁元",
              company: "Tencent",
              jobTitle: "web前端高级工程师"
            }],
            targets: [{
              id: "5c1cd25f5188255289751169",
              content: "不容易啦，地铁站内上线代码",
              createdAt: "2018-12-21T11:45:35.401Z",
              commentCount: 4,
              likeCount: 5,
              isTopicRecommend: false,
              uid: "57924f6a75c4cd0e7188ca58",
              url: "",
              urlPic: "",
              urlTitle: "",
              updatedAt: "2018-12-21T11:53:24.485Z",
              viewerHasLiked: false,
              pictures: [
                "https://user-gold-cdn.xitu.io/2018/12/21/167d095b8906cf16?w=3024&h=4032&f=jpeg&s=1837436&w=3024&h=4032"
              ],
              topic: null,
              user: {
                id: "57924f6a75c4cd0e7188ca58",
                avatarLarge: "https://user-gold-cdn.xitu.io/2016/11/30/70ebba657e166fedea26c628bfcac2b0",
                username: "仁元",
                company: "Tencent",
                jobTitle: "web前端高级工程师",
                viewerIsFollowing: false
              }
            }]
          }
        },
        {
          node: {
            id: "5c1ccc9da62e8eee551ae907",
            action: "PUBLISH_PIN",
            actors: [{
              id: "595a5f025188250d97460dc2",
              avatarLarge: "http://tva2.sinaimg.cn/crop.0.0.180.180.180/663aa05ajw1e8qgp5bmzyj2050050aa8.jpg",
              username: "网路冷眼",
              company: "",
              jobTitle: ""
            }],
            targets: [{
              id: "5c1ccc9d092dcb63cb427818",
              content: "【Try running deep learning inference on Raspberry Pi】 http://t.cn/E4JzEVY  尝试在Raspberry Pi上运行深度学习推理。",
              createdAt: "2018-12-21T11:21:01.251Z",
              commentCount: 0,
              likeCount: 1,
              isTopicRecommend: false,
              uid: "595a5f025188250d97460dc2",
              url: "",
              urlPic: "",
              urlTitle: "",
              updatedAt: "2018-12-21T11:31:01.422Z",
              viewerHasLiked: false,
              pictures: [
                "https://user-gold-cdn.xitu.io/2018/12/21/167d07f42ed392f8?w=1016&h=1016&f=jpeg&s=78120"
              ],
              topic: null,
              user: {
                id: "595a5f025188250d97460dc2",
                avatarLarge: "http://tva2.sinaimg.cn/crop.0.0.180.180.180/663aa05ajw1e8qgp5bmzyj2050050aa8.jpg",
                username: "网路冷眼",
                company: "",
                jobTitle: "",
                viewerIsFollowing: false
              }
            }]
          }
        },
        {
          node: {
            id: "5c1cce5fd66d638f4ce0dae4",
            action: "PUBLISH_PIN",
            actors: [{
              id: "5b52d1bb5188251abb46b4bd",
              avatarLarge: "",
              username: "wy2010344",
              company: "",
              jobTitle: ""
            }],
            targets: [{
              id: "5c1cce5f6fb9a05c17bb5b5e",
              content: "自己创造的代码总是旮旯角落都知道，因为源于自己的意志，哪些是丑陋勉强的实现，表述总是苍白的，细说远多于代码本身。所以理解别人的代码像吃屎，细节比需求文档本身还复杂，唯一好处是有确定的解释方式。所以有框架，分工变成填代码（表单），有大纲到细节的区分。\n\n费尽心思去理解别人的代码是否有值得的收益？不如自己撸。辛辛苦苦写一套出来却不能盈利？总在开新坑。软件开发的不确定牺牲落在了弱势群体上。\n\n有人维护的系统才是有生命的，最好是创始人，对软件系统的天真理解造成的的折腾消耗更多，还一个劲想占便宜。但人与人的信任除非开发者是利益的主角（之一？）。成本要低就用脚本先开发一套，有利可图再去优化。一切糊涂的现状却可能是利益的纠缠，利益面前难道别人就是白活的吗？出头鸟总是很惨的，当然可能得了毫无卵用的名声。",
              createdAt: "2018-12-21T11:28:31.980Z",
              commentCount: 2,
              likeCount: 1,
              isTopicRecommend: false,
              uid: "5b52d1bb5188251abb46b4bd",
              url: "",
              urlPic: "",
              urlTitle: "",
              updatedAt: "2018-12-21T11:30:51.977Z",
              viewerHasLiked: false,
              pictures: [],
              topic: null,
              user: {
                id: "5b52d1bb5188251abb46b4bd",
                avatarLarge: "",
                username: "wy2010344",
                company: "",
                jobTitle: "",
                viewerIsFollowing: false
              }
            }]
          }
        },
        {
          node: {
            id: "5c1cced1d66d638f4ce0e386",
            action: "PUBLISH_PIN",
            actors: [{
              id: "5b39bd7de51d4558d43ff06d",
              avatarLarge: "https://user-gold-cdn.xitu.io/2018/7/2/16459c1e94f61f29?w=500&h=500&f=jpeg&s=26496",
              username: "清蒸不是水煮",
              company: "掘金",
              jobTitle: "沸点运营"
            }],
            targets: [{
              id: "5c1cced0f265da32540888f1",
              content: "又上了个新话题😌\n#好文推荐# https://juejin.im/topic/5c1cca46092dcb63cb427817\n这是话题描述：在这里分享你发现的优质掘金文章 & 其他平台文章，可以自荐，所有沸点在发布后 24 小时没能获得 3 个点赞将会从话题下移除，但原内容保留(≧▽≦)\n没错，这个是一个不定时会被我移除的沸点的话题，为了保证保证质量😉",
              createdAt: "2018-12-21T11:30:24.828Z",
              commentCount: 1,
              likeCount: 1,
              isTopicRecommend: false,
              uid: "5b39bd7de51d4558d43ff06d",
              url: "",
              urlPic: "",
              urlTitle: "",
              updatedAt: "2018-12-21T11:30:50.357Z",
              viewerHasLiked: false,
              pictures: [
                "https://user-gold-cdn.xitu.io/2018/12/21/167d087d908ca0b3?w=580&h=634&f=png&s=161262",
                "https://user-gold-cdn.xitu.io/2018/12/21/167d087dcd563926?w=1272&h=944&f=png&s=231366"
              ],
              topic: {
                id: "5bf52da5092dcb0a7dcc7092",
                title: "掘金官方"
              },
              user: {
                id: "5b39bd7de51d4558d43ff06d",
                avatarLarge: "https://user-gold-cdn.xitu.io/2018/7/2/16459c1e94f61f29?w=500&h=500&f=jpeg&s=26496",
                username: "清蒸不是水煮",
                company: "掘金",
                jobTitle: "沸点运营",
                viewerIsFollowing: false
              }
            }]
          }
        },
        {
          node: {
            id: "5c1ccd74d66d638f4ce0a9b7",
            action: "PUBLISH_PIN",
            actors: [{
              id: "554ceae2e4b0d9bd70f50524",
              avatarLarge: "https://user-gold-cdn.xitu.io/2017/5/4/3cae4b307e84f06cb3acb4b8ac67792f",
              username: "杨昕霖",
              company: "掘金",
              jobTitle: "产品负责人"
            }],
            targets: [{
              id: "5c1ccd74e51d4519b6465f68",
              content: "我就想问大家都是红帽子，我这里看怎么就是绿帽子，是因为我在此条信息下方评论了“来一顶绿帽子”，就能红帽变绿帽。体验一下？",
              createdAt: "2018-12-21T11:24:36.536Z",
              commentCount: 8,
              likeCount: 3,
              isTopicRecommend: false,
              uid: "554ceae2e4b0d9bd70f50524",
              url: "",
              urlPic: "",
              urlTitle: "",
              updatedAt: "2018-12-21T11:25:34.923Z",
              viewerHasLiked: false,
              pictures: [
                "https://user-gold-cdn.xitu.io/2018/12/21/167d0828c12fb310?w=1318&h=1134&f=png&s=181835"
              ],
              topic: {
                id: "5c106be9092dcb2cc5de7257",
                title: "上班摸鱼"
              },
              user: {
                id: "554ceae2e4b0d9bd70f50524",
                avatarLarge: "https://user-gold-cdn.xitu.io/2017/5/4/3cae4b307e84f06cb3acb4b8ac67792f",
                username: "杨昕霖",
                company: "掘金",
                jobTitle: "产品负责人",
                viewerIsFollowing: false
              }
            }]
          }
        },
        {
          node: {
            id: "5c1cc794d66d638f4ce0193f",
            action: "PUBLISH_PIN",
            actors: [{
              id: "5b441a6d51882519ba00413c",
              avatarLarge: "https://user-gold-cdn.xitu.io/2018/12/14/167aa7053c198272?w=800&h=600&f=png&s=199144",
              username: "科技新闻搬运工",
              company: "News",
              jobTitle: "互联网新鲜事播报员"
            }],
            targets: [{
              id: "5c1cc794092dcb63cb427816",
              content: "美国华尔街日报报道，两家大型跨国银行已决定停止为中国的华为公司提供新的金融服务。\n\n汇丰银行（HSBC）和渣打银行（Standard Chartered）说，为华为提供资金或服务的风险太高。华尔街日报说，这两家银行曾为华为公司进入全球金融市场发挥过关键作用。\n\n华为是中国最大的电信设备公司，正因为涉嫌违反美国对伊朗的制裁而受到美国司法部调查。\n\n华为公司的首席财务官、华为创办人的女儿孟晚舟12月1日被加拿大应美国的要求逮捕，现已获保释。美国指控孟晚舟涉嫌欺诈，以虚假陈述诱使金融机构进行违反美国对伊朗制裁的交易。据报道，接受孟晚舟虚假陈述的银行就是总部设在伦敦的汇丰银行。\n\n华为公司目前在大约170个国家有业务，日常银行服务由花旗银行提供。\n\n华尔街日报说，花旗银行表示，将对新的业务进行审议，同时将关注美国方面的动向。\n\n汇丰银行去年就做出了不再向华为提供新的金融服务的决定。渣打银行的决定最近刚做出。",
              createdAt: "2018-12-21T10:59:32.751Z",
              commentCount: 2,
              likeCount: 0,
              isTopicRecommend: false,
              uid: "5b441a6d51882519ba00413c",
              url: "",
              urlPic: "",
              urlTitle: "",
              updatedAt: "2018-12-21T10:59:32.751Z",
              viewerHasLiked: false,
              pictures: [
                "https://user-gold-cdn.xitu.io/2018/12/21/167d06b8de720933?w=600&h=314&f=jpeg&s=18394"
              ],
              topic: null,
              user: {
                id: "5b441a6d51882519ba00413c",
                avatarLarge: "https://user-gold-cdn.xitu.io/2018/12/14/167aa7053c198272?w=800&h=600&f=png&s=199144",
                username: "科技新闻搬运工",
                company: "News",
                jobTitle: "互联网新鲜事播报员",
                viewerIsFollowing: false
              }
            }]
          }
        },
        {
          node: {
            id: "5c1cc2f8d66d638f4cdec04f",
            action: "PUBLISH_PIN",
            actors: [{
              id: "5ae341ce51882567277427d1",
              avatarLarge: "https://user-gold-cdn.xitu.io/2018/12/21/167d053852443a4d?w=768&h=768&f=jpeg&s=72691",
              username: "幸福村的张二哥",
              company: "Alipay",
              jobTitle: "打谷子能手"
            }],
            targets: [{
              id: "5c1cc2f8e51d4519b6465ee6",
              content: "没有996的程序员，可能是个假程序员😜",
              createdAt: "2018-12-21T10:39:52.894Z",
              commentCount: 1,
              likeCount: 2,
              isTopicRecommend: false,
              uid: "5ae341ce51882567277427d1",
              url: "",
              urlPic: "",
              urlTitle: "",
              updatedAt: "2018-12-21T10:53:42.710Z",
              viewerHasLiked: false,
              pictures: [
                "https://user-gold-cdn.xitu.io/2018/12/21/167d059984cb3ba0?w=690&h=518&f=jpeg&s=43061"
              ],
              topic: null,
              user: {
                id: "5ae341ce51882567277427d1",
                avatarLarge: "https://user-gold-cdn.xitu.io/2018/12/21/167d053852443a4d?w=768&h=768&f=jpeg&s=72691",
                username: "幸福村的张二哥",
                company: "Alipay",
                jobTitle: "打谷子能手",
                viewerIsFollowing: false
              }
            }]
          }
        },
        {
          node: {
            id: "5c1cc400a62e8eee55193bf6",
            action: "PUBLISH_PIN",
            actors: [{
              id: "589881b7128fe1006cbbacec",
              avatarLarge: "https://user-gold-cdn.xitu.io/2018/3/28/1626b212b094caee?w=578&h=578&f=png&s=25817",
              username: "LeviDing",
              company: "掘金",
              jobTitle: "翻译计划膜法师"
            }],
            targets: [{
              id: "5c1cc400e51d4519b6465eea",
              content: "推荐一个系列译文 👉 [译] 如何在六个月或更短的时间内成为 DevOps 工程师 💥 💥💥 详情如下 👇\n\n🌟 第一部分 ：基础知识 https://juejin.im/post/5bb9945c5188255c5121d878\n🌟 第二部分：配置讲解 https://juejin.im/post/5baf677df265da0a951ee8f5\n🌟 第三部分：版本控制 https://juejin.im/post/5bb067bfe51d450e905a0aa4\n🌟 第四部分：讲解打包 https://juejin.im/post/5c19d6255188252ea66b33b3",
              createdAt: "2018-12-21T10:44:16.636Z",
              commentCount: 4,
              likeCount: 5,
              isTopicRecommend: false,
              uid: "589881b7128fe1006cbbacec",
              url: "",
              urlPic: "",
              urlTitle: "",
              updatedAt: "2018-12-21T10:53:39.616Z",
              viewerHasLiked: false,
              pictures: [
                "https://user-gold-cdn.xitu.io/2018/12/21/167d05d9f204bcd3?w=440&h=440&f=jpeg&s=57370"
              ],
              topic: {
                id: "5c1cca46092dcb63cb427817",
                title: "好文推荐"
              },
              user: {
                id: "589881b7128fe1006cbbacec",
                avatarLarge: "https://user-gold-cdn.xitu.io/2018/3/28/1626b212b094caee?w=578&h=578&f=png&s=25817",
                username: "LeviDing",
                company: "掘金",
                jobTitle: "翻译计划膜法师",
                viewerIsFollowing: false
              }
            }]
          }
        },
        {
          node: {
            id: "5c1cc5f7d66d638f4cdf52ff",
            action: "PUBLISH_PIN",
            actors: [{
              id: "57f8ffda2e958a005581e3c0",
              avatarLarge: "https://leancloud-gold-cdn.xitu.io/1192fb7398c32aad4150.png?imageView/2/w/100/h/100/q/80/format/png",
              username: "J_Knight_",
              company: "爱奇艺",
              jobTitle: "iOS"
            }],
            targets: [{
              id: "5c1cc5f86fb9a05c17bb5b32",
              content: "这圣诞帽戴出了土匪的赶脚有木有 😔",
              createdAt: "2018-12-21T10:52:40.012Z",
              commentCount: 6,
              likeCount: 11,
              isTopicRecommend: false,
              uid: "57f8ffda2e958a005581e3c0",
              url: "",
              urlPic: "",
              urlTitle: "",
              updatedAt: "2018-12-21T10:53:37.623Z",
              viewerHasLiked: false,
              pictures: [
                "https://user-gold-cdn.xitu.io/2018/12/21/167d0654d103931c?w=147&h=147&f=png&s=13243"
              ],
              topic: null,
              user: {
                id: "57f8ffda2e958a005581e3c0",
                avatarLarge: "https://leancloud-gold-cdn.xitu.io/1192fb7398c32aad4150.png?imageView/2/w/100/h/100/q/80/format/png",
                username: "J_Knight_",
                company: "爱奇艺",
                jobTitle: "iOS",
                viewerIsFollowing: false
              }
            }]
          }
        },
        {
          node: {
            id: "5c1cbfa1d66d638f4cde6258",
            action: "PUBLISH_PIN",
            actors: [{
              id: "576b433bd342d30057aaa1e9",
              avatarLarge: "https://user-gold-cdn.xitu.io/2018/9/23/16603bda17548e9a?w=1019&h=1019&f=jpeg&s=100100",
              username: "陈大鱼头",
              company: "打杂的",
              jobTitle: "web前端工程师"
            }],
            targets: [{
              id: "5c1cbfa1518825528975112d",
              content: "圣诞快乐",
              createdAt: "2018-12-21T10:25:37.901Z",
              commentCount: 3,
              likeCount: 4,
              isTopicRecommend: false,
              uid: "576b433bd342d30057aaa1e9",
              url: "",
              urlPic: "",
              urlTitle: "",
              updatedAt: "2018-12-21T10:35:01.756Z",
              viewerHasLiked: false,
              pictures: [
                "https://user-gold-cdn.xitu.io/2018/12/21/167d04c8e588c900?w=332&h=325&f=png&s=10027"
              ],
              topic: {
                id: "5af9bd18092dcb355ce35709",
                title: "一图胜千言"
              },
              user: {
                id: "576b433bd342d30057aaa1e9",
                avatarLarge: "https://user-gold-cdn.xitu.io/2018/9/23/16603bda17548e9a?w=1019&h=1019&f=jpeg&s=100100",
                username: "陈大鱼头",
                company: "打杂的",
                jobTitle: "web前端工程师",
                viewerIsFollowing: false
              }
            }]
          }
        },
        {
          node: {
            id: "5c1cc063d66d638f4cde764a",
            action: "PUBLISH_PIN",
            actors: [{
              id: "57beefb6efa631005a9edd7c",
              avatarLarge: "https://user-gold-cdn.xitu.io/2017/7/13/bfe29d9a6c356c6f60c2d380c99dc76b",
              username: "gongph",
              company: "搜狐畅游",
              jobTitle: "搬运工"
            }],
            targets: [{
              id: "5c1cc0636fb9a05c17bb5aef",
              content: "#有些话只能在这里说# 一周前，我：把这块代码用递归重构下吧！ 回答：都能实现干嘛要重构？！ 万万没想到，今天我还是 pull 到了同事尚未重构的代码。无语。。。",
              createdAt: "2018-12-21T10:28:51.208Z",
              commentCount: 8,
              likeCount: 3,
              isTopicRecommend: false,
              uid: "57beefb6efa631005a9edd7c",
              url: "",
              urlPic: "",
              urlTitle: "",
              updatedAt: "2018-12-21T10:34:52.921Z",
              viewerHasLiked: false,
              pictures: [
                "https://user-gold-cdn.xitu.io/2018/12/21/167d04f818bcdff5?w=862&h=577&f=png&s=60803"
              ],
              topic: {
                id: "5af9bd18092dcb355ce35709",
                title: "一图胜千言"
              },
              user: {
                id: "57beefb6efa631005a9edd7c",
                avatarLarge: "https://user-gold-cdn.xitu.io/2017/7/13/bfe29d9a6c356c6f60c2d380c99dc76b",
                username: "gongph",
                company: "搜狐畅游",
                jobTitle: "搬运工",
                viewerIsFollowing: false
              }
            }]
          }
        },
        {
          node: {
            id: "5c1cba1dd66d638f4cdde632",
            action: "PUBLISH_PIN",
            actors: [{
              id: "5b3ed5bc5188251b24381283",
              avatarLarge: "https://user-gold-cdn.xitu.io/2018/11/19/1672a72d3c77abbb?w=640&h=640&f=jpeg&s=48679",
              username: "美术课代表",
              company: "",
              jobTitle: ""
            }],
            targets: [{
              id: "5c1cba1d092dcb63cb427811",
              content: "turtledrawturtle ​​​ ​​​​绘制的一组生活状态",
              createdAt: "2018-12-21T10:02:05.437Z",
              commentCount: 0,
              likeCount: 4,
              isTopicRecommend: false,
              uid: "5b3ed5bc5188251b24381283",
              url: "",
              urlPic: "",
              urlTitle: "",
              updatedAt: "2018-12-21T10:02:08.342Z",
              viewerHasLiked: false,
              pictures: [
                "https://user-gold-cdn.xitu.io/2018/12/21/167d035a432fcf48?w=690&h=690&f=jpeg&s=50916",
                "https://user-gold-cdn.xitu.io/2018/12/21/167d035c6beceb3d?w=690&h=689&f=jpeg&s=30250",
                "https://user-gold-cdn.xitu.io/2018/12/21/167d035e5478a646?w=690&h=689&f=jpeg&s=31052",
                "https://user-gold-cdn.xitu.io/2018/12/21/167d036063fcaebd?w=690&h=690&f=jpeg&s=53294",
                "https://user-gold-cdn.xitu.io/2018/12/21/167d03629cb9b5d6?w=690&h=690&f=jpeg&s=47294",
                "https://user-gold-cdn.xitu.io/2018/12/21/167d0364932c9198?w=690&h=690&f=jpeg&s=41786",
                "https://user-gold-cdn.xitu.io/2018/12/21/167d0366dc6e4bc1?w=690&h=690&f=jpeg&s=40838",
                "https://user-gold-cdn.xitu.io/2018/12/21/167d0368d7ecce88?w=690&h=690&f=jpeg&s=58017",
                "https://user-gold-cdn.xitu.io/2018/12/21/167d036e4bd86531?w=690&h=689&f=jpeg&s=36841"
              ],
              topic: {
                id: "5bde463e092dcb7eb99bfa95",
                title: "这个设计有点优秀"
              },
              user: {
                id: "5b3ed5bc5188251b24381283",
                avatarLarge: "https://user-gold-cdn.xitu.io/2018/11/19/1672a72d3c77abbb?w=640&h=640&f=jpeg&s=48679",
                username: "美术课代表",
                company: "",
                jobTitle: "",
                viewerIsFollowing: false
              }
            }]
          }
        },
        {
          node: {
            id: "5c1cb925a62e8eee551816b5",
            action: "PUBLISH_PIN",
            actors: [{
              id: "5baf195c6fb9a05d151cb303",
              avatarLarge: "https://user-gold-cdn.xitu.io/2018/9/29/16623feb09b155c1?w=1194&h=895&f=jpeg&s=272354",
              username: "数据图表控",
              company: "掘金",
              jobTitle: "数据分析员"
            }],
            targets: [{
              id: "5c1cb925092dcb63cb427810",
              content: "赛诺数据公布了11月手机整体市场销售量排名：\n1、vivo 626万台\n2、华为 600万台\n3、OPPO 587万台\n4、荣耀 584万台\n5、苹果 483万台\n6、小米 410万台\n7、魅族 47万台\n8、三星 35万台\n9、金立 10万台",
              createdAt: "2018-12-21T09:57:57.622Z",
              commentCount: 1,
              likeCount: 1,
              isTopicRecommend: false,
              uid: "5baf195c6fb9a05d151cb303",
              url: "",
              urlPic: "",
              urlTitle: "",
              updatedAt: "2018-12-21T09:58:11.673Z",
              viewerHasLiked: false,
              pictures: [
                "https://user-gold-cdn.xitu.io/2018/12/21/167d03329db393f1?w=641&h=282&f=jpeg&s=25113"
              ],
              topic: null,
              user: {
                id: "5baf195c6fb9a05d151cb303",
                avatarLarge: "https://user-gold-cdn.xitu.io/2018/9/29/16623feb09b155c1?w=1194&h=895&f=jpeg&s=272354",
                username: "数据图表控",
                company: "掘金",
                jobTitle: "数据分析员",
                viewerIsFollowing: false
              }
            }]
          }
        },
        {
          node: {
            id: "5c1cb262d66d638f4cdcff70",
            action: "PUBLISH_PIN",
            actors: [{
              id: "5af9234151882530646534f3",
              avatarLarge: "https://user-gold-cdn.xitu.io/2018/7/31/164eef916fac8bac?w=1239&h=1209&f=png&s=371545",
              username: "Choerodon猪齿鱼",
              company: "微服务、DevOps、容器",
              jobTitle: "开源PaaS平台"
            }],
            targets: [{
              id: "5c1cb25af265da325408881e",
              content: "Choerodon猪齿鱼即将发布新版本，会新增状态机设置、应用权限控制、配置映射功能、自动化测试等功能。感兴趣的小伙伴上我们GitHub安装体验吧👇",
              createdAt: "2018-12-21T09:28:58.940Z",
              commentCount: 0,
              likeCount: 2,
              isTopicRecommend: false,
              uid: "5af9234151882530646534f3",
              url: "https://github.com/choerodon/",
              urlPic: "https://mirror-gold-cdn.xitu.io/167d015be24222979a9",
              urlTitle: "Choerodon",
              updatedAt: "2018-12-21T09:56:14.126Z",
              viewerHasLiked: false,
              pictures: [],
              topic: null,
              user: {
                id: "5af9234151882530646534f3",
                avatarLarge: "https://user-gold-cdn.xitu.io/2018/7/31/164eef916fac8bac?w=1239&h=1209&f=png&s=371545",
                username: "Choerodon猪齿鱼",
                company: "微服务、DevOps、容器",
                jobTitle: "开源PaaS平台",
                viewerIsFollowing: false
              }
            }]
          }
        },
        {
          node: {
            id: "5c1cb42ca62e8eee551786de",
            action: "PUBLISH_PIN",
            actors: [{
              id: "595315e7f265da6c322dc6c6",
              avatarLarge: "http://tva2.sinaimg.cn/crop.0.0.180.180.180/4b4d632fjw1e8qgp5bmzyj2050050aa8.jpg",
              username: "张鑫旭",
              company: "阅文集团",
              jobTitle: "前端打杂师"
            }],
            targets: [{
              id: "5c1cb42cf265da3254088838",
              content: "阅文年底急招职位，设计师，产品经理，技术开发，都缺，有意可以简历至 zhangxinxu@yuewen.com ，可以帮忙内推，前端职位无论合不合适，都会回复。",
              createdAt: "2018-12-21T09:36:44.589Z",
              commentCount: 4,
              likeCount: 8,
              isTopicRecommend: false,
              uid: "595315e7f265da6c322dc6c6",
              url: "",
              urlPic: "",
              urlTitle: "",
              updatedAt: "2018-12-21T09:37:29.873Z",
              viewerHasLiked: false,
              pictures: [
                "https://user-gold-cdn.xitu.io/2018/12/21/167d01fcc34d7863?w=745&h=433&f=png&s=17930"
              ],
              topic: {
                id: "5abb61e1092dcb4620ca3322",
                title: "内推信息"
              },
              user: {
                id: "595315e7f265da6c322dc6c6",
                avatarLarge: "http://tva2.sinaimg.cn/crop.0.0.180.180.180/4b4d632fjw1e8qgp5bmzyj2050050aa8.jpg",
                username: "张鑫旭",
                company: "阅文集团",
                jobTitle: "前端打杂师",
                viewerIsFollowing: false
              }
            }]
          }
        }
      ];
      this.userRecommend = [
        {
        "id": "5be87c34d66d638f4cc58b1a",
        "description": "运维领域优秀贡献者",
        "achievement": "2k+人关注",
        "user": {
          "id": "5b63e6e2f265da0f4b7ab2e1",
          "avatarLarge": "https://user-gold-cdn.xitu.io/2018/8/10/165217d460795358?w=900&h=900&f=jpeg&s=74567",
          "username": "运维之美",
          "viewerIsFollowing": false
        }
      }, {
        "id": "5be87c34d66d638f4cc58a96",
        "description": "Android 领域优秀贡献者",
        "achievement": "4k+人关注",
        "user": {
          "id": "554b876fe4b0f6e981675644",
          "avatarLarge": "https://user-gold-cdn.xitu.io/2016/11/29/5e5ae908bb734a42c874e6b973b1ae31",
          "username": "吴小龙同學",
          "viewerIsFollowing": false
        }
      }, {
        "id": "5be87c34d66d638f4cc58acf",
        "description": "人工智能领域优秀贡献者",
        "achievement": "3k+人关注",
        "user": {
          "id": "5b581340e51d4535a65ad55e",
          "avatarLarge": "https://user-gold-cdn.xitu.io/2018/8/17/16545eb2f4ecdf5c?w=166&h=180&f=jpeg&s=4673",
          "username": "落寞的搬运工",
          "viewerIsFollowing": false
        }
      }, {
        "id": "5be87c34d66d638f4cc58b1e",
        "description": "运维领域优秀贡献者",
        "achievement": "4k+人关注",
        "user": {
          "id": "5b39bd7de51d4558d43ff06d",
          "avatarLarge": "https://user-gold-cdn.xitu.io/2018/7/2/16459c1e94f61f29?w=500&h=500&f=jpeg&s=26496",
          "username": "清蒸不是水煮",
          "viewerIsFollowing": false
        }
      }, {
        "id": "5be87c34d66d638f4cc58b24",
        "description": "运维领域优秀贡献者",
        "achievement": "2k+人关注",
        "user": {
          "id": "5af9234151882530646534f3",
          "avatarLarge": "https://user-gold-cdn.xitu.io/2018/7/31/164eef916fac8bac?w=1239&h=1209&f=png&s=371545",
          "username": "Choerodon猪齿鱼",
          "viewerIsFollowing": false
        }
      }, {
        "id": "5be87c34d66d638f4cc58aaa",
        "description": "Android 领域优秀贡献者",
        "achievement": "掘金推荐用户",
        "user": {
          "id": "5953aa585188250d914db79f",
          "avatarLarge": "https://user-gold-cdn.xitu.io/2017/12/1/160121ea049d83f5",
          "username": "OnlyTerminator",
          "viewerIsFollowing": false
        }
      }, {
        "id": "5be87c34d66d638f4cc58ae3",
        "description": "前端领域优秀贡献者",
        "achievement": "5k+人关注",
        "user": {
          "id": "5875dfc7a22b9d0058a96d06",
          "avatarLarge": "https://user-gold-cdn.xitu.io/2018/1/7/160cf1a8d473fc00?w=1242&h=1242&f=png&s=1088612",
          "username": "技术胖",
          "viewerIsFollowing": false
        }
      }, {
        "id": "5be87c34d66d638f4cc58b52",
        "description": "iOS 领域优秀贡献者",
        "achievement": "2k+人关注",
        "user": {
          "id": "57f3a7ea8ac2470058906295",
          "avatarLarge": "https://user-gold-cdn.xitu.io/2018/5/20/1637bef59e853e26?w=956&h=692&f=png&s=805178",
          "username": "RiverLi",
          "viewerIsFollowing": false
        }
      }, {
        "id": "5be87c34d66d638f4cc58aff",
        "description": "前端领域优秀贡献者",
        "achievement": "5k+人关注",
        "user": {
          "id": "557e5397e4b078e61fe6cb88",
          "avatarLarge": "https://user-gold-cdn.xitu.io/2016/11/29/0765d71b7ab2154f49f0e4d8673d7f2c",
          "username": "愚人码头",
          "viewerIsFollowing": false
        }
      }, {
        "id": "5be87c34d66d638f4cc58af5",
        "description": "前端领域优秀贡献者",
        "achievement": "3k+人关注",
        "user": {
          "id": "5b0e6162518825159a7f6bcb",
          "avatarLarge": "https://avatars0.githubusercontent.com/u/31679436?v=4",
          "username": "jerryOnlyZRJ",
          "viewerIsFollowing": false
        }
      }, {
        "id": "5be87c34d66d638f4cc58ad6",
        "description": "人工智能领域优秀贡献者",
        "achievement": "2k+人关注",
        "user": {
          "id": "5b581dab5188251af2570692",
          "avatarLarge": "https://avatars0.githubusercontent.com/u/41667894?v=4",
          "username": "探究心底深渊",
          "viewerIsFollowing": false
        }
      }, {
        "id": "5be87c34d66d638f4cc58b1f",
        "description": "运维领域优秀贡献者",
        "achievement": "掘金推荐用户",
        "user": {
          "id": "5b5be1af6fb9a04f9e231f80",
          "avatarLarge": "https://user-gold-cdn.xitu.io/2018/9/17/165e4f709dec668b?w=768&h=768&f=jpeg&s=386587",
          "username": "yujianfeng_cib",
          "viewerIsFollowing": false
        }
      }, {
        "id": "5be17c22e51d457d4932a55e",
        "description": "程序员的那些趣事",
        "achievement": "掘金推荐用户",
        "user": {
          "id": "5a7404225188257a591194e1",
          "avatarLarge": "https://user-gold-cdn.xitu.io/2018/2/2/1615531401135ea8?w=325&h=260&f=png&s=15295",
          "username": "程序员趣事",
          "viewerIsFollowing": false
        }
      }, {
        "id": "5be87c34d66d638f4cc58b49",
        "description": "iOS 领域优秀贡献者",
        "achievement": "2k+人关注",
        "user": {
          "id": "5b46b67ce51d45194832cbb4",
          "avatarLarge": "https://user-gold-cdn.xitu.io/2018/7/16/1649eaef5f15b58c?w=1242&h=1242&f=jpeg&s=38057",
          "username": "SwiftGG翻译组",
          "viewerIsFollowing": false
        }
      }, {
        "id": "5be87c34d66d638f4cc58b12",
        "description": "运维领域优秀贡献者",
        "achievement": "1k+人关注",
        "user": {
          "id": "579969d7128fe100541207e0",
          "avatarLarge": "https://user-gold-cdn.xitu.io/2018/11/19/1672a6b47fa71187?w=768&h=768&f=jpeg&s=324713",
          "username": "yuzu柚子茶",
          "viewerIsFollowing": false
        }
      }, {
        "id": "5be180c3e51d450d062e69a3",
        "description": "后端技术分享、工具",
        "achievement": "掘金官方账号",
        "user": {
          "id": "5bcc4738f265da0abe273282",
          "avatarLarge": "https://user-gold-cdn.xitu.io/2018/12/14/167ab439dfcc64ef?w=600&h=599&f=png&s=30051",
          "username": "后端技术研究员",
          "viewerIsFollowing": false
        }
      }, {
        "id": "5be87c34d66d638f4cc58acc",
        "description": "后端领域优秀贡献者",
        "achievement": "1k+人关注",
        "user": {
          "id": "58dcdddaac502e006cf27b54",
          "avatarLarge": "https://user-gold-cdn.xitu.io/2018/8/7/16514c40ebc37b05?w=960&h=960&f=jpeg&s=85377",
          "username": "pjmike_pj",
          "viewerIsFollowing": false
        }
      }, {
        "id": "5be17fb2e51d4552d47d154d",
        "description": "提升你开发效率的工具们",
        "achievement": "掘金官方账号",
        "user": {
          "id": "5af1a2cf51882567244df2a3",
          "avatarLarge": "https://user-gold-cdn.xitu.io/2018/5/8/1633fe7795284e20?w=512&h=512&f=png&s=27103",
          "username": "开发工具推荐",
          "viewerIsFollowing": false
        }
      }].slice(0, 5)
  
  
    }
  };
</script>

<style lang="scss" scoped>
  .post-main {
    display: flex;
    max-width: 960px;
    margin: auto;
    justify-content: space-between;
    .active-cont-main {
      position: relative;
      padding: 10px 20px;
      background-color: white;
      .active-cont-div {
        border-radius: 3px;
        background-color: #f3f5f7;
        height: 120px;
        padding: 10px;
        font-size: 14px;
        position: relative;
        outline: none;
        &::after {
          content: attr(placeholder);
          position: absolute;
          top: 10px;
          left: 10px;
          color: gray;
        }
      }
      .active-cont-len {
        position: absolute;
        right: 10px;
        bottom: 10px;
      }
      .empty {
        &::after {
          display: none;
        }
      }
      .active-cont-action{
        display: flex;
        justify-content: space-between;
        padding: 10px 0 0 0;
        .attent-button{
            font-size: 14px;
            padding: 6px 16px;
            background-color: #027fff;
            color: white;
            border: none;
        }
        .not-allow{
            background-color: rgba(2, 127, 255, 0.5);
            cursor: not-allowed;
        }
      }
    }
    .active {
      width: 650px;
      .active-list {
        margin: 10px 0;
        background-color: white;
        border-radius: 3px;
        .user-top {
          display: flex;
          font-size: 14px;
          padding: 15px 20px 0;
          .actorImg {
            width: 45px;
            height: 45px;
            border-radius: 50%;
          }
          .user-info {
            flex-grow: 1;
            margin-left: 5px;
            span {
              margin-right: 5px;
            }
            .user-name {
              font-weight: bolder;
            }
            .user-blone {
              color: gray;
            }
          }
        }
        .active-content {
          padding: 5px 70px;
          font-size: 14px;
        }
        .active-tags {
          padding: 20px 70px 5px;
          span {
            border: 1px solid #007fff;
            color: #007fff;
            border-radius: 14px;
            padding: 3px 12px;
          }
        }
        .imgs-main {
          display: flex;
          flex-wrap: wrap;
          .imgs-div {
            height: 200px;
            width: 160px;
          }
        }
      }
    }
    .post-nav {
      width: 300px;
      font-size: 14px;
      padding-bottom: 10px;
      .nav-list {
        background-color: white;
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
        .nav-title {
          font-weight: bold;
          border-bottom: 1px solid gainsboro;
          padding: 10px;
        }
        .nav-item {
          display: flex;
          align-items: center;
          border-radius: 3px;
          padding: 1rem;
          .nav-user-info,
          .nav-info,
          .imgs-div {
            display: inline-block;
          }
          .nav-user-info {
            font-size: 16px;
          }
          .nav-info {
            font-size: 12px;
            flex-grow: 1;
            .user-post {
              color: gray;
            }
          }
          .imgs-div {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin: 0 10px 0 0;
          }
          .user-avtive {
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
  }
  
  .active-actions {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid gainsboro;
    margin: 10px 0;
    >div {
      width: 100%;
      text-align: center;
      font-size: 14px;
      padding: 10px 0;
      color: darkgray;
      >div {
        cursor: pointer;
        border-right: 1px solid gainsboro;
        i {
          margin-right: 5px;
        }
        div {
          color: black;
        }
      }
      .noborder {
        border-right: none;
      }
    }
  }
  
  .imgs-div {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: 10px;
  }
  
  .user-nav-item .imgs-div {
    box-shadow: 0 1px 7px;
  }
  
  .attent-button {
    outline: none;
    padding: 4px 14px;
    background: white;
    border-radius: 3px;
    border: 1px solid #6cbd45;
    color: #6cbd45;
    cursor: pointer;
  }
</style>
