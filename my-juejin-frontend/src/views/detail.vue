<template>
  <div id="detail">
    <div class="post-share">
      <ul class="post-ul">
        <li>
          <i class="iconfont icon-like"></i>
        </li>
        <li>
          <i class="iconfont icon-pinglun"></i>
        </li>
        <li>
          <i class="iconfont icon-star"></i>
        </li>
        <li>
          <i class="iconfont icon-weibo"></i>
        </li>
        <li>
          <i class="iconfont icon-changyonglogo33"></i>
        </li>
        <li>
          <i class="iconfont icon-weixin"></i>
        </li>
      </ul>
    </div>

    <div class="post-detail">
      <div class="top-user">
        <img class="user-avator" :src="postInfo.user.avatarLarge" alt>
        <div class="post-smaple">
          <span>{{postInfo.user.username}}</span>
          <div>
            <span>{{postInfo.createdAt.substr(0,10)}}</span>
            <span style="margin-left:1rem">阅读 {{postInfo.viewsCount}}</span>
          </div>
        </div>
      </div>
      <h1>{{postInfo.title}}</h1>
      <div v-html="content"></div>
    </div>

    <div class="post-side">
      <div class="about-user">
        <span class="side-title">关于作者</span>

        <div class="top-user">
          <img class="user-avator" :src="postInfo.user.avatarLarge" alt>
          <div class="post-smaple">
            <span>{{postInfo.user.username}}</span>
            <div>
              <span>{{postInfo.user.jobTitle}}</span>
              <span v-if="postInfo.user.company">@ {{postInfo.user.company}}</span>
            </div>
          </div>
        </div>
        <span v-if="postInfo.user.role != 'guest'">联合编辑</span>
        <span>
          <i class="iconfont icon-like"></i>
          获得赞数 {{postInfo.user.totalCollectionsCount}}
        </span>
        <span>
          <i class="iconfont icon-yanjing"></i>
          获得阅读数 8450
          <!-- 获得阅读数 {{postInfo.user.totalCollectionsCount}} -->
        </span>
      </div>

      <div class="about-user">
        <span class="side-title">你可能感兴趣的小册</span>

        <div class="top-user" v-for="item in recommendBooks" :key="item._id">
          <div>
            <img class="post-img" :src="item.img" alt>
          </div>
          <div class="post-smaple">
            <span>{{item.title}}</span>
            <div>
              <span class="post-buycount">{{item.buyCount}}人已购买</span>
              <button class="nav-write">试读</button>
            </div>
          </div>
        </div>
      </div>

      <div class="about-user">
        <span class="side-title">相关文章(给自己打广告)</span>

        <div class="top-user" v-for="item in myPosts" :key="item.index">
          <div class="post-smaple post-mylist">
            <router-link
              target="_blank"
              class="post-a"
              :to="{path:'/detail/'+item.objectId}"
            >{{item.title}}</router-link>
            <div>
              <span>
                <i class="iconfont icon-like"></i>
                {{item.like}}
              </span>
              <span>
                <i class="iconfont icon-pinglun"></i>
                {{item.comment}}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detail",
  data() {
    return {
      content: "",
      postInfo: "",
      recommendBooks: []
    };
  },
  mounted() {
    let id = this.$router.currentRoute.params.id;
    this.axios
      .get("/detail/getDetailData?src=web&type=entry&postId=" + id)
      .then(res => {
        this.postInfo = res.data.d;
      });

    this.axios
      .get("/detail/getDetailData?src=web&type=entryView&postId=" + id)
      .then(res => {
        this.content = res.data.d.transcodeContent.replace("↵", "");
      });

    //小册推荐 请求太多了就先用零时数据
    this.recommendBooks = [
      {
        _id: "5b936540f265da0a9624b04b",
        section: [
          "5b936540f265da0aec223b5d",
          "5b97cd22e51d450e8f5f6375",
          "5b98ceb46fb9a05d3154f6bd",
          "5b9ba651f265da0ac726e5de",
          "5ba5bb16f265da0ae92a6cfc",
          "5ba713125188255c9b13b5e9",
          "5ba9e0485188255c6b6512c1",
          "5bac3a4df265da0aa81c043c",
          "5baedf705188255c9b13c376",
          "5bb1815c6fb9a05d2d0233ad",
          "5bb1826af265da0a972e3038",
          "5bb62114f265da0ada52569b",
          "5bb6212be51d451a3f4c3570",
          "5bb6218ee51d450e7762f873",
          "5bb621f5e51d450ea363651d"
        ],
        desc:
          "\u6beb\u79d2\u5fc5\u4e89\uff01\u6df1\u5165\u7406\u89e3\u524d\u7aef\u6027\u80fd\u539f\u7406\uff0c\u5c06\u6666\u6da9\u7684\u77e5\u8bc6\u8f6c\u5316\u4e3a\u53ef\u7231\u7684\u751f\u4ea7\u529b\uff0c\u5efa\u7acb\u4f60\u81ea\u5df1\u7684\u4f18\u5316\u6280\u80fd\u7d22\u5f15\u76ee\u5f55",
        user: "5b8df4ef6fb9a019b421e11c",
        price: 19.9,
        title:
          "\u524d\u7aef\u6027\u80fd\u4f18\u5316\u539f\u7406\u4e0e\u5b9e\u8df5",
        buyCount: 4342,
        viewCount: 0,
        contentSize: 93515,
        img:
          "https://user-gold-cdn.xitu.io/2018/10/23/166a0387b91066b9?w=650&h=910&f=png&s=250749",
        category: "5562b415e4b00c57d9b94ac8",
        tags: [],
        createdAt: "2018-10-23T16:02:22.881Z",
        updatedAt: "2018-12-18T10:39:14.163Z",
        finishedAt: "2018-10-24",
        isFinished: true,
        isDeleted: false,
        isHot: true,
        isPublish: 2,
        isShow: true,
        profile:
          "\u963f\u91cc\u5df4\u5df4\u96c6\u56e2\u524d\u7aef\u5de5\u7a0b\u5e08",
        lastSectionCount: 15,
        pv: 89500,
        wechatSignal: "xnyh1024",
        wechatImg:
          "https://user-gold-cdn.xitu.io/1544583867375f5c5dec2db51ba28c17153ef5f1864dc.jpg",
        wechatImgDesc: "\u5c0f\u518c\u4e5d\u59d0",
        url:
          "https://user-gold-cdn.xitu.io/1540374113168daedfba5f3be80ab4ba40670038d8e2d.jpg",
        navId: ["49"],
        isTop: true,
        timeLimitDiscount:
          '{"discountCount":"5","startUTC":"2018-11-10T14:00:00.000Z","endUTC":"2018-11-11T16:00:00.000Z"}'
      },
      {
        _id: "5ba42844f265da0a8a6aa5e9",
        section: [
          "5ba42844f265da0aa74f24a5",
          "5ba4765e6fb9a05d3c7ff49b",
          "5ba47a76e51d450e7e515ee8",
          "5ba4827a6fb9a05d1342dd26",
          "5ba4840f5188255c791b0008",
          "5ba484c0e51d450e7762c932",
          "5bb018245188255c83211f12",
          "5bb01858e51d450e805b744c",
          "5bd65e03e51d455ed7391d9a",
          "5bd65e6951882529642b26a6",
          "5bd65e836fb9a05ce751a932",
          "5bd65ed3518825630a415444",
          "5bd65eeb518825288c1ff46d",
          "5bd65f215188255c8d10150c",
          "5bd65f93e51d457aba5e938e",
          "5bd65fd5e51d457a8254ff07",
          "5bd66015f265da0a9e535714",
          "5bd660406fb9a05d2328a93f",
          "5bd660acf265da0abd356482",
          "5bd6e3f6e51d4547f763fb44",
          "5bdd1d87f265da61776b6cc4"
        ],
        desc:
          "\u6df1\u5165\u4e86\u89e3 React \u5e94\u7528\u4e2d\u7684\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u603b\u7ed3\u4e1a\u754c\u9a8c\u8bc1\u7684\u6700\u4f73\u5b9e\u8df5\uff0c\u66f4\u8fdb\u4e00\u6b65\uff0c\u4e86\u89e3React \u672a\u6765\u65b0\u529f\u80fd Suspense \u548c Hooks\u3002",
        user: "5b69aceaf265da0faa368ffa",
        price: 29.9,
        title:
          "React \u5b9e\u6218\uff1a\u8bbe\u8ba1\u6a21\u5f0f\u548c\u6700\u4f73\u5b9e\u8df5",
        buyCount: 937,
        viewCount: 0,
        contentSize: 109884,
        img:
          "https://user-gold-cdn.xitu.io/2018/12/4/16779ed4b21a9fa5?w=1950&h=2730&f=png&s=936421",
        category: "",
        tags: [],
        createdAt: "2018-12-10T17:11:13.907Z",
        updatedAt: "2018-12-18T12:34:36.540Z",
        finishedAt: "2018-09-20T23:07:48.051Z",
        isFinished: true,
        isDeleted: false,
        isHot: true,
        isPublish: 2,
        isShow: true,
        profile: "Hulu \u67b6\u6784\u5e08",
        lastSectionCount: 21,
        pv: 3100,
        wechatSignal: "react2018",
        wechatImg:
          "https://user-gold-cdn.xitu.io/15445870687231f029bb5b9eddcd7fe8881928f561ce8.jpg",
        wechatImgDesc: "\u5c0f\u518c\u4e03\u59d0",
        url:
          "https://user-gold-cdn.xitu.io/15444612832237c81f43ea2f20381a400c1e990db82b6.jpg",
        isTop: true,
        navId: ["49"]
      }
    ];

    this.myPosts = [
      {
        title: "electron-vue模仿网易云桌面应用体验",
        like: 122,
        comment: 23,
        objectId: "5bdc127f6fb9a049e129a20a"
      },
      {
        title: "小程序中获取用户github的一些数据进行可视化",
        like: 15,
        comment: 0,
        objectId: "5b9112d46fb9a05d2d01fdf1"
      },
      {
        title: "mpvue微信小程序-仿网易云音乐",
        like: 172,
        comment: 15,
        objectId: "5b88a6f36fb9a019f1801b8d"
      }
    ];
  }
};
</script>

<style lang='scss'>
.cate-list,
.nav-hr {
  display: none;
}

.content-main {
  margin-top: 8rem;
}

#detail {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  max-width: 960px;
  box-sizing: border-box;
  margin: auto;
  .post-share {
    position: fixed;
    margin-left: -5rem;
    top: 14rem;
    .post-ul {
      display: flex;
      flex-direction: column;
      li {
        margin-bottom: 2rem;
      }
      i {
        font-size: 24px;
        background-color: white;
        padding: 5px;
        color: gray;
        border-radius: 50%;
      }
    }
  }
  .post-detail {
    background-color: white;
    width: 660px;
    padding: 2rem;
  }
  .post-side {
    margin-left: 2rem;
    > div {
      background-color: white;
      padding: 1rem;
    }
    .about-user {
      display: flex;
      flex-direction: column;
      width: 200px;
      margin-bottom: 2rem;
      .side-title {
        border-bottom: 1px solid gainsboro;
        padding-bottom: 1rem;
      }
      > span {
        margin-top: 1rem;
        i {
          color: #7bb9ff;
          margin-right: 1rem;
          background-color: #e1efff;
          padding: 5px;
          border-radius: 50%;
        }
      }
      .top-user {
        display: flex;
        align-items: center;
        font-size: 14px;
        margin: 1rem 0;
        .user-avator {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
        .post-img {
          width: 60px;
          height: 80px;
        }
        .post-smaple {
          margin-left: 1rem;
          > div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 12px;
          }
          .post-a {
            color: black;
            text-decoration: none;
          }
          .post-buycount {
            color: gray;
          }
          .nav-write {
            font-size: 12px;
            height: 20px;
            border: none;
            outline: none;
            background-color: #007fff;
            color: white;
            cursor: pointer;
            border-radius: 5px;
          }
        }
        .post-mylist {
          margin: 0;
        }
      }
    }
  }
  img {
    width: 40rem;
    height: 25rem;
  }
}
</style>