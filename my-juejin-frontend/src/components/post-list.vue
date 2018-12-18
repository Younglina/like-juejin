<template>
  <div class="post-main">
    <ul class="post-list">
      <li v-for="item in dataList" :key="item.objectId" class="post-li">
        <div class="post-div">
          <ul class="post-info">
            <li v-if="item.hot" class="is-hot">热</li>
            <li v-if="item.original" class="is-zl">专栏</li>
            <li>{{item.username}}</li>
            <li>{{item.diffTime}}</li>
            <li>{{item.tags}}</li>
          </ul>
          <div class="post-title">
            <h3>{{item.title}}</h3>
          </div>
          <div>
            <ul class="post-action">
              <li>
                <i class="iconfont icon-like"></i>
                <span>{{item.collectionCount}}</span>
              </li>
              <li>
                <i class="iconfont icon-pinglun"></i>
                <span>{{item.commentsCount}}</span>
              </li>
              <li>
                <i class="iconfont icon-yanjing"></i>
                <span>{{item.viewsCount}}</span>
              </li>
              <li>
                <i class="iconfont icon-star1"></i>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="item.screenshot">
          <img class="post-img" :src="item.screenshot">
        </div>
      </li>
    </ul>
    <div class="post-right"></div>
  </div>
</template>

<script>
export default {
  name: "post-list",
  props: {
    msg: String
  },
  data() {
    return {
      dataList: []
    };
  },
  methods: {
    fetchData(first) {
      // this.axios({
      //   url: "/get_entry_by_timeline",
      //   params: {
      //     src: 'web',
      //     tag: '5a152357f265da064058d658',
      //     limit: 20
      //   },
      //   method: "get"
      // }).then(res => {
      let res = {
        s: 1,
        m: "ok",
        d: {
          total: 20,
          entrylist: [
            {
              collectionCount: 224,
              isEvent: false,
              commentsCount: 13,
              gfw: false,
              buildTime: 1545097244.1542,
              checkStatus: true,
              objectId: "5c161b37e51d457b00691c87",
              entryView: "",
              subscribersCount: 0,
              ngxCachedTime: 1545097246,
              verifyStatus: true,
              tags: [
                {
                  ngxCachedTime: 1545097157,
                  ngxCached: true,
                  title: "\u524d\u7aef",
                  id: "5597a05ae4b08a686ce56f6f"
                }
              ],
              updatedAt: "2018-12-18T01:40:43.685Z",
              rankIndex: 22.227730292443,
              hot: false,
              autoPass: false,
              originalUrl: "https://juejin.im/post/5c1606d9f265da613d7bf7a4",
              verifyCreatedAt: "2018-12-17T03:10:22.875Z",
              createdAt: "2018-12-17T03:10:22.875Z",
              user: {
                community: null,
                collectedEntriesCount: 81,
                company: "",
                followersCount: 29,
                followeesCount: 54,
                role: "guest",
                postedPostsCount: 3,
                isAuthor: false,
                postedEntriesCount: 0,
                totalCommentsCount: 15,
                ngxCachedTime: 1545097239,
                ngxCached: true,
                viewedEntriesCount: 1101,
                jobTitle: "",
                subscribedTagsCount: 58,
                totalCollectionsCount: 245,
                username: "awesome23",
                avatarLarge:
                  "https://user-gold-cdn.xitu.io/2018/10/30/166c55f840fba155?w=640&h=640&f=jpeg&s=63552",
                objectId: "5ac5e48cf265da238a30ada4"
              },
              author: "",
              screenshot: "",
              original: true,
              hotIndex: 6801.6442,
              content:
                "\u4f5c\u4e3a\u524d\u7aefer\uff0c\u6211\u4eec\u7684\u5de5\u4f5c\u4e0eweb\u662f\u5206\u4e0d\u5f00\u7684\uff0c\u968f\u7740HTML5\u7684\u65e5\u76ca\u58ee\u5927\uff0c\u6d4f\u89c8\u5668\u81ea\u5e26\u7684webapi\u4e5f\u968f\u7740\u589e\u591a\u3002\u672c\u7bc7\u6587\u7ae0\u4e3b\u8981\u9009\u53d6\u4e86\u51e0\u4e2a\u6709\u8da3\u4e14\u6709\u7528\u7684webapi\u8fdb\u884c\u4ecb\u7ecd\uff0c\u5206\u522b\u4ecb\u7ecd\u5176\u7528\u6cd5\u3001\u7528\u5904\u4ee5\u53ca\u6d4f\u89c8\u5668\u652f\u6301\u5ea6\uff0c\u540c\u65f6\u6211\u4e5f\u5206\u522b\u4e3a\u8fd9\u51e0\u4e2aapi\u90fd\u505a\u4e86\u4e00\u4e2a\u7b80\u5355\u7684demo\uff08\u771f\u7684\u5f88\u7b80\u5355\uff0c\u6837\u5f0f\u7b49\u4e8e\u6ca1\u6709~\u2026",
              title:
                "\u4f60\uff08\u53ef\u80fd\uff09\u4e0d\u77e5\u9053\u7684web api",
              lastCommentTime: "2018-12-18T09:40:34.060Z",
              type: "post",
              english: false,
              category: {
                ngxCached: true,
                title: "frontend",
                id: "5562b415e4b00c57d9b94ac8",
                name: "\u524d\u7aef",
                ngxCachedTime: 1545097169
              },
              viewsCount: 4504,
              summaryInfo:
                "\u4f5c\u4e3a\u524d\u7aefer\uff0c\u6211\u4eec\u7684\u5de5\u4f5c\u4e0eweb\u662f\u5206\u4e0d\u5f00\u7684\uff0c\u968f\u7740HTML5\u7684\u65e5\u76ca\u58ee\u5927\uff0c\u6d4f\u89c8\u5668\u81ea\u5e26\u7684webapi\u4e5f\u968f\u7740\u589e\u591a\u3002\u672c\u7bc7\u6587\u7ae0\u4e3b\u8981\u9009\u53d6\u4e86\u51e0\u4e2a\u6709\u8da3\u4e14\u6709\u7528\u7684webapi\u8fdb\u884c\u4ecb\u7ecd\uff0c\u5206\u522b\u4ecb\u7ecd\u5176\u7528\u6cd5\u3001\u7528\u5904\u4ee5\u53ca\u6d4f\u89c8\u5668\u652f\u6301\u5ea6\uff0c\u540c\u65f6\u6211\u4e5f\u5206\u522b\u4e3a\u8fd9\u51e0\u4e2aapi\u90fd\u505a\u4e86\u4e00\u4e2a\u7b80\u5355\u7684demo\uff08\u771f\u7684\u5f88\u7b80\u5355\uff0c\u6837\u5f0f\u7b49\u4e8e\u6ca1\u6709~\uff09\u8fd9\u51e0\u4e2aapi\u5206\u522b\u662f...",
              isCollected: false
            },
            {
              collectionCount: 146,
              isEvent: false,
              commentsCount: 15,
              gfw: false,
              buildTime: 1545097241.0161,
              checkStatus: true,
              objectId: "5c16f590e51d45065e616046",
              entryView: "",
              subscribersCount: 0,
              ngxCachedTime: 1545097246,
              verifyStatus: true,
              tags: [
                {
                  ngxCachedTime: 1545097213,
                  ngxCached: true,
                  title: "JavaScript",
                  id: "55964d83e4b08a686cc6b353"
                }
              ],
              updatedAt: "2018-12-18T01:40:41.014Z",
              rankIndex: 19.832845316671,
              hot: false,
              autoPass: true,
              originalUrl: "https://www.css88.com/archives/10384",
              verifyCreatedAt: "2018-12-17T01:02:08.795Z",
              createdAt: "2018-12-17T01:02:08.795Z",
              user: {
                community: {
                  weibo: {
                    selfDescription:
                      "http://www.css88.com/ \u548c\u8bbe\u8ba1\u5e08\u4e00\u6837\u7ec6\u817b,\u548c\u7a0b\u5e8f\u5458\u4e00\u6837\u4e25\u8c28;\u5076\u662f\u4e00\u679a\u524d\u7aef\u653b\u57ce\u72ee\uff01",
                    uid: "1477178352",
                    blogAddress: "http://weibo.com/148246293",
                    username: "\u611a\u4eba\u7801\u5934",
                    avatarLarge:
                      "http://tva3.sinaimg.cn/crop.0.0.180.180.180/580bf3f0jw1e8qgp5bmzyj2050050aa8.jpg"
                  },
                  wechat: {
                    avatarLarge:
                      "http://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83err4T7dJoITk7E6UKtv1ibrpRib3Zw4IZofTNP4sUcibu0gvx9STE1VUh8JfHNiavQwVlwqaDwW2Ea4YQ/0"
                  }
                },
                collectedEntriesCount: 316,
                company: "css88.com",
                followersCount: 6843,
                followeesCount: 63,
                role: "editor",
                postedPostsCount: 1,
                isAuthor: true,
                postedEntriesCount: 3,
                totalCommentsCount: 439,
                ngxCachedTime: 1545097225,
                ngxCached: true,
                viewedEntriesCount: 1899,
                jobTitle: "\u524d\u7aef\u5f00\u53d1",
                subscribedTagsCount: 50,
                totalCollectionsCount: 16484,
                username: "\u611a\u4eba\u7801\u5934",
                avatarLarge:
                  "https://user-gold-cdn.xitu.io/2016/11/29/0765d71b7ab2154f49f0e4d8673d7f2c",
                objectId: "557e5397e4b078e61fe6cb88"
              },
              author: "",
              screenshot:
                "https://user-gold-cdn.xitu.io/2018/12/17/167b9af3a276aa23?w=800&h=292&f=png&s=36162",
              original: false,
              hotIndex: 7073.9023,
              content:
                "\u524d\u7aef\u53d1\u5c55\u7684\u4e16\u754c\u53d1\u5c55\u8fc5\u901f\u3002\u975e\u5e38\u5feb\u3002\u672c\u6587\u5c06\u56de\u987e2018\u5e74\u6700\u91cd\u8981\u7684\u524d\u7aef\u65b0\u95fb\uff0c\u503c\u5f97\u5173\u6ce8\u7684\u4e8b\u4ef6\u548c JavaScript \u8d8b\u52bf\u3002",
              title:
                "\u524d\u7aef\u5f00\u53d1 2018 \u56de\u987e\u53ca 2019 \u5c55\u671b",
              lastCommentTime: "2018-12-18T08:53:51.305Z",
              type: "article",
              english: false,
              category: {
                ngxCached: true,
                title: "frontend",
                id: "5562b415e4b00c57d9b94ac8",
                name: "\u524d\u7aef",
                ngxCachedTime: 1545097169
              },
              viewsCount: 5536,
              summaryInfo:
                "\u5c0f\u7f16\u63a8\u8350\uff1a\u6398\u91d1\u662f\u4e00\u4e2a\u9762\u5411\u7a0b\u5e8f\u5458\u7684\u9ad8\u8d28\u91cf\u6280\u672f\u793e\u533a\uff0c\u4ece \u4e00\u7ebf\u5927\u5382\u7ecf\u9a8c\u5206\u4eab\u5230\u524d\u7aef\u5f00\u53d1\u6700\u4f73\u5b9e\u8df5\uff0c\u65e0\u8bba\u662f\u5165\u95e8\u8fd8\u662f\u8fdb\u9636\uff0c\u6765\u6398\u91d1\u4f60\u4e0d\u4f1a\u9519\u8fc7\u524d\u7aef\u5f00\u53d1\u7684\u4efb\u4f55\u4e00\u4e2a\u6280\u672f\u5e72\u8d27\u3002 \u524d\u7aef\u53d1\u5c55\u7684\u4e16\u754c\u53d1\u5c55\u8fc5\u901f\u3002\u975e\u5e38\u5feb\u3002\u672c\u6587\u5c06\u56de\u987e2018\u5e74\u6700\u91cd\u8981\u7684\u524d\u7aef\u65b0\u95fb\uff0c\u503c\u5f97\u5173\u6ce8\u7684\u4e8b\u4ef6\u548c JavaScript \u8d8b\u52bf\u3002 WEBASSEMBLY \u53d1...",
              isCollected: false
            },
            {
              collectionCount: 85,
              isEvent: false,
              commentsCount: 0,
              gfw: false,
              buildTime: 1545097242.0177,
              checkStatus: true,
              objectId: "5c178b3ef265da61290a1810",
              entryView: "",
              subscribersCount: 0,
              ngxCachedTime: 1545097246,
              verifyStatus: true,
              tags: [
                {
                  ngxCachedTime: 1545097157,
                  ngxCached: true,
                  title: "\u524d\u7aef",
                  id: "5597a05ae4b08a686ce56f6f"
                }
              ],
              updatedAt: "2018-12-18T01:40:32.395Z",
              rankIndex: 19.699397036293,
              hot: false,
              autoPass: false,
              originalUrl: "https://juejin.im/post/5c178aaaf265da6147702108",
              verifyCreatedAt: "2018-12-17T13:57:12.462Z",
              createdAt: "2018-12-17T13:57:12.462Z",
              user: {
                community: {
                  github: {
                    username: "sunmengyuan",
                    avatarLarge:
                      "https://avatars2.githubusercontent.com/u/13533886?v=4",
                    uid: "13533886"
                  }
                },
                collectedEntriesCount: 11,
                company: "\u7f8e\u56e2\u667a\u80fd\u652f\u4ed8",
                followersCount: 49,
                followeesCount: 2,
                role: "guest",
                postedPostsCount: 8,
                isAuthor: false,
                postedEntriesCount: 0,
                totalCommentsCount: 26,
                ngxCachedTime: 1545097232,
                ngxCached: true,
                viewedEntriesCount: 196,
                jobTitle: "\u524d\u7aef\u5f00\u53d1",
                subscribedTagsCount: 122,
                totalCollectionsCount: 772,
                username: "\u5446\u604b\u5c0f\u55b5_sunmy",
                avatarLarge:
                  "https://user-gold-cdn.xitu.io/2018/7/13/1649183690ec6d06?w=256&h=256&f=jpeg&s=34041",
                objectId: "5b480e15e51d451925628493"
              },
              author: "",
              screenshot: "",
              original: true,
              hotIndex: 2065.2829,
              content:
                "\u57cb\u70b9\u5373\u76d1\u63a7\u7528\u6237\u5728\u5e94\u7528\u8868\u73b0\u5c42\u7684\u884c\u4e3a\uff0c\u4e8e\u4ea7\u54c1\u8fed\u4ee3\u800c\u8a00\u81f3\u5173\u91cd\u8981\u3002\u57cb\u70b9\u6570\u636e\u5206\u6790\u662f\u4ea7\u54c1\u9700\u6c42\u7684 \u6765\u6e90\uff0c\u68c0\u9a8c\u529f\u80fd\u662f\u5426\u8fbe\u9884\u671f\u7684 \u4f50\u8bc1\u3002\u524d\u7aef\u8f83\u670d\u52a1\u7aef\u66f4\u63a5\u8fd1\u7528\u6237\uff0c\u672c\u5c0f\u767d\u5c06\u5728\u6b64\u5bf9\u524d\u7aef\u57cb\u70b9\u7edf\u8ba1\u65b9\u6848\u8ff0\u8bf4\u4e00\u4e8c\u3002 \u4e0d\u540c\u4ea7\u54c1\u5bf9\u6570\u636e\u7684\u5173\u6ce8\u89d2\u5ea6\u4e0d\u540c\uff0c\u53ef\u6309\u9700\u91c7\u96c6\u3002\u5982\u4fe1\u606f\u6d41\u4ea7\u54c1\u5bf9\u505c\u7559\u65f6\u957f\u7684\u5173\u6ce8\u5ea6\u66f4\u9ad8\uff08\u7edf\u8ba1\u9875\u9762\u8bbf\u95ee &\u2026",
              title:
                "\u524d\u7aef\u57cb\u70b9\u7edf\u8ba1\u65b9\u6848\u601d\u8003",
              lastCommentTime: "2018-12-18T00:04:22.567Z",
              type: "post",
              english: false,
              category: {
                ngxCached: true,
                title: "frontend",
                id: "5562b415e4b00c57d9b94ac8",
                name: "\u524d\u7aef",
                ngxCachedTime: 1545097169
              },
              viewsCount: 1223,
              summaryInfo:
                "\u57cb\u70b9\u5373\u76d1\u63a7\u7528\u6237\u5728\u5e94\u7528\u8868\u73b0\u5c42\u7684\u884c\u4e3a\uff0c\u4e8e\u4ea7\u54c1\u8fed\u4ee3\u800c\u8a00\u81f3\u5173\u91cd\u8981\u3002\u57cb\u70b9\u6570\u636e\u5206\u6790\u662f\u4ea7\u54c1\u9700\u6c42\u7684 \u6765\u6e90\uff0c\u68c0\u9a8c\u529f\u80fd\u662f\u5426\u8fbe\u9884\u671f\u7684 \u4f50\u8bc1\u3002\u524d\u7aef\u8f83\u670d\u52a1\u7aef\u66f4\u63a5\u8fd1\u7528\u6237\uff0c\u672c\u5c0f\u767d\u5c06\u5728\u6b64\u5bf9\u524d\u7aef\u57cb\u70b9\u7edf\u8ba1\u65b9\u6848\u8ff0\u8bf4\u4e00\u4e8c\u3002 \u4e0d\u540c\u4ea7\u54c1\u5bf9\u6570\u636e\u7684\u5173\u6ce8\u89d2\u5ea6\u4e0d\u540c\uff0c\u53ef\u6309\u9700\u91c7\u96c6\u3002\u5982\u4fe1\u606f\u6d41\u4ea7\u54c1\u5bf9\u505c\u7559\u65f6\u957f\u7684\u5173\u6ce8\u5ea6\u66f4\u9ad8\uff08\u7edf\u8ba1\u9875\u9762\u8bbf\u95ee & \u8df3\u51fa\u65f6\u95f4\uff09\uff0c\u5546\u57ce\u7c7b...",
              isCollected: false
            },
            {
              collectionCount: 83,
              isEvent: false,
              commentsCount: 18,
              gfw: false,
              buildTime: 1545097244.0943,
              checkStatus: true,
              objectId: "5c172b0ce51d453788698d09",
              entryView: "",
              subscribersCount: 0,
              ngxCachedTime: 1545097246,
              verifyStatus: true,
              tags: [
                {
                  ngxCachedTime: 1545097135,
                  ngxCached: true,
                  title: "\u524d\u7aef\u6846\u67b6",
                  id: "55978433e4b0c4d3e6fddcb1"
                }
              ],
              updatedAt: "2018-12-18T01:40:44.026Z",
              rankIndex: 18.541119651654,
              hot: false,
              autoPass: false,
              originalUrl: "https://juejin.im/post/5c15b7b7f265da613e2223c9",
              verifyCreatedAt: "2018-12-17T08:22:43.663Z",
              createdAt: "2018-12-17T08:22:43.663Z",
              user: {
                community: {
                  weibo: {
                    selfDescription:
                      "\u5b9d\u5251\u950b\u4ece\u78e8\u783a\u51fa\uff0c\u6885\u82b1\u9999\u81ea\u82e6\u5bd2\u6765\uff0c\u8ba4\u771f\u505a\u81ea\u5df1",
                    uid: "3911390812",
                    blogAddress: "http://weibo.com/u/3911390812",
                    username: "\u4e3a\u4eba\u4f4e_\u8c03",
                    avatarLarge:
                      "http://tvax1.sinaimg.cn/default/images/default_avatar_male_180.gif"
                  },
                  github: {
                    username: "meibin08",
                    avatarLarge:
                      "https://avatars3.githubusercontent.com/u/18324563?v=4",
                    uid: "18324563"
                  }
                },
                collectedEntriesCount: 73,
                company: "@IT\u00b7\u5e73\u5934\u54e5\u8054\u76df",
                followersCount: 2530,
                followeesCount: 241,
                role: "guest",
                postedPostsCount: 19,
                isAuthor: false,
                postedEntriesCount: 1,
                totalCommentsCount: 269,
                ngxCachedTime: 1545097215,
                ngxCached: true,
                viewedEntriesCount: 1029,
                jobTitle: "\u9996\u5e2d\u586b\u5751\u5b98",
                subscribedTagsCount: 32,
                totalCollectionsCount: 2763,
                username: "\u82cf\u5357",
                avatarLarge:
                  "https://avatars3.githubusercontent.com/u/18324563?v=4",
                objectId: "597de6e0f265da3e3c5f6d7d"
              },
              author: "",
              screenshot:
                "https://user-gold-cdn.xitu.io/2018/12/16/167b4d5cd1b243c0?w=1008&h=298&f=png&s=173950",
              original: true,
              hotIndex: 3656.9892,
              content:
                "\u8fd9\u91cc\u55b7\u4e00\u53e5\u5427\uff0c\u8c01\u90fd\u522b\u7ed9\u6211\u63d0IE\u554a\uff0cIE\u90a3\u4e2a\u4e0d\u53eb\u8c03\u8bd5\u5de5\u5177\uff0c\u90a3\u53eb\u5751\u7239\u795e\u5668\uff0c\u8bdd\u8bf4\u6700\u8fd1\u4e0d\u662f\u53c8\u7529\u9505\u4e86\uff0c\u628a\u81ea\u5df1\u7684\u9769\u547d\u8001\u6839\u636e\u5730\u90fd\u7529\u4e86\u3002 Eruda\u662f\u4ec0\u4e48\uff1fEruda \u662f\u4e00\u4e2a\u4e13\u4e3a\u524d\u7aef\u79fb\u52a8\u7aef\u3001\u79fb\u52a8\u7aef\u8bbe\u8ba1\u7684\u8c03\u8bd5\u9762\u677f\uff0c\u7c7b\u4f3cChrome DevTools \u7684\u8ff7\u4f60\u7248\uff08\u6ca1\u6709chrome\u5f3a\u5927 \u8fd9\u4e2a\u662f\u53ef\u4ee5\u80af\u5b9a\u2026",
              title:
                "Eruda \u4e00\u4e2a\u88ab\u4eba\u9057\u5fd8\u7684\u8c03\u8bd5\u795e\u5668",
              lastCommentTime: "2018-12-18T07:26:35.357Z",
              type: "post",
              english: false,
              category: {
                ngxCached: true,
                title: "frontend",
                id: "5562b415e4b00c57d9b94ac8",
                name: "\u524d\u7aef",
                ngxCachedTime: 1545097169
              },
              viewsCount: 2734,
              summaryInfo:
                "\u2003\u2003\u65e5\u5e38\u5de5\u4f5c\u4e2d\u518d\u725b\u903c\u7684\u5927\u4f6c\u90fd\u4e0d\u6562\u8bf4\u81ea\u5df1\u7684\u4ee3\u7801\u662f\u5b8c\u5168\u6ca1\u6709\u95ee\u9898\u7684\uff0c\u65e2\u7136\u6709\u95ee\u9898\uff0c\u90a3\u5c31\u4e5f\u5c31\u6709\u8c03\u8bd5\uff0c\u8bf4\u5230\u8c03\u8bd5\u5de5\u5177\uff0c\u5927\u5bb6\u53ef\u80fd\u5bf9\u4e8e FIDDLER\u3001CHARLES\u3001CHROME DEVTOOLS\u3001FIREBUG\u3001\u8fd8\u6709Safari\u8fdc\u7a0b\u8c03\u8bd5\u7b49\u6bd4\u8f83\u719f\u6089\uff0c\u751a\u81f3\u6709\u4e9b\u662f\u6211\u53ef\u80fd\u4e5f\u6ca1\u6709\u7528\u8fc7\u7684\uff1b \u2003\u2003\u8fd9\u91cc\u55b7\u4e00\u53e5\u5427\uff0c\u8c01\u90fd\u522b\u7ed9\u6211\u63d0I...",
              isCollected: false
            },
            {
              collectionCount: 113,
              isEvent: false,
              commentsCount: 25,
              gfw: false,
              buildTime: 1545097243.7644,
              checkStatus: true,
              objectId: "5c1744a26fb9a049cd541aee",
              entryView: "",
              subscribersCount: 0,
              ngxCachedTime: 1545097246,
              verifyStatus: true,
              tags: [
                {
                  ngxCachedTime: 1545097232,
                  ngxCached: true,
                  title: "CSS",
                  id: "555eadc1e4b00c57d9962402"
                },
                {
                  ngxCachedTime: 1545097157,
                  ngxCached: true,
                  title: "\u524d\u7aef",
                  id: "5597a05ae4b08a686ce56f6f"
                }
              ],
              updatedAt: "2018-12-18T01:40:43.763Z",
              rankIndex: 15.897053012919,
              hot: false,
              autoPass: true,
              originalUrl: "https://juejin.im/post/5c171f0ef265da61553abade",
              verifyCreatedAt: "2018-12-17T06:39:30.871Z",
              createdAt: "2018-12-17T06:39:30.871Z",
              user: {
                community: null,
                collectedEntriesCount: 32,
                company:
                  "\u77e5\u9053\u521b\u5b87\u524d\u7aef\u56e2\u961f\uff08KnownsecFED\uff09",
                followersCount: 7301,
                followeesCount: 3,
                role: "editor",
                postedPostsCount: 56,
                isAuthor: false,
                postedEntriesCount: 0,
                totalCommentsCount: 195,
                ngxCachedTime: 1545097237,
                ngxCached: true,
                viewedEntriesCount: 1094,
                jobTitle: "",
                subscribedTagsCount: 15,
                totalCollectionsCount: 4813,
                username: "\u521b\u5b87\u524d\u7aef",
                avatarLarge:
                  "https://user-gold-cdn.xitu.io/2018/1/5/160c5560ed38028a?w=500&h=500&f=png&s=67401",
                objectId: "5a4f2e8b6fb9a01c9e45c33b"
              },
              author: "",
              screenshot:
                "https://user-gold-cdn.xitu.io/2018/12/17/167bae3c86843fc4?w=1200&h=600&f=jpeg&s=47989",
              original: true,
              hotIndex: 3669.7259,
              content:
                "4. \u5b8c\u6574\u4ee3\u7801\uff1a\u5143\u7d20\u5bbd\u5ea6\u5df2\u77e5\uff0c\u6240\u6709\u5143\u7d20\u90fd\u5728\u4e00\u4e2a\u5bb9\u5668 \u672c\u6587\u7531\u521b\u5b87\u524d\u7aef\u4f5c\u8005\u6388\u6743\u53d1\u5e03\uff0c\u7248\u6743\u5c5e\u4e8e\u4f5c\u8005\uff0c\u521b\u5b87\u524d\u7aef\u51fa\u54c1\u3002\u6587\u7ae0\u94fe\u63a5\uff1ahttps://knownsec-fed.com/2018-12-13-css-lie-biao-xiang-bu-ju-ji-qiao/ \u60f3\u8981\u8ba2\u9605\u66f4\u591a\u6765\u81ea\u77e5\u9053\u2026",
              title:
                "\u4e0d\u6015\u4f60\u7528\u4e0d\u4e0a\uff01CSS \u5217\u8868\u9879\u5e03\u5c40\u6280\u5de7",
              lastCommentTime: "2018-12-18T09:22:27.321Z",
              type: "post",
              english: false,
              category: {
                ngxCached: true,
                title: "frontend",
                id: "5562b415e4b00c57d9b94ac8",
                name: "\u524d\u7aef",
                ngxCachedTime: 1545097169
              },
              viewsCount: 2412,
              summaryInfo:
                "\u5728\u5f00\u53d1\u4e2d\u6211\u4eec\u7ecf\u5e38\u4f1a\u9047\u5230\u5173\u4e8e\u5982\u4f55\u5c55\u793a\u5217\u8868\u7684\u95ee\u9898\uff0c\u4f8b\u5982\uff1a \u4e3a\u4e86\u8ba9\u5176\u770b\u8d77\u6765\u66f4\u52a0\u8212\u9002\u7f8e\u89c2\uff0c\u901a\u5e38\u6211\u4eec\u4f1a\u5728\u6bcf\u4e2a\u5217\u8868\u9879\u4e0a\u6dfb\u52a0 \u548c \u5c5e\u6027\u6765\u9694\u5f00\u5b83\u4eec\uff0c\u7136\u540e\u4e00\u884c\u8d85\u8fc7\u5bb9\u5668\u957f\u5ea6\u540e\u8fdb\u884c\u6362\u884c \u90a3\u4e48\u5728\u5404\u79cd\u60c5\u51b5\u4e0b\uff0c\u5982\u4f55\u5904\u7406\u5217\u8868\u9879\u4e2d\u548c\uff0c\u8ba9\u5217\u8868\u95f4\u9694\u548c\u6362\u884c\u770b\u8d77\u6765\u66f4\u52a0\u81ea\u7136\u7f8e\u89c2\u662f\u672c\u7bc7\u7684\u91cd\u70b9 \u5143\u7d20\u5bbd\u5ea6\u5df2\u77e5\uff0c\u5373\u77e5\u9053\u6bcf\u884c\u6700\u591a\u591a\u5c11\u4e2a\uff0c\u4e14\u6240\u6709\u5143\u7d20\u90fd...",
              isCollected: false
            },
            {
              collectionCount: 56,
              isEvent: false,
              commentsCount: 1,
              gfw: false,
              buildTime: 1545097243.8432,
              checkStatus: true,
              objectId: "5c177ce06fb9a04a0e2d1bca",
              entryView: "",
              subscribersCount: 0,
              ngxCachedTime: 1545097246,
              verifyStatus: true,
              tags: [
                {
                  ngxCachedTime: 1545097232,
                  ngxCached: true,
                  title: "React.js",
                  id: "555e99ffe4b00c57d99556aa"
                },
                {
                  ngxCachedTime: 1545097135,
                  ngxCached: true,
                  title: "\u524d\u7aef\u6846\u67b6",
                  id: "55978433e4b0c4d3e6fddcb1"
                }
              ],
              updatedAt: "2018-12-18T01:40:43.842Z",
              rankIndex: 9.587642575744,
              hot: false,
              autoPass: true,
              originalUrl: "https://juejin.im/post/5c177be0f265da616a4791aa",
              verifyCreatedAt: "2018-12-17T10:39:28.869Z",
              createdAt: "2018-12-17T10:39:28.869Z",
              user: {
                community: {
                  weibo: {
                    selfDescription:
                      "\u8bb2\u6cd5\u8bed\u7684\u4e8c\u7ea7\u8fd0\u52a8\u5458\u4e5f\u662f\u524d\u7aef\uff08ma\uff09\u5de5\u7a0b\u5e08\uff08nong\uff09\uff5e",
                    uid: "2823504824",
                    blogAddress: "http://weibo.com/u/2823504824",
                    username: "LucasHC",
                    avatarLarge:
                      "http://tva2.sinaimg.cn/crop.0.0.750.750.180/a84b43b8jw8f17d8gff0uj20ku0kvwgm.jpg"
                  },
                  wechat: {
                    avatarLarge:
                      "http://thirdwx.qlogo.cn/mmopen/vi_32/lOAplQmuX8Zia9byGbichBMqmFXJ5SVotDfRDL2GLgmxXHJF2j99CxfpV45yxHhfjdzSgCbXFnyn4Olq0SBJbzcw/132"
                  }
                },
                collectedEntriesCount: 44,
                company: "\u767e\u5ea6\u77e5\u8bc6\u641c\u7d22\u90e8",
                followersCount: 7013,
                followeesCount: 1,
                role: "editor",
                postedPostsCount: 37,
                isAuthor: true,
                postedEntriesCount: 6,
                totalCommentsCount: 232,
                ngxCachedTime: 1545097237,
                ngxCached: true,
                viewedEntriesCount: 8368,
                jobTitle: "\u524d\u7aef\u5de5\u7a0b\u5e08",
                subscribedTagsCount: 24,
                totalCollectionsCount: 4632,
                username: "LucasHC",
                avatarLarge:
                  "https://user-gold-cdn.xitu.io/2016/11/29/efff8bb4ab905084ea86b268cf89784e",
                objectId: "58305395a22b9d006b83d214"
              },
              author: "",
              screenshot: "",
              original: true,
              hotIndex: 1499.8046,
              content:
                "\u5bf9\u4e8e\u524d\u7aef\u8d44\u8baf\u6bd4\u8f83\u654f\u611f\u7684\u540c\u5b66\uff0c\u53ef\u80fd\u8fd9\u4e24\u5929\u5df2\u7ecf\u542c\u8bf4\u4e86 GoogleChromeLabs/quicklink \u8fd9\u4e2a\u9879\u76ee\uff1a\u5b83\u7531 Google \u516c\u53f8\u8457\u540d\u5f00\u53d1\u8005 Addy Osmani \u53d1\u8d77\uff0c\u5b9e\u73b0\u4e86\uff1a\u5728\u7a7a\u95f2\u65f6\u95f4\u9884\u83b7\u53d6\u9875\u9762\u53ef\u89c6\u533a\u57df\u5185\u7684\u94fe\u63a5\uff0c\u52a0\u5feb\u540e\u7eed\u52a0\u8f7d\u901f\u5ea6\u3002 \u5982\u679c\u4f60\u6ca1\u6709\u542c\u8bf4\u8fc7 Addy Os\u2026",
              title:
                "\u7ed3\u5408 Google quicklink\uff0creact \u9879\u76ee\u5b9e\u73b0\u9875\u9762\u79d2\u5f00",
              lastCommentTime: "2018-12-18T08:21:45.134Z",
              type: "post",
              english: false,
              category: {
                ngxCached: true,
                title: "frontend",
                id: "5562b415e4b00c57d9b94ac8",
                name: "\u524d\u7aef",
                ngxCachedTime: 1545097169
              },
              viewsCount: 932,
              summaryInfo:
                "\u5bf9\u4e8e\u524d\u7aef\u8d44\u8baf\u6bd4\u8f83\u654f\u611f\u7684\u540c\u5b66\uff0c\u53ef\u80fd\u8fd9\u4e24\u5929\u5df2\u7ecf\u542c\u8bf4\u4e86 GOOGLECHROMELABS/QUICKLINK \u8fd9\u4e2a\u9879\u76ee\uff1a\u5b83\u7531 Google \u516c\u53f8\u8457\u540d\u5f00\u53d1\u8005 Addy Osmani \u53d1\u8d77\uff0c\u5b9e\u73b0\u4e86\uff1a\u5728\u7a7a\u95f2\u65f6\u95f4\u9884\u83b7\u53d6\u9875\u9762\u53ef\u89c6\u533a\u57df\u5185\u7684\u94fe\u63a5\uff0c\u52a0\u5feb\u540e\u7eed\u52a0\u8f7d\u901f\u5ea6\u3002 \u5982\u679c\u4f60\u6ca1\u6709\u542c\u8bf4\u8fc7 Addy Osmani \u5927\u795e\u7684\u540d\u53f7...",
              isCollected: false
            },
            {
              collectionCount: 2369,
              isEvent: false,
              commentsCount: 467,
              gfw: false,
              buildTime: 1545097243.5138,
              checkStatus: true,
              objectId: "5c11c080e51d4536ee0b92fb",
              entryView: "",
              subscribersCount: 0,
              ngxCachedTime: 1545097246,
              verifyStatus: true,
              tags: [
                {
                  ngxCachedTime: 1545097186,
                  ngxCached: true,
                  title: "Vue.js",
                  id: "555e9a98e4b00c57d9955f68"
                },
                {
                  ngxCachedTime: 1545097187,
                  ngxCached: true,
                  title: "Flutter",
                  id: "5a96291f6fb9a0535b535438"
                },
                {
                  ngxCachedTime: 1545097157,
                  ngxCached: true,
                  title: "\u524d\u7aef",
                  id: "5597a05ae4b08a686ce56f6f"
                }
              ],
              updatedAt: "2018-12-18T01:40:43.512Z",
              rankIndex: 8.8414076993755,
              hot: false,
              autoPass: true,
              originalUrl: "https://juejin.im/post/5c11bf145188252704368b98",
              verifyCreatedAt: "2018-12-13T02:14:24.664Z",
              createdAt: "2018-12-13T02:14:24.664Z",
              user: {
                community: {
                  wechat: {
                    avatarLarge:
                      "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83ep6GBTbXFlTYicsowpHc8yCp790vQMH28mAd1PDjwR6h8QH5dOvc2D5Kt3AIDO6qlZsrbXu9piaYQjg/132"
                  }
                },
                collectedEntriesCount: 79,
                company: "",
                followersCount: 9356,
                followeesCount: 43,
                role: "editor",
                postedPostsCount: 11,
                isAuthor: true,
                postedEntriesCount: 16,
                totalCommentsCount: 1239,
                ngxCachedTime: 1545097243,
                ngxCached: true,
                viewedEntriesCount: 1696,
                jobTitle: "\u7a0b\u5e8f\u5458",
                subscribedTagsCount: 24,
                totalCollectionsCount: 15721,
                username: "\u6280\u672f\u80d6",
                avatarLarge:
                  "https://user-gold-cdn.xitu.io/2018/1/7/160cf1a8d473fc00?w=1242&h=1242&f=png&s=1088612",
                objectId: "5875dfc7a22b9d0058a96d06"
              },
              author: "",
              screenshot: "",
              original: true,
              hotIndex: 49586.3985,
              content:
                "2018\u8fd8\u6709\u5341\u51e0\u5929\u5c31\u8981\u8fc7\u5b8c\u4e86\uff0c\u6211\u89c9\u7684\u8fd9\u4e00\u5e74\u6211\u7684\u6210\u957f\u5e76\u4e0d\u662f\u5f88\u5feb\uff0c\u6709\u5f88\u591a2018\u65b0\u5e74\u8bb8\u7684\u613f\u671b\u90fd\u6ca1\u6709\u8fbe\u6210\u3002\u8fd9\u7bc7\u6587\u7ae0\u7b97\u62112018\u5e74\u7684\u4e00\u4e2a\u603b\u7ed3\u5427\uff01 \u5728\u8fd9\u5c81\u672b\u8fce\u65b0\u7684\u65f6\u5019\uff0c\u628a\u6240\u6709\u7684\u89c6\u9891\u9001\u7ed9\u4f60\uff0c\u5e0c\u671b\u4f60\u53ef\u4ee5\u57282019\u5e74\uff0c\u65e0\u8bba\u662f\u5b66\u4e60\u8fd8\u662f\u5de5\u4f5c\u90fd\u6709\u6240\u8fdb\u6b65\u3002 \u6709\u5f88\u591a\u4eba\u95ee\u6211\u4e3a\u4ec0\u4e48\u8981\u5f55\u5236\u8fd9\u4e48\u591a\u514d\u8d39\u89c6\u9891\uff0c\u662f\u4e0d\u2026",
              title:
                "\u65b0\u5e74\u732e\u793c \u6280\u672f\u80d6262\u96c6\u524d\u7aef\u514d\u8d39\u89c6\u9891 \u8ba9\u60a8\u8d70\u7684\u66f4\u5bb9\u6613\u4e9b",
              lastCommentTime: "2018-12-18T09:36:57.471Z",
              type: "post",
              english: false,
              category: {
                ngxCached: true,
                title: "frontend",
                id: "5562b415e4b00c57d9b94ac8",
                name: "\u524d\u7aef",
                ngxCachedTime: 1545097169
              },
              viewsCount: 23559,
              summaryInfo:
                "2018\u8fd8\u6709\u5341\u51e0\u5929\u5c31\u8981\u8fc7\u5b8c\u4e86\uff0c\u6211\u89c9\u7684\u8fd9\u4e00\u5e74\u6211\u7684\u6210\u957f\u5e76\u4e0d\u662f\u5f88\u5feb\uff0c\u6709\u5f88\u591a2018\u65b0\u5e74\u8bb8\u7684\u613f\u671b\u90fd\u6ca1\u6709\u8fbe\u6210\u3002\u8fd9\u7bc7\u6587\u7ae0\u7b97\u62112018\u5e74\u7684\u4e00\u4e2a\u603b\u7ed3\u5427\uff01 \u5728\u8fd9\u5c81\u672b\u8fce\u65b0\u7684\u65f6\u5019\uff0c\u628a\u6240\u6709\u7684\u89c6\u9891\u9001\u7ed9\u4f60\uff0c\u5e0c\u671b\u4f60\u53ef\u4ee5\u57282019\u5e74\uff0c\u65e0\u8bba\u662f\u5b66\u4e60\u8fd8\u662f\u5de5\u4f5c\u90fd\u6709\u6240\u8fdb\u6b65\u3002 \u6709\u5f88\u591a\u4eba\u95ee\u6211\u4e3a\u4ec0\u4e48\u8981\u5f55\u5236\u8fd9\u4e48\u591a\u514d\u8d39\u89c6\u9891\uff0c\u662f\u4e0d\u662f\u6709\u4ec0\u4e48\u5927\u9634\u8c0b\u3002 \u6211...",
              isCollected: false
            },
            {
              collectionCount: 65,
              isEvent: false,
              commentsCount: 28,
              gfw: false,
              buildTime: 1545097204.122,
              checkStatus: true,
              objectId: "5c16dfa151882542026d8b83",
              entryView: "",
              subscribersCount: 0,
              ngxCachedTime: 1545097246,
              verifyStatus: true,
              tags: [
                {
                  ngxCachedTime: 1545097173,
                  ngxCached: true,
                  title: "Chrome",
                  id: "555e9ae0e4b00c57d99562ee"
                },
                {
                  ngxCachedTime: 1545097157,
                  ngxCached: true,
                  title: "\u524d\u7aef",
                  id: "5597a05ae4b08a686ce56f6f"
                }
              ],
              updatedAt: "2018-12-18T01:40:04.120Z",
              rankIndex: 8.7201264749707,
              hot: false,
              autoPass: true,
              originalUrl: "https://juejin.im/post/5c16d943518825566d2365f3",
              verifyCreatedAt: "2018-12-16T23:28:33.942Z",
              createdAt: "2018-12-16T23:28:33.942Z",
              user: {
                community: null,
                collectedEntriesCount: 42,
                company: "DAN",
                followersCount: 736,
                followeesCount: 42,
                role: "editor",
                postedPostsCount: 14,
                isAuthor: false,
                postedEntriesCount: 2,
                totalCommentsCount: 146,
                ngxCachedTime: 1545097193,
                ngxCached: true,
                viewedEntriesCount: 2617,
                jobTitle: "\u524d\u7aef\u5f00\u53d1\u5de5\u7a0b\u5e08",
                subscribedTagsCount: 41,
                totalCollectionsCount: 1413,
                username: "dendoink",
                avatarLarge:
                  "https://user-gold-cdn.xitu.io/2018/12/7/167894ca7f2653e5?w=584&h=584&f=jpeg&s=269083",
                objectId: "585a2f52128fe10069ba1b95"
              },
              author: "",
              screenshot:
                "https://user-gold-cdn.xitu.io/2018/12/17/167b95936844972a?w=2000&h=865&f=jpeg&s=345811",
              original: true,
              hotIndex: 3450.0494,
              content:
                "\u672c\u6587\u662f\u4f5c\u8005 Tomek Su\u0142kowski \u53d1\u5e03\u5728 medium \u4e0a\u7684\u4e00\u4e2a\u7cfb\u5217\u3002\u636e\u4f5c\u8005\u900f\u9732\u4e00\u5171\u6709 24 \u7bc7\uff0c\u4e00\u76f4\u66f4\u65b0\u5230 12 \u6708 24 \u65e5 \u7248\u6743\u5f52\u539f\u4f5c\u8005\u6240\u6709\u3002 \u8bd1\u8005\u5728\u7ffb\u8bd1\u524d\u5df2\u7ecf\u548c\u4f5c\u8005\u6c9f\u901a\u5f97\u5230\u4e86\u7ffb\u8bd1\u6574\u4e2a\u7cfb\u5217\u7684\u6388\u6743\u3002 \u5728\u9a6c\u4e0a\u5c31\u8981\u8fce\u6765\u5047\u671f\u7684\u8fd9 24 \u5929\u91cc\uff0c\u6211\u5c06\u4f1a\u53d1\u5e03\u4e00\u7cfb\u5217\u77ed\u7bc7\u7684\u6587\u7ae0\uff0c\u2026",
              title:
                "\u3010\u8bd1\u3011\u4f60\u4e0d\u77e5\u9053\u7684 Chrome \u8c03\u8bd5\u5de5\u5177\u6280\u5de7 \u7b2c\u5341\u4e8c\u5929\uff1a\u5fcd\u8005\u65e5\u5fd7\u6253\u5370\uff01(the ninja logs)",
              lastCommentTime: "2018-12-18T09:15:38.238Z",
              type: "post",
              english: false,
              category: {
                ngxCached: true,
                title: "frontend",
                id: "5562b415e4b00c57d9b94ac8",
                name: "\u524d\u7aef",
                ngxCachedTime: 1545097169
              },
              viewsCount: 2658,
              summaryInfo:
                "\u672c\u6587\u662f\u4f5c\u8005 Tomek Su\u0142kowski \u53d1\u5e03\u5728 medium \u4e0a\u7684\u4e00\u4e2a\u7cfb\u5217\u3002\u636e\u4f5c\u8005\u900f\u9732\u4e00\u5171\u6709 24 \u7bc7\uff0c\u4e00\u76f4\u66f4\u65b0\u5230 12 \u6708 24 \u65e5\u7248\u6743\u5f52\u539f\u4f5c\u8005\u6240\u6709\u3002 \u4f5c\u8005\u5728TWITTER\u4e0a\u63a8\u8350\u6211\u4eec\u7684\u4e2d\u6587\u7ffb\u8bd1\u5566,\u622a\u56fe\u5728\u6700\u540e \u8bd1\u8005\u5728\u7ffb\u8bd1\u524d\u5df2\u7ecf\u548c\u4f5c\u8005\u6c9f\u901a\u5f97\u5230\u4e86\u7ffb\u8bd1\u6574\u4e2a\u7cfb\u5217\u7684\u6388\u6743\u3002\u4e3a\u4e86\u4e0d\u5f71\u54cd\u5927\u5bb6\u9605\u8bfb\uff0c\u6388\u6743\u7684\u8bb0\u5f55\u5728...",
              isCollected: false
            },
            {
              collectionCount: 215,
              isEvent: false,
              commentsCount: 45,
              gfw: false,
              buildTime: 1545097240.0075,
              checkStatus: true,
              objectId: "5c15ddc86fb9a049ea38d94d",
              entryView: "",
              subscribersCount: 0,
              ngxCachedTime: 1545097246,
              verifyStatus: true,
              tags: [
                {
                  ngxCachedTime: 1545097213,
                  ngxCached: true,
                  title: "JavaScript",
                  id: "55964d83e4b08a686cc6b353"
                }
              ],
              updatedAt: "2018-12-18T01:40:40.006Z",
              rankIndex: 8.2499579799159,
              hot: false,
              autoPass: true,
              originalUrl: "https://juejin.im/post/5c15dc47e51d457b00691be5",
              verifyCreatedAt: "2018-12-16T05:08:24.122Z",
              createdAt: "2018-12-16T05:08:24.122Z",
              user: {
                community: {
                  github: {
                    username: "BlackGoldTeam",
                    avatarLarge:
                      "https://avatars0.githubusercontent.com/u/45186855?v=4",
                    uid: "45186855"
                  }
                },
                collectedEntriesCount: 3,
                company: "BGT",
                followersCount: 748,
                followeesCount: 0,
                role: "editor",
                postedPostsCount: 18,
                isAuthor: false,
                postedEntriesCount: 0,
                totalCommentsCount: 129,
                ngxCachedTime: 1545097228,
                ngxCached: true,
                viewedEntriesCount: 406,
                jobTitle: "\u524d\u7aef\u653b\u57ce\u72ee",
                subscribedTagsCount: 9,
                totalCollectionsCount: 1984,
                username: "\u9ed1\u91d1\u56e2\u961f",
                avatarLarge:
                  "https://user-gold-cdn.xitu.io/2018/11/20/1672eb8c1516542c?w=506&h=506&f=jpeg&s=44198",
                objectId: "5bf35ffa6fb9a049f23c5bb3"
              },
              author: "",
              screenshot: "",
              original: true,
              hotIndex: 8140.8923,
              content:
                "look\uff0c\u5f53hasMoney\u4e3atrue\u7684\u65f6\u5019\uff0c\u55e8\u7ffb\u5929\uff0c\u4e3afalse\u7684\u65f6\u5019\u7684\u7761\u4e00\u5929\u3002\u8fd9\u79cd\u64cd\u4f5c\u7b26\u5728\u6211\u4eec\u7684\u6839\u636e\u7b80\u5355\u7684\u5224\u65ad\u6761\u4ef6\u8d4b\u503c\u7684\u65f6\u5019\u975e\u5e38\u6709\u7528 \u5982\u6b64\uff0c\u6211\u4eec\u7684\u4ee3\u7801\u5c31\u4e0d\u4f1a\u5145\u65a5\u7740\u5927\u91cf\u7684if\u5224\u65ad\u6761\u4ef6\u53e5\uff0c\u8fd8\u80fd\u7565\u663e\u9a9a\u6c14\u3002\u4f46\u662f\uff0c\u522b\u9a9a\u8fc7\u5ea6\u4e86 \u4e0a\u9762\u7684\u4f8b\u5b50\u6709\u70b9\u4e3a\u4e86\u88c5\u903c\u800c\u88c5\u903c\u7684\u611f\u89c9\uff0c\u5728\u4ee3\u7801\u53ef\u8bfb\u6027\u65b9\u9762\u6709\u70b9\u7cdf\u2026",
              title: "JavaScript\u9a9a\u64cd\u4f5c\u4e4b\u64cd\u4f5c\u7b26",
              lastCommentTime: "2018-12-18T09:22:09.156Z",
              type: "post",
              english: false,
              category: {
                ngxCached: true,
                title: "frontend",
                id: "5562b415e4b00c57d9b94ac8",
                name: "\u524d\u7aef",
                ngxCachedTime: 1545097169
              },
              viewsCount: 5763,
              summaryInfo:
                "\u6bcf\u5230\u5468\u672b\u6211\u90fd\u4f1a\u95ee\u81ea\u5df1\uff0c\u600e\u4e48\u5b89\u6392\uff1f\u4e8e\u662f\u6211\u5199\u4e86\u4e2a\u7a0b\u5e8f\u8dd1\u4e86\u4e00\u4e0b \u770b\u4e0a\u53bb\u6ca1\u6709\u4ec0\u4e48\u95ee\u9898\uff0c\u4f46\u603b\u611f\u89c9\u4ee3\u7801\u6709\u70b9\u81c3\u80bf\uff0c\u80fd\u4e0d\u80fd\u7a0d\u5fae\u7b80\u7ea6\u4e00\u70b9\uff1f look\uff0c\u5f53hasMoney\u4e3atrue\u7684\u65f6\u5019\uff0c\u55e8\u7ffb\u5929\uff0c\u4e3afalse\u7684\u65f6\u5019\u7684\u7761\u4e00\u5929\u3002\u8fd9\u79cd\u64cd\u4f5c\u7b26\u5728\u6211\u4eec\u7684\u6839\u636e\u7b80\u5355\u7684\u5224\u65ad\u6761\u4ef6\u8d4b\u503c\u7684\u65f6\u5019\u975e\u5e38\u6709\u7528 \u5982\u6b64\uff0c\u6211\u4eec\u7684\u4ee3\u7801\u5c31\u4e0d\u4f1a\u5145\u65a5\u7740\u5927\u91cf\u7684if...",
              isCollected: false
            },
            {
              collectionCount: 19,
              isEvent: false,
              commentsCount: 16,
              gfw: false,
              buildTime: 1545097242.7521,
              checkStatus: true,
              objectId: "5c1610246fb9a04a0d56c016",
              entryView: "",
              subscribersCount: 0,
              ngxCachedTime: 1545097246,
              verifyStatus: true,
              tags: [
                {
                  ngxCachedTime: 1545097135,
                  ngxCached: true,
                  title: "\u524d\u7aef\u6846\u67b6",
                  id: "55978433e4b0c4d3e6fddcb1"
                }
              ],
              updatedAt: "2018-12-18T01:40:42.750Z",
              rankIndex: 7.8947143275238,
              hot: false,
              autoPass: false,
              originalUrl: "https://juejin.im/post/5c160f69e51d4529355b89c8",
              verifyCreatedAt: "2018-12-17T02:55:23.312Z",
              createdAt: "2018-12-17T02:55:23.312Z",
              user: {
                community: {
                  weibo: {
                    selfDescription:
                      "web\u524d\u7aef\u5de5\u7a0b\u5e08\u2026\u2026\u559c\u6b22\u767d\u889c\uff0c\u5076\u5c14\u505a\u89c6\u9891\uff0c\u4e00\u4e2a\u9a9a\u6c14\u6ee1\u6ee1\u7684\u8bf1\u53d7~",
                    uid: "5585347948",
                    blogAddress: "http://weibo.com/oreshura",
                    username:
                      "\u4e16\u754c\u5012\u6570\u7b2c\u4e00\u516c\u4e3b\u6bbf\u4e0b",
                    avatarLarge:
                      "http://tvax4.sinaimg.cn/crop.0.78.1422.1422.180/0065Zy9ely8fve0dvwdwnj31401z4b29.jpg"
                  },
                  github: {
                    username: "132yse",
                    avatarLarge:
                      "https://avatars3.githubusercontent.com/u/12951461?v=4",
                    uid: "12951461"
                  }
                },
                collectedEntriesCount: 8,
                company: "",
                followersCount: 15,
                followeesCount: 25,
                role: "guest",
                postedPostsCount: 5,
                isAuthor: false,
                postedEntriesCount: 0,
                totalCommentsCount: 21,
                ngxCachedTime: 1545097196,
                ngxCached: true,
                viewedEntriesCount: 256,
                jobTitle: "web\u524d\u7aef",
                subscribedTagsCount: 1,
                totalCollectionsCount: 58,
                username: "132",
                avatarLarge:
                  "https://user-gold-cdn.xitu.io/2018/11/5/166e23891f3ad87f?w=1440&h=2560&f=jpeg&s=1464065",
                objectId: "5b0bb58af265da08f90f5dcf"
              },
              author: "",
              screenshot:
                "https://user-gold-cdn.xitu.io/2018/12/16/167b62e84cfacee2?w=871&h=421&f=png&s=30815",
              original: true,
              hotIndex: 2461.7146,
              content:
                "\u6700\u5148\u770b\u5230\u7684\u5e94\u8be5\u662f hooks\u3002 \u867d\u7136\u548c react \u7684 hooks \u5e76\u4e0d\u4e00\u6837\uff0cfre \u7684 hooks \u662f\u901a\u8fc7 Proxy \u52ab\u6301\u5b9e\u73b0\u7684\uff0creact \u662f\u901a\u8fc7\u4e24\u4e2a\u6570\u7ec4\u5bf9\u5e94\u5b9e\u73b0\u7684\u3002 \u6ca1\u9519\uff0cfre \u5c31\u662f\u56e0\u4e3a\u6709\u4e86 hooks \u624d\u5199\u7684\uff0chooks \u4f7f\u5f97 function \u5177\u6709\u4e86\u72b6\u6001\uff0c\u5176\u5b9e\u662f\u53e6\u2026",
              title:
                "Fre\uff1a\u53c8\u4e00\u4e2a\u5c0f\u800c\u7f8e\u7684\u524d\u7aefMVVM\u6846\u67b6",
              lastCommentTime: "2018-12-18T08:58:58.612Z",
              type: "post",
              english: false,
              category: {
                ngxCached: true,
                title: "frontend",
                id: "5562b415e4b00c57d9b94ac8",
                name: "\u524d\u7aef",
                ngxCachedTime: 1545097169
              },
              viewsCount: 2189,
              summaryInfo:
                "halo\uff0c\u5927\u5bb6\u597d\uff0c\u597d\u4e45\u4e0d\u8d31\u5462\uff01 \u6700\u8fd1\u56e0\u4e3a\u770b\u4e86\u4e00\u4e9b be \u7684\u5c0f\u8bf4\uff0c",
              isCollected: false
            },
            {
              collectionCount: 67,
              isEvent: false,
              commentsCount: 7,
              gfw: false,
              buildTime: 1545097236.4651,
              checkStatus: true,
              objectId: "5c161108f265da614c4cb18e",
              entryView: "",
              subscribersCount: 0,
              ngxCachedTime: 1545097246,
              verifyStatus: true,
              tags: [
                {
                  ngxCachedTime: 1545097213,
                  ngxCached: true,
                  title: "JavaScript",
                  id: "55964d83e4b08a686cc6b353"
                }
              ],
              updatedAt: "2018-12-18T01:40:36.464Z",
              rankIndex: 7.3659308434678,
              hot: false,
              autoPass: false,
              originalUrl: "https://juejin.im/post/5c1610cae51d455c627a967e",
              verifyCreatedAt: "2018-12-17T03:09:58.425Z",
              createdAt: "2018-12-17T03:09:58.425Z",
              user: {
                community: null,
                collectedEntriesCount: 38,
                company: "",
                followersCount: 11,
                followeesCount: 42,
                role: "guest",
                postedPostsCount: 3,
                isAuthor: false,
                postedEntriesCount: 0,
                totalCommentsCount: 13,
                ngxCachedTime: 1545097236,
                ngxCached: true,
                viewedEntriesCount: 406,
                jobTitle: "\u524d\u7aef\u5f00\u53d1",
                subscribedTagsCount: 12,
                totalCollectionsCount: 88,
                username: "\u5634\u91cc\u8d77\u4e86\u4e2a\u6ce1",
                avatarLarge:
                  "https://user-gold-cdn.xitu.io/2018/5/23/1638ac8e7af35bad?w=368&h=640&f=jpeg&s=16687",
                objectId: "5ad9a52651882567336a47ea"
              },
              author: "",
              screenshot: "",
              original: true,
              hotIndex: 2255.4267,
              content:
                "\u9879\u76ee\u4e2d\u7ecf\u5e38\u4f1a\u9047\u5230\u9700\u8981\u5bfc\u51fa\u5217\u8868\u5185\u5bb9\uff0c\u6216\u8005\u4e0b\u8f7d\u6587\u4ef6\u4e4b\u7c7b\u7684\u9700\u6c42\u3002\u7ed3\u5408\u5404\u79cd\u60c5\u51b5\uff0c\u6211\u603b\u7ed3\u4e86\u524d\u7aef\u6700\u5e38\u7528\u7684\u4e09\u79cd\u65b9\u6cd5\u6765\u63a5\u53d7\u540e\u7aef\u4f20\u8fc7\u6765\u7684\u6587\u4ef6\u6d41\u5e76\u4e0b\u8f7d\uff0c\u9488\u5bf9\u4e0d\u540c\u7684\u60c5\u51b5\u53ef\u4ee5\u4f7f\u7528\u4e0d\u540c\u7684\u65b9\u6cd5\u3002 \u5982\u679c\u540e\u7aef\u63d0\u4f9b\u7684\u4e0b\u8f7d\u63a5\u53e3\u662fget\u7c7b\u578b\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u65b9\u6cd5\u4e00\uff0c\u7b80\u5355\u53c8\u4fbf\u6377\uff1b\u5f53\u7136\u5982\u679c\u60f3\u4f7f\u7528\u65b9\u6cd5\u4e8c\u3001\u4e09\u4e5f\u662f\u53ef\u4ee5\u7684\uff0c\u4e0d\u8fc7\u611f\u2026",
              title:
                "\u524d\u7aef\u63a5\u53d7\u540e\u7aef\u6587\u4ef6\u6d41\u5e76\u4e0b\u8f7d\u7684\u51e0\u79cd\u65b9\u6cd5",
              lastCommentTime: "2018-12-18T09:21:40.396Z",
              type: "post",
              english: false,
              category: {
                ngxCached: true,
                title: "frontend",
                id: "5562b415e4b00c57d9b94ac8",
                name: "\u524d\u7aef",
                ngxCachedTime: 1545097169
              },
              viewsCount: 1548,
              summaryInfo:
                "\u9879\u76ee\u4e2d\u7ecf\u5e38\u4f1a\u9047\u5230\u9700\u8981\u5bfc\u51fa\u5217\u8868\u5185\u5bb9\uff0c\u6216\u8005\u4e0b\u8f7d\u6587\u4ef6\u4e4b\u7c7b\u7684\u9700\u6c42\u3002\u7ed3\u5408\u5404\u79cd\u60c5\u51b5\uff0c\u6211\u603b\u7ed3\u4e86\u524d\u7aef\u6700\u5e38\u7528\u7684\u4e09\u79cd\u65b9\u6cd5\u6765\u63a5\u53d7\u540e\u7aef\u4f20\u8fc7\u6765\u7684\u6587\u4ef6\u6d41\u5e76\u4e0b\u8f7d\uff0c\u9488\u5bf9\u4e0d\u540c\u7684\u60c5\u51b5\u53ef\u4ee5\u4f7f\u7528\u4e0d\u540c\u7684\u65b9\u6cd5\u3002",
              isCollected: false
            },
            {
              collectionCount: 41,
              isEvent: false,
              commentsCount: 1,
              gfw: false,
              buildTime: 1545097232.852,
              checkStatus: true,
              objectId: "5c1783bb6fb9a049ae07ce3c",
              entryView: "",
              subscribersCount: 0,
              ngxCachedTime: 1545097246,
              verifyStatus: true,
              tags: [
                {
                  ngxCachedTime: 1545097134,
                  ngxCached: true,
                  title: "\u5b57\u4f53",
                  id: "5597a23fe4b08a686ce5a7c4"
                }
              ],
              updatedAt: "2018-12-18T01:40:32.824Z",
              rankIndex: 7.1222428508176,
              hot: false,
              autoPass: true,
              originalUrl: "https://juejin.im/post/5c1783216fb9a049b07d4330",
              verifyCreatedAt: "2018-12-17T11:08:43.218Z",
              createdAt: "2018-12-17T11:08:43.218Z",
              user: {
                community: null,
                collectedEntriesCount: 9,
                company: "\u5947\u864e360",
                followersCount: 3783,
                followeesCount: 5,
                role: "editor",
                postedPostsCount: 19,
                isAuthor: false,
                postedEntriesCount: 0,
                totalCommentsCount: 165,
                ngxCachedTime: 1545097214,
                ngxCached: true,
                viewedEntriesCount: 164,
                jobTitle: "\u524d\u7aef",
                subscribedTagsCount: 1,
                totalCollectionsCount: 4222,
                username: "\u5947\u821e\u5468\u520a",
                avatarLarge:
                  "https://user-gold-cdn.xitu.io/2017/12/1/16011b683b4dab31?w=200&h=200&f=jpeg&s=16144",
                objectId: "5a163f766fb9a0452a3bfc3e"
              },
              author: "",
              screenshot: "",
              original: true,
              hotIndex: 1055.7135,
              content:
                "\u4f17\u6240\u5468\u77e5\uff0c\u76f8\u5bf9\u4e8e\u82f1\u6587\u5b57\u4f53\uff0c\u4e2d\u6587\u5b57\u4f53\u5929\u751f\u662f\u201c\u5e9e\u7136\u5927\u7269\u201d\u3002\u82f1\u6587\u5b57\u4f53\u4e24\u4e09\u767eKB\u5df2\u7ecf\u5f88\u5927\u4e86\uff0c\u800c\u4e2d\u6587\u5b57\u4f53\u51e0MB\u5341\u51e0MB\u90fd\u7b97\u5c0f\u7684\u3002\u4e00\u65b9\u9762\uff0c\u4e2d\u6587\u5b57\u4f53\u5305\u542b\u7684\u5b57\u5f62\u6570\u91cf\u6781\u591a\uff0c\u52a8\u8f84\u6570\u4ee5\u5343\u8ba1\u751a\u81f3\u4e07\u8ba1\uff0c\u800c\u82f1\u6587\u5b57\u4f53\u5219\u53ea\u9700\u5305\u542b\u51e0\u5341\u4e2a\u57fa\u672c\u5b57\u7b26\u548c\u7b26\u53f7\uff0c\u54ea\u6015\u652f\u6301\u591a\u79cd\u8bed\u8a00\u53ca\u5b57\u7b26\u53d8\u4f53\uff0c\u5bb9\u91cf\u8fbe\u5230\u4e09\u5343\u591a\u4e2a\u5b57\u5f62\u5df2\u7ecf\u7b97\u975e\u5e38\u5e9e\u2026",
              title: "\u524d\u7aef\u5b57\u4f53\u622a\u53d6",
              lastCommentTime: "2018-12-17T23:22:47.372Z",
              type: "post",
              english: false,
              category: {
                ngxCached: true,
                title: "frontend",
                id: "5562b415e4b00c57d9b94ac8",
                name: "\u524d\u7aef",
                ngxCachedTime: 1545097169
              },
              viewsCount: 638,
              summaryInfo:
                "\u4f17\u6240\u5468\u77e5\uff0c\u76f8\u5bf9\u4e8e\u82f1\u6587\u5b57\u4f53\uff0c\u4e2d\u6587\u5b57\u4f53\u5929\u751f\u662f\u201c\u5e9e\u7136\u5927\u7269\u201d\u3002\u82f1\u6587\u5b57\u4f53\u4e24\u4e09\u767eKB\u5df2\u7ecf\u5f88\u5927\u4e86\uff0c\u800c\u4e2d\u6587\u5b57\u4f53\u51e0MB\u5341\u51e0MB\u90fd\u7b97\u5c0f\u7684\u3002\u4e00\u65b9\u9762\uff0c\u4e2d\u6587\u5b57\u4f53\u5305\u542b\u7684\u5b57\u5f62\u6570\u91cf\u6781\u591a\uff0c\u52a8\u8f84\u6570\u4ee5\u5343\u8ba1\u751a\u81f3\u4e07\u8ba1\uff0c\u800c\u82f1\u6587\u5b57\u4f53\u5219\u53ea\u9700\u5305\u542b\u51e0\u5341\u4e2a\u57fa\u672c\u5b57\u7b26\u548c\u7b26\u53f7\uff0c\u54ea\u6015\u652f\u6301\u591a\u79cd\u8bed\u8a00\u53ca\u5b57\u7b26\u53d8\u4f53\uff0c\u5bb9\u91cf\u8fbe\u5230\u4e09\u5343\u591a\u4e2a\u5b57\u5f62\u5df2\u7ecf\u7b97\u975e\u5e38\u5e9e\u5927\u7684\u4e86\u3002\u53e6\u4e00\u65b9\u9762\uff0c\u4e2d...",
              isCollected: false
            },
            {
              collectionCount: 19,
              isEvent: false,
              commentsCount: 2,
              gfw: false,
              buildTime: 1545097214.6607,
              checkStatus: true,
              objectId: "5c162101f265da611e4d8ddb",
              entryView: "",
              subscribersCount: 0,
              ngxCachedTime: 1545097246,
              verifyStatus: true,
              tags: [
                {
                  ngxCachedTime: 1545097186,
                  ngxCached: true,
                  title: "Vue.js",
                  id: "555e9a98e4b00c57d9955f68"
                }
              ],
              updatedAt: "2018-12-18T01:40:14.659Z",
              rankIndex: 5.3181758813514,
              hot: false,
              autoPass: false,
              originalUrl: "https://juejin.im/post/5c1605e76fb9a049b41c5cb0",
              verifyCreatedAt: "2018-12-17T03:10:37.052Z",
              createdAt: "2018-12-17T03:10:37.052Z",
              user: {
                community: {
                  github: {
                    username: "Nirongxu",
                    avatarLarge:
                      "https://avatars1.githubusercontent.com/u/18247519?v=4",
                    uid: "18247519"
                  }
                },
                collectedEntriesCount: 3,
                company: "",
                followersCount: 16,
                followeesCount: 3,
                role: "guest",
                postedPostsCount: 4,
                isAuthor: false,
                postedEntriesCount: 0,
                totalCommentsCount: 3,
                ngxCachedTime: 1545097205,
                ngxCached: true,
                viewedEntriesCount: 61,
                jobTitle: "web\u524d\u7aef",
                subscribedTagsCount: 31,
                totalCollectionsCount: 26,
                username: "\u590f\u6d1b\u514b\u4e36\u65ed",
                avatarLarge:
                  "https://avatars1.githubusercontent.com/u/18247519?v=4",
                objectId: "5c152f386fb9a049ed30c2c3"
              },
              author: "",
              screenshot: "",
              original: true,
              hotIndex: 1626.6239,
              content: "",
              title:
                "Vue2.0 + ElementUI \u624b\u5199\u6743\u9650\u7ba1\u7406\u7cfb\u7edf\u540e\u53f0\u6a21\u677f\uff08\u56db\uff09\u2014\u2014\u7ec4\u4ef6\u7ed3\u5c3e",
              lastCommentTime: "2018-12-18T00:23:41.572Z",
              type: "post",
              english: false,
              category: {
                ngxCached: true,
                title: "frontend",
                id: "5562b415e4b00c57d9b94ac8",
                name: "\u524d\u7aef",
                ngxCachedTime: 1545097169
              },
              viewsCount: 1424,
              summaryInfo:
                "I18N/LANG/INDEX.JS I18N/LANG/CN.JS I18N/LANG/EN.JS \u65b0\u5efaSRC/COMPONENTS/LANG/LANGSELECT.VUE \u5177\u4f53\u4f7f\u7528\u65b9\u6cd5\u53ef\u4ee5\u67e5\u770bECharts\u5b98\u7f51\uff0c\u9700\u8981\u6ce8\u610f\u7684\u5730\u65b9\u5c31\u662f\u54cd\u5e94\u5c4f\u5e55\u5927\u5c0f \u6846\u67b6\u76ee\u524d\u53ea\u5c01\u88c5\u4e86markdown\uff0c\u5b9e\u65f6\u83b7\u53d6,,\u4e09\u79cd...",
              isCollected: false
            },
            {
              collectionCount: 18,
              isEvent: false,
              commentsCount: 0,
              gfw: false,
              buildTime: 1545097226.8348,
              checkStatus: true,
              objectId: "5c17bd81f265da61602cd89b",
              entryView: "",
              subscribersCount: 0,
              ngxCachedTime: 1545097246,
              verifyStatus: true,
              tags: [
                {
                  ngxCachedTime: 1545097150,
                  ngxCached: true,
                  title: "Redux",
                  id: "5804cc908ac24700580d763a"
                },
                {
                  ngxCachedTime: 1545097200,
                  ngxCached: true,
                  title: "MobX",
                  id: "58be9c85128fe10064561ed0"
                }
              ],
              updatedAt: "2018-12-18T01:40:26.833Z",
              rankIndex: 5.0898705751618,
              hot: false,
              autoPass: true,
              originalUrl: "https://juejin.im/post/5c17bce0f265da61193bc091",
              verifyCreatedAt: "2018-12-17T15:15:13.799Z",
              createdAt: "2018-12-17T15:15:13.799Z",
              user: {
                community: {
                  github: {
                    username: "hh54188",
                    avatarLarge:
                      "https://avatars0.githubusercontent.com/u/1318911?v=4",
                    uid: "1318911"
                  }
                },
                collectedEntriesCount: 0,
                company: "Baidu",
                followersCount: 573,
                followeesCount: 0,
                role: "editor",
                postedPostsCount: 12,
                isAuthor: false,
                postedEntriesCount: 0,
                totalCommentsCount: 125,
                ngxCachedTime: 1545097226,
                ngxCached: true,
                viewedEntriesCount: 125,
                jobTitle: "\u524d\u7aef\u5de5\u7a0b\u5e08",
                subscribedTagsCount: 1,
                totalCollectionsCount: 2635,
                username: "\u674e\u71a0",
                avatarLarge:
                  "https://user-gold-cdn.xitu.io/2017/9/28/dae7da26d0551f025dc884e8c7eddb3f",
                objectId: "59cc858ff265da065a63dfca"
              },
              author: "",
              screenshot: "",
              original: true,
              hotIndex: 443.7975,
              content:
                "\u5728\u672c\u6587\u4e2d\u4f60\u5c06\u770b\u5230\u6211\u6700\u7ec8\u5f97\u51fa\u7684\u7ed3\u8bba\u662f Mobx \u7684\u6027\u80fd\u4f18\u4e8e Redux\u3002\u4f46\u5f88\u660e\u663e\u8fd9\u6837\u7684\u7ed3\u8bba\u662f\u7247\u9762\u7684\uff0c\u751a\u81f3\u662f\u6709\u5931\u504f\u9887\u7684\uff0c\u56e0\u4e3a\u6211\u53ea\u9009\u53d6\u4e86\u4e00\u4e2a\u7684\u573a\u666f\u5bf9\u4e24\u8005\u8fdb\u884c\u6d4b\u8bd5\u3002\u53ef\u80fd\u771f\u5b9e\u7684\u60c5\u51b5\u6070\u6070\u76f8\u53cd\uff0cMobx \u4ec5\u4ec5\u5728\u6211\u6d4b\u8bd5\u7684\u8fd9\u4e2a\u573a\u666f\u4e2d\u4f18\u4e8e Redux\uff0c\u4f46\u662f\u5728\u6211\u6240\u6709\u6ca1\u6709\u6d4b\u8bd5\u5230\u7684\u573a\u666f\u4e2d\u90fd\u52a3\u4e8e Redu\u2026",
              title: "Mobx \u4e0e Redux \u7684\u6027\u80fd\u5bf9\u6bd4",
              lastCommentTime: "2018-12-18T09:39:06.362Z",
              type: "post",
              english: false,
              category: {
                ngxCached: true,
                title: "frontend",
                id: "5562b415e4b00c57d9b94ac8",
                name: "\u524d\u7aef",
                ngxCachedTime: 1545097169
              },
              viewsCount: 261,
              summaryInfo:
                "\u5728\u672c\u6587\u4e2d\u4f60\u5c06\u770b\u5230\u6211\u6700\u7ec8\u5f97\u51fa\u7684\u7ed3\u8bba\u662f Mobx \u7684\u6027\u80fd\u4f18\u4e8e Redux\u3002\u4f46\u5f88\u660e\u663e\u8fd9\u6837\u7684\u7ed3\u8bba\u662f\u7247\u9762\u7684\uff0c\u751a\u81f3\u662f\u6709\u5931\u504f\u9887\u7684\uff0c\u56e0\u4e3a\u6211\u53ea\u9009\u53d6\u4e86\u4e00\u4e2a\u7684\u573a\u666f\u5bf9\u4e24\u8005\u8fdb\u884c\u6d4b\u8bd5\u3002\u53ef\u80fd\u771f\u5b9e\u7684\u60c5\u51b5\u6070\u6070\u76f8\u53cd\uff0cMobx \u4ec5\u4ec5\u5728\u6211\u6d4b\u8bd5\u7684\u8fd9\u4e2a\u573a\u666f\u4e2d\u4f18\u4e8e Redux\uff0c\u4f46\u662f\u5728\u6211\u6240\u6709\u6ca1\u6709\u6d4b\u8bd5\u5230\u7684\u573a\u666f\u4e2d\u90fd\u52a3\u4e8e Redux\uff0c\u8fd9\u90fd\u662f\u6709\u53ef\u80fd\u7684\u3002...",
              isCollected: false
            },
            {
              collectionCount: 15,
              isEvent: false,
              commentsCount: 0,
              gfw: false,
              buildTime: 1545097197.8567,
              checkStatus: true,
              objectId: "5c17c6635188252e8966e004",
              entryView: "",
              subscribersCount: 0,
              ngxCachedTime: 1545097246,
              verifyStatus: true,
              tags: [
                {
                  ngxCachedTime: 1545097232,
                  ngxCached: true,
                  title: "React.js",
                  id: "555e99ffe4b00c57d99556aa"
                },
                {
                  ngxCachedTime: 1545097176,
                  ngxCached: true,
                  title: "React Native",
                  id: "55e7cc62ddb2dd0023accd0d"
                }
              ],
              updatedAt: "2018-12-18T01:39:57.855Z",
              rankIndex: 4.8952059419492,
              hot: false,
              autoPass: true,
              originalUrl: "https://juejin.im/post/5c17c60a5188251920597572",
              verifyCreatedAt: "2018-12-17T15:53:07.377Z",
              createdAt: "2018-12-17T15:53:07.377Z",
              user: {
                community: {
                  weibo: {
                    avatar_url:
                      "http://tva1.sinaimg.cn/crop.0.0.1002.1002.180/006yiv8njw8f6x6ftirjrj30ru0ru405.jpg",
                    uid: "6003602003",
                    nickname: "CrazyCodeBoy"
                  },
                  github: {
                    username: "crazycodeboy",
                    avatarLarge:
                      "https://avatars0.githubusercontent.com/u/8716595?v=4",
                    uid: "8716595"
                  }
                },
                collectedEntriesCount: 49,
                company: "",
                followersCount: 1908,
                followeesCount: 0,
                role: "editor",
                postedPostsCount: 8,
                isAuthor: false,
                postedEntriesCount: 32,
                totalCommentsCount: 70,
                ngxCachedTime: 1545097143,
                ngxCached: true,
                viewedEntriesCount: 195,
                jobTitle:
                  "\u79fb\u52a8\u7aef\u67b6\u6784\u5e08&\u6280\u672f\u7ecf\u7406",
                subscribedTagsCount: 12,
                totalCollectionsCount: 5324,
                username: "JiaPengHui",
                avatarLarge:
                  "https://avatars.githubusercontent.com/u/8716595?v=3",
                objectId: "57caec76bf22ec006c20d457"
              },
              author: "",
              screenshot:
                "https://user-gold-cdn.xitu.io/2018/12/17/167bcde4958938a7?w=436&h=366&f=png&s=37779",
              original: true,
              hotIndex: 387.7436,
              content:
                "\u968f\u7740React Navigation\u9010\u6e10\u7a33\u5b9a\uff0cNavigator\u4e5f\u88ab\u5149\u8363\u7684\u9000\u4f11\u4e86\u3002\u5728React Native\u751f\u6001\u73af\u5883\u4e2d\u9700\u8981\u4e00\u6b3e\u53ef\u6269\u5c55\u4e14\u6613\u4e8e\u4f7f\u7528\u7684\u5bfc\u822a\u7ec4\u4ef6\uff0cNavigator \u81ea\u7136\u80dc\u4efb\u4e0d\u4e86\uff0c\u8fd9\u65f6React Native\u793e\u533a\u4fbf\u5b55\u80b2\u51fa\u4e86\u4e00\u4e2a\u5f00\u6e90\u5bfc\u822a\u7ec4\u4ef6React Navigation\u2026",
              title:
                "\u300eReact Navigation 3x\u7cfb\u5217\u6559\u7a0b\u300f\u4e4bReact Navigation 3x\u5f00\u53d1\u6307\u5357",
              lastCommentTime: "1970-01-01T00:00:00.Z",
              type: "post",
              english: false,
              category: {
                ngxCached: true,
                title: "frontend",
                id: "5562b415e4b00c57d9b94ac8",
                name: "\u524d\u7aef",
                ngxCachedTime: 1545097169
              },
              viewsCount: 235,
              summaryInfo:
                "\u968f\u7740React Navigation\u9010\u6e10\u7a33\u5b9a\uff0cNavigator\u4e5f\u88ab\u5149\u8363\u7684\u9000\u4f11\u4e86\u3002\u5728React Native\u751f\u6001\u73af\u5883\u4e2d\u9700\u8981\u4e00\u6b3e\u53ef\u6269\u5c55\u4e14\u6613\u4e8e\u4f7f\u7528\u7684\u5bfc\u822a\u7ec4\u4ef6\uff0cNavigator \u81ea\u7136\u80dc\u4efb\u4e0d\u4e86\uff0c\u8fd9\u65f6React Native\u793e\u533a\u4fbf\u5b55\u80b2\u51fa\u4e86\u4e00\u4e2a\u5f00\u6e90\u5bfc\u822a\u7ec4\u4ef6React Navigation\u3002 React Na...",
              isCollected: false
            },
            {
              collectionCount: 31,
              isEvent: false,
              commentsCount: 1,
              gfw: false,
              buildTime: 1545097192.7523,
              checkStatus: true,
              objectId: "5c16fb49e51d45059b6327be",
              entryView: "",
              subscribersCount: 0,
              ngxCachedTime: 1545097246,
              verifyStatus: true,
              tags: [
                {
                  ngxCachedTime: 1545097157,
                  ngxCached: true,
                  title: "\u524d\u7aef",
                  id: "5597a05ae4b08a686ce56f6f"
                }
              ],
              updatedAt: "2018-12-18T01:39:52.751Z",
              rankIndex: 4.8837868934583,
              hot: false,
              autoPass: true,
              originalUrl:
                "https://mp.weixin.qq.com/s?__biz=MzUxMDYxNTgwMA==&mid=2247484243&idx=1&sn=1a8c021816f01f22571fe659e4fc0d1a&chksm=f9010ac4ce7683d2a3452a5278f5528a5a6da8a54173c1ea32269396e79b2aa1b83b77d11dc2&token=1735694303&lang=zh_CN#rd",
              verifyCreatedAt: "2018-12-17T01:26:33.412Z",
              createdAt: "2018-12-17T01:26:33.412Z",
              user: {
                community: {
                  weibo: {
                    selfDescription: "JDC-\u4eac\u4e1c\u8bbe\u8ba1\u4e2d\u5fc3",
                    uid: "2799719067",
                    blogAddress: "http://weibo.com/tencentecd",
                    username: "\u4eac\u4e1c\u8bbe\u8ba1\u4e2d\u5fc3",
                    avatarLarge:
                      "http://tva2.sinaimg.cn/crop.0.0.798.798.180/a6e0529bgw1ej8h3oxba0j20m80m80t4.jpg"
                  }
                },
                collectedEntriesCount: 5,
                company: "\u4eac\u4e1c",
                followersCount: 5500,
                followeesCount: 0,
                role: "editor",
                postedPostsCount: 2,
                isAuthor: false,
                postedEntriesCount: 66,
                totalCommentsCount: 74,
                ngxCachedTime: 1545097155,
                ngxCached: true,
                viewedEntriesCount: 252,
                jobTitle: "UX",
                subscribedTagsCount: 5,
                totalCollectionsCount: 3274,
                username: "\u4eac\u4e1c\u8bbe\u8ba1\u4e2d\u5fc3JDC",
                avatarLarge:
                  "https://user-gold-cdn.xitu.io/2016/11/29/72e62354d22513bd9523d1f4d0a5a0f6.jpg",
                objectId: "5799b3a2c4c971005ab64cbc"
              },
              author: "",
              screenshot:
                "https://user-gold-cdn.xitu.io/2018/12/17/167b9c5944cf3ec6?w=750&h=320&f=jpeg&s=127448",
              original: false,
              hotIndex: 1694.6421,
              content:
                "\u7b80\u4ecb\uff1a\u5b57\u7b26\u96c6\u7684\u7531\u6765\u662f\u4ec0\u4e48\uff1f\u5404\u79cd\u5b57\u7b26\u7f16\u7801\u53c8\u6709\u4ec0\u4e48\u5173\u7cfb\uff1f\u4e71\u7801\u662f\u5982\u4f55\u51fa\u73b0\u7684\uff1f\u5e26\u7740\u8fd9\u4e9b\u95ee\u9898\uff0c\u6211\u4eec\u4e00\u8d77\u503e\u542c\u5b57\u7b26\u7684\u6545\u4e8b\u3002 \u524d\u51e0\u5929\u6d4b\u8bd5\u7ed9\u63d0\u4e86\u4e2a bug ,\u201c\u5728\u957f\u5ea6\u9650\u5b9a\u7684\u6587\u672c\u533a\u57df\uff0c\u8f93\u5165\u8868\u60c5\u65f6\u4f1a\u5c55\u793a\u4e71\u7801\u201d\u3002\u4e0d\u7531\u7684\u4ea7\u751f\u4e86\u4e00\u4e9b\u60f3\u6cd5\uff1a\u8fd9\u4e9b\u8868\u60c5\u662f\u4ec0\u4e48\u4e1c\u897f\uff1f\u4e3a\u4ec0\u4e48\u4f1a\u51fa\u73b0\u4e71\u7801\uff1f JS \u662f\u4f7f\u7528\u54ea\u79cd\u7f16\u7801\u65b9\u5f0f\uff1f\u4fbf\u2026",
              title: "\u4e00\u4e2a\u8868\u60c5\u5f15\u53d1\u7684\u601d\u8003",
              lastCommentTime: "2018-12-17T09:50:56.236Z",
              type: "article",
              english: false,
              category: {
                ngxCached: true,
                title: "frontend",
                id: "5562b415e4b00c57d9b94ac8",
                name: "\u524d\u7aef",
                ngxCachedTime: 1545097169
              },
              viewsCount: 1377,
              summaryInfo:
                "\u524d\u51e0\u5929\u6d4b\u8bd5\u7ed9\u63d0\u4e86\u4e2a bug ,\u201c\u5728\u957f\u5ea6\u9650\u5b9a\u7684\u6587\u672c\u533a\u57df\uff0c\u8f93\u5165\u8868\u60c5\u65f6\u4f1a\u5c55\u793a\u4e71\u7801\u201d\u3002\u4e0d\u7531\u7684\u4ea7\u751f\u4e86\u4e00\u4e9b\u60f3\u6cd5\uff1a\u8fd9\u4e9b\u8868\u60c5\u662f\u4ec0\u4e48\u4e1c\u897f\uff1f\u4e3a\u4ec0\u4e48\u4f1a\u51fa\u73b0\u4e71\u7801\uff1f JS \u662f\u4f7f\u7528\u54ea\u79cd\u7f16\u7801\u65b9\u5f0f\uff1f\u4fbf\u67e5\u9605\u4e86\u76f8\u5173\u6587\u732e\uff0c\u6700\u7ec8\u627e\u5230\u4e86\u7b54\u6848\uff0c\u4eca\u5929\u5c31\u8be6\u7ec6\u8bf4\u4e00\u8bf4\u7f16\u7801\u7684\u6545\u4e8b\u3002 \u5728\u804a\u7f16\u7801\u4e4b\u524d,\u6709\u51e0\u4e2a\u57fa\u7840\u7684\u6982\u5ff5\u9700\u8981\u5148\u660e\u786e\u4e00\u4e0b\uff1a \u6211\u4eec\u77e5\u9053\uff0c\u5728\u8ba1\u7b97\u673a\u5185...",
              isCollected: false
            },
            {
              collectionCount: 72,
              isEvent: false,
              commentsCount: 17,
              gfw: false,
              buildTime: 1545097239.576,
              checkStatus: true,
              objectId: "5c14ea7d5188251da07e14d9",
              entryView: "",
              subscribersCount: 0,
              ngxCachedTime: 1545097246,
              verifyStatus: true,
              tags: [
                {
                  ngxCachedTime: 1545097213,
                  ngxCached: true,
                  title: "JavaScript",
                  id: "55964d83e4b08a686cc6b353"
                },
                {
                  ngxCachedTime: 1545097197,
                  ngxCached: true,
                  title: "\u5355\u5143\u6d4b\u8bd5",
                  id: "584628320ce463005784fd34"
                }
              ],
              updatedAt: "2018-12-18T01:40:39.574Z",
              rankIndex: 4.625277811783,
              hot: false,
              autoPass: false,
              originalUrl: "https://juejin.im/post/5c14ea256fb9a049fc036c00",
              verifyCreatedAt: "2018-12-16T03:29:34.883Z",
              createdAt: "2018-12-16T03:29:34.883Z",
              user: {
                community: {
                  github: {
                    username: "z2014",
                    avatarLarge:
                      "https://avatars0.githubusercontent.com/u/17852357?v=4",
                    uid: "17852357"
                  }
                },
                collectedEntriesCount: 8,
                company: "\u9e45\u5382",
                followersCount: 38,
                followeesCount: 17,
                role: "guest",
                postedPostsCount: 3,
                isAuthor: false,
                postedEntriesCount: 0,
                totalCommentsCount: 13,
                ngxCachedTime: 1545097239,
                ngxCached: true,
                viewedEntriesCount: 314,
                jobTitle: "\u524d\u7aef\u5f00\u53d1",
                subscribedTagsCount: 17,
                totalCollectionsCount: 461,
                username: "2014_",
                avatarLarge:
                  "https://avatars3.githubusercontent.com/u/17852357?v=3",
                objectId: "5952f8ac5188250d8a603bd0"
              },
              author: "",
              screenshot: "",
              original: true,
              hotIndex: 4862.4604,
              content:
                "\u5176\u5b9e\u4e4b\u524d\u5c31\u5df2\u7ecf\u7b80\u5355\u7684\u4e86\u89e3\u8fc7\u4e86\u5355\u5143\u6d4b\u8bd5\uff0c\u4f46\u5f53\u65f6\u5bf9\u4e8e\u5355\u5143\u6d4b\u8bd5\u6211\u662f\u6301\u6709\u4e00\u79cd\u5f88\u5426\u5b9a\u7684\u6001\u5ea6\u7684\uff0c\u56e0\u4e3a\u4ed6\u592a\u8fc7\u4e8e\u9e21\u808b\uff0c\u90fd\u662f\u6d4b\u8bd5\u4e00\u4e9b\u5f88\u57fa\u7840\u7684\u529f\u80fd\uff0c\u4f46\u662f\u5f53\u7b14\u8005\u88ab\u8fd9\u6b21\u91cd\u6784\u6298\u78e8\u4e4b\u540e\uff0c\u6709\u91cd\u65b0\u601d\u8003\u4e86\u4e0b\u5982\u4f55\u80fd\u591f\u4fdd\u8bc1\u4ee3\u7801\u7684\u5065\u58ee\u6027\uff0c\u62b1\u7740\u8fd9\u4e2a\u6001\u5ea6\uff0c\u7b14\u8005\u53c8\u53bb\u8c03\u7814\u4e86\u4e0b\u5355\u5143\u6d4b\u8bd5\u5230\u5e95\u80fd\u591f\u505a\u4ec0\u4e48\u3002 \u6309\u7167\u6211\u4eec\u7684\u7406\u60f3\u60c5\u51b5\uff0c\u5982\u679c\u2026",
              title:
                "\u5e74\u8f7b\u65f6\uff0c\u6211\u4e0d\u5199\u5355\u5143\u6d4b\u8bd5",
              lastCommentTime: "2018-12-17T18:26:34.134Z",
              type: "post",
              english: false,
              category: {
                ngxCached: true,
                title: "frontend",
                id: "5562b415e4b00c57d9b94ac8",
                name: "\u524d\u7aef",
                ngxCachedTime: 1545097169
              },
              viewsCount: 4055,
              summaryInfo:
                "\u5728\u4e00\u4e2a\u591a\u4eba\u534f\u4f5c\u7684\u5927\u578b\u9879\u76ee\u4e2d\uff0c\u6211\u4eec\u5728\u5f00\u53d1\u7684\u8fc7\u7a0b\u4e2d\u53ef\u80fd\u7ecf\u5e38\u4f1a\u9762\u4e34\u5230\u8fd9\u6837\u7684\u95ee\u9898\uff1a \u5f53\u6211\u4eec\u88ab\u63d0\u51fa\u8fd9\u4e9bbug\u7684\u65f6\u5019\uff0c\u6211\u4eec\u662f\u4e8c\u8138\u61f5\u903c\u7684\uff0c\u56e0\u4e3a\u8fd9\u4e0d\u7b26\u5408\u4e00\u4e2a\u7a0b\u5e8f\u5458\u7684\u9884\u671f\uff01\uff01\uff01\u90a3\u4e48\u6211\u4eec\u5982\u4f55\u80fd\u591f\u907f\u514d\u4ee5\u4e0a\u7684\u95ee\u9898\uff0c\u4ece\u800c\u5c06\u7ecf\u5386\u6295\u5165\u5230\u66f4\u591a\u7684\u5f00\u53d1\uff08\u5199bug\uff09\u4e2d\u53bb\u5462\uff1f\u7b14\u8005\u5728\u8fd9\u91cc\u8bd5\u7740\u5f52\u7eb3\u4e86\u4e00\u4e0b\u89e3\u51b3\u95ee\u9898\u7684\u529e\u6cd5 \u5176\u5b9e\u4e4b\u524d\u5c31\u5df2\u7ecf\u7b80\u5355\u7684\u4e86...",
              isCollected: false
            },
            {
              collectionCount: 18,
              isEvent: false,
              commentsCount: 0,
              gfw: false,
              buildTime: 1545097239.8363,
              checkStatus: true,
              objectId: "5c1788cf6fb9a049c965973e",
              entryView: "",
              subscribersCount: 0,
              ngxCachedTime: 1545097246,
              verifyStatus: true,
              tags: [
                {
                  ngxCachedTime: 1545097232,
                  ngxCached: true,
                  title: "React.js",
                  id: "555e99ffe4b00c57d99556aa"
                }
              ],
              updatedAt: "2018-12-18T01:40:39.834Z",
              rankIndex: 4.429407464793,
              hot: false,
              autoPass: false,
              originalUrl: "https://juejin.im/post/5c14ab92e51d450b3e0cbfdd",
              verifyCreatedAt: "2018-12-17T14:00:31.385Z",
              createdAt: "2018-12-17T14:00:31.385Z",
              user: {
                community: null,
                collectedEntriesCount: 4,
                company: "\u676d\u5dde\u5fae\u533b\u96c6\u56e2",
                followersCount: 5,
                followeesCount: 7,
                role: "guest",
                postedPostsCount: 2,
                isAuthor: false,
                postedEntriesCount: 0,
                totalCommentsCount: 0,
                ngxCachedTime: 1545097217,
                ngxCached: true,
                viewedEntriesCount: 78,
                jobTitle: "\u524d\u7aef\u5de5\u7a0b\u5e08",
                subscribedTagsCount: 7,
                totalCollectionsCount: 45,
                username: "\u5c0f\u9ec4\u74dc\u9a84\u50b2",
                avatarLarge:
                  "https://user-gold-cdn.xitu.io/2018/11/18/16726862995b0731?w=748&h=750&f=png&s=705097",
                objectId: "5ba590345188255c9b13b4bc"
              },
              author: "",
              screenshot: "",
              original: true,
              hotIndex: 461.7977,
              content:
                "\u9996\u5148\uff0c\u8fd9\u7bc7\u6587\u7ae0\u7684\u76ee\u7684\u5e76\u4e0d\u662f\u4e3a\u4e86\u91cd\u65b0\u53d9\u8ff0\u4e00\u904dReact-Router4\u7684\u6587\u6863\u3002\u63a5\u4e0b\u6765\u6211\u8981\u8bf4\u7684\u5185\u5bb9\uff0c\u5c06\u4f1a\u8986\u76d6React-Router\u7684\u5927\u591a\u6570API\uff0c\u4f46\u662f\u771f\u6b63\u7684\u76ee\u7684\u662f\u63ed\u5f00React-Router4\u6210\u529f\u7684\u6a21\u5f0f\u548c\u7b56\u7565\u3002 \u5982\u679c\u4f60\u559c\u6b22\u76f4\u63a5\u770bdemo\u6765\u4e86\u89e3\uff0c\u8bf7\u70b9\u51fb\u6b64\u94fe\u63a5\u67e5\u770b\u3002 React-Ro\u2026",
              title: "\uff08\u8bd1\uff09React-Router4\u7684\u53d8\u5316",
              lastCommentTime: "1970-01-01T00:00:00.Z",
              type: "post",
              english: false,
              category: {
                ngxCached: true,
                title: "frontend",
                id: "5562b415e4b00c57d9b94ac8",
                name: "\u524d\u7aef",
                ngxCachedTime: 1545097169
              },
              viewsCount: 279,
              summaryInfo:
                "\u9996\u5148\uff0c\u8fd9\u7bc7\u6587\u7ae0\u7684\u76ee\u7684\u5e76\u4e0d\u662f\u4e3a\u4e86\u91cd\u65b0\u53d9\u8ff0\u4e00\u904dReact-Router4\u7684\u6587\u6863\u3002\u63a5\u4e0b\u6765\u6211\u8981\u8bf4\u7684\u5185\u5bb9\uff0c\u5c06\u4f1a\u8986\u76d6React-Router\u7684\u5927\u591a\u6570API\uff0c\u4f46\u662f\u771f\u6b63\u7684\u76ee\u7684\u662f\u63ed\u5f00React-Router4\u6210\u529f\u7684\u6a21\u5f0f\u548c\u7b56\u7565\u3002 \u5728\u5f00\u59cb\u672c\u6587\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u4e86\u89e3\u4e00\u4e9bJS\u7684\u6982\u5ff5\uff1a \u5982\u679c\u4f60\u559c\u6b22\u76f4\u63a5\u770bdemo\u6765\u4e86\u89e3\uff0c\u8bf7\u70b9\u51fb\u6b64\u94fe\u63a5...",
              isCollected: false
            },
            {
              collectionCount: 23,
              isEvent: false,
              commentsCount: 2,
              gfw: false,
              buildTime: 1545097185.2075,
              checkStatus: true,
              objectId: "5c17133de51d451a7716180c",
              entryView: "",
              subscribersCount: 0,
              ngxCachedTime: 1545097246,
              verifyStatus: true,
              tags: [
                {
                  ngxCachedTime: 1545097213,
                  ngxCached: true,
                  title: "JavaScript",
                  id: "55964d83e4b08a686cc6b353"
                }
              ],
              updatedAt: "2018-12-18T01:39:45.205Z",
              rankIndex: 4.1779185534358,
              hot: false,
              autoPass: false,
              originalUrl: "https://juejin.im/post/5c1712505188256ec35fdac3",
              verifyCreatedAt: "2018-12-17T03:33:49.542Z",
              createdAt: "2018-12-17T03:33:49.542Z",
              user: {
                community: null,
                collectedEntriesCount: 168,
                company: "",
                followersCount: 36132,
                followeesCount: 9,
                role: "guest",
                postedPostsCount: 629,
                isAuthor: true,
                postedEntriesCount: 356,
                totalCommentsCount: 420,
                ngxCachedTime: 1545097185,
                ngxCached: true,
                viewedEntriesCount: 2808,
                jobTitle: "",
                subscribedTagsCount: 75,
                totalCollectionsCount: 18279,
                username: "\u817e\u8baf\u4e91\u52a0\u793e\u533a",
                avatarLarge:
                  "https://user-gold-cdn.xitu.io/2017/12/15/1605950722bb7b3e?w=659&h=640&f=jpeg&s=43951",
                objectId: "58afa29aac502e0069c5d756"
              },
              author: "",
              screenshot: "",
              original: true,
              hotIndex: 1242.1358,
              content:
                "JavaScript \u8bed\u8a00\u91c7\u7528\u7684\u662f\u5355\u7ebf\u7a0b\u6a21\u578b\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u6240\u6709\u4efb\u52a1\u53ea\u80fd\u5728\u4e00\u4e2a\u7ebf\u7a0b\u4e0a\u5b8c\u6210\uff0c\u4e00\u6b21\u53ea\u80fd\u505a\u4e00\u4ef6\u4e8b\u3002\u524d\u9762\u7684\u4efb\u52a1\u6ca1\u505a\u5b8c\uff0c\u540e\u9762\u7684\u4efb\u52a1\u53ea\u80fd\u7b49\u7740\u3002\u968f\u7740\u7535\u8111\u8ba1\u7b97\u80fd\u529b\u7684\u589e\u5f3a\uff0c\u5c24\u5176\u662f\u591a\u6838 CPU \u7684\u51fa\u73b0\uff0c\u5355\u7ebf\u7a0b\u5e26\u6765\u5f88\u5927\u7684\u4e0d\u4fbf\uff0c\u65e0\u6cd5\u5145\u5206\u53d1\u6325\u8ba1\u7b97\u673a\u7684\u8ba1\u7b97\u80fd\u529b\u3002 Web Worker \u7684\u4f5c\u7528\uff0c\u2026",
              title:
                "\u5982\u4f55\u63d0\u5347JavaScript\u7684\u4efb\u52a1\u6548\u7387\uff1f\u5b66\u4f1a\u540e\u6559\u7ed9\u4f60\u540c\u4e8b",
              lastCommentTime: "2018-12-17T22:40:59.885Z",
              type: "post",
              english: false,
              category: {
                ngxCached: true,
                title: "frontend",
                id: "5562b415e4b00c57d9b94ac8",
                name: "\u524d\u7aef",
                ngxCachedTime: 1545097169
              },
              viewsCount: 1000,
              summaryInfo:
                "JavaScript \u8bed\u8a00\u91c7\u7528\u7684\u662f\u5355\u7ebf\u7a0b\u6a21\u578b\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u6240\u6709\u4efb\u52a1\u53ea\u80fd\u5728\u4e00\u4e2a\u7ebf\u7a0b\u4e0a\u5b8c\u6210\uff0c\u4e00\u6b21\u53ea\u80fd\u505a\u4e00\u4ef6\u4e8b\u3002\u524d\u9762\u7684\u4efb\u52a1\u6ca1\u505a\u5b8c\uff0c\u540e\u9762\u7684\u4efb\u52a1\u53ea\u80fd\u7b49\u7740\u3002\u968f\u7740\u7535\u8111\u8ba1\u7b97\u80fd\u529b\u7684\u589e\u5f3a\uff0c\u5c24\u5176\u662f\u591a\u6838 CPU \u7684\u51fa\u73b0\uff0c\u5355\u7ebf\u7a0b\u5e26\u6765\u5f88\u5927\u7684\u4e0d\u4fbf\uff0c\u65e0\u6cd5\u5145\u5206\u53d1\u6325\u8ba1\u7b97\u673a\u7684\u8ba1\u7b97\u80fd\u529b\u3002 Web Worker \u7684\u4f5c\u7528\uff0c\u5c31\u662f\u4e3a JavaSc...",
              isCollected: false
            },
            {
              collectionCount: 17,
              isEvent: false,
              commentsCount: 1,
              gfw: false,
              buildTime: 1545097230.364,
              checkStatus: true,
              objectId: "5c178b2951882530e9341d51",
              entryView: "",
              subscribersCount: 0,
              ngxCachedTime: 1545097246,
              verifyStatus: true,
              tags: [
                {
                  ngxCachedTime: 1545097144,
                  ngxCached: true,
                  title: "Promise",
                  id: "559a4c13e4b08a686d209b5b"
                }
              ],
              updatedAt: "2018-12-18T01:40:30.362Z",
              rankIndex: 4.1616309202048,
              hot: false,
              autoPass: false,
              originalUrl: "https://juejin.im/post/5c178af05188254eb05fa98a",
              verifyCreatedAt: "2018-12-17T14:00:03.513Z",
              createdAt: "2018-12-17T14:00:03.513Z",
              user: {
                community: {
                  wechat: {
                    avatarLarge:
                      "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJHwEYicU943Dia2VOc1cjj1Ro2o1LI4Rld1FaLDusOY5JDoBwKSHTDBFlic6NFKVqzibvgia6uODfEJaA/132"
                  }
                },
                collectedEntriesCount: 45,
                company: "\u5728\u8def\u4e0a",
                followersCount: 41,
                followeesCount: 7,
                role: "guest",
                postedPostsCount: 5,
                isAuthor: false,
                postedEntriesCount: 0,
                totalCommentsCount: 14,
                ngxCachedTime: 1545097166,
                ngxCached: true,
                viewedEntriesCount: 1056,
                jobTitle: "\u524d\u7aef\u5f00\u53d1",
                subscribedTagsCount: 24,
                totalCollectionsCount: 273,
                username: "\u5343\u6c34\u5357",
                avatarLarge:
                  "https://user-gold-cdn.xitu.io/2018/4/6/1629b60ad149daa8?w=768&h=768&f=jpeg&s=485874",
                objectId: "5a81a407f265da4e853d598a"
              },
              author: "",
              screenshot: "",
              original: true,
              hotIndex: 434.2521,
              content:
                "promise \u7684\u51fa\u73b0\uff0c\u63d0\u4f9b\u4e86\u4f18\u96c5\u7684\u5f02\u6b65\u89e3\u51b3\u65b9\u5f0f\uff0c\u4f46\u662f\uff0c\u591a\u4e2a\u8fde\u7eed\u7ee7\u53d1 promise \u5199\u6cd5\u4f9d\u7136\u7e41\u7410\u3002 \u5982\u4e0a\u4ee3\u7801\uff0c\u5c01\u88c5 tryCatch \u88c5\u9970\u5668\u6765\u5bf9\u6bcf\u4e2a action \u51fd\u6570\u6dfb\u52a0 try catch \u9519\u8bef\u6355\u83b7\u3002 \u76f4\u63a5 async await \u51fd\u6570\u5c01\u88c5\u5c31\u884c\u4e86\uff0c\u7b80\u5355\u7684\u95ee\u9898\u60f3\u590d\u6742\u4e86\u3002\u3002\u3002\u2026",
              title:
                "\u89e3\u51b3\u4ee3\u7801\u4e2d\u91cd\u590d\u7684\u6355\u83b7 promise \u9519\u8bef\u7684 try catch \u8bed\u53e5",
              lastCommentTime: "2018-12-18T09:27:02.748Z",
              type: "post",
              english: false,
              category: {
                ngxCached: true,
                title: "frontend",
                id: "5562b415e4b00c57d9b94ac8",
                name: "\u524d\u7aef",
                ngxCachedTime: 1545097169
              },
              viewsCount: 257,
              summaryInfo:
                "promise \u7684\u51fa\u73b0\uff0c\u63d0\u4f9b\u4e86\u4f18\u96c5\u7684\u5f02\u6b65\u89e3\u51b3\u65b9\u5f0f\uff0c\u4f46\u662f\uff0c\u591a\u4e2a\u8fde\u7eed\u7ee7\u53d1 promise \u5199\u6cd5\u4f9d\u7136\u7e41\u7410\u3002 es6 \u4e4b\u540e\u53c8\u65b0\u589e\u4e86 async \u51fd\u6570\u6765\u4f18\u5316\u5f02\u6b65\u5199\u6cd5\uff0c\u8bed\u4e49\u5316\u66f4\u660e\u786e\uff0c\u5199\u6cd5\u66f4\u4f18\u96c5\uff0c\u4f46\u662f\u9519\u8bef\u6355\u83b7\u6bd4\u8f83\u9ebb\u70e6\uff0c\u4e00\u822c\u90fd\u5f97\u4f7f\u7528try catch \u6765\u6355\u83b7\u9519\u8bef\uff0c\u5177\u4f53\u4f18\u70b9\u53c2\u8003\u962e\u8001\u5e08\u535a\u5ba2 async \u51fd\u6570 \u5982\u4e0a\u4ee3\u7801...",
              isCollected: false
            }
          ]
        }
      };
      let tempTags,
        nowDate = new Date();
      let list = res.d.entrylist.map(item => {
        tempTags =
          (item.tags[0] && item.tags[0].title) +
          (item.tags[1] ? "/" + item.tags[1].title : "");
        return {
          commentsCount: item.commentsCount,
          title: item.title,
          collectionCount: item.collectionCount,
          viewsCount: item.viewsCount,
          summaryInfo: item.summaryInfo,
          originalUrl: item.originalUrl,
          original: item.original,
          createdAt: item.createdAt.slice(0, 10),
          diffTime: this.pushTime(nowDate, item.createdAt),
          username: item.user.username,
          hot: item.viewsCount > 2500,
          screenshot: item.screenshot,
          tags: tempTags
        };
      });
      this.dataList = list;
      // this.dataList.map(item => {
      //   console.log(
      //     item.autoPass,
      //     item.checkStatus,
      //     item.gfw,
      //     item.hot,
      //     item.original,
      //     item.verifyStatus
      //   );
      // });
      // });
    },
    pushTime(nowDate, createTime) {
      let diffTime = (nowDate - new Date(createTime).getTime()) / 86400000;
      return Math.floor(diffTime) != 0
        ? Math.floor(diffTime) + "天前"
        : Math.floor(diffTime * 24) != 0
        ? Math.floor(diffTime * 24) + "小时前"
        : Math.floor(diffTime * 24 * 60) + "分钟前";
    }
  },
  mounted() {
    this.fetchData("first");
  }
};
</script>

<style scoped lang="scss">
.post-main {
  display: flex;
  max-width: 960px;
  margin: auto;
}
.post-right {
  width: 100%;
}
.post-list {
  flex-direction: column;
  width: 100%;
  max-width: 58rem;
  margin: 0 auto;
  padding-top: 40px;
  background-color: white;
  .post-li {
    padding: 20px 20px;
    border-bottom: 1px solid gainsboro;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .post-info {
    font-size: 14px;
    color: darkgray;
    .is-hot {
      color: red;
    }
    .is-zl {
      color: violet;
    }
    li:after {
      content: "·";
      padding: 0 3px;
    }
    :last-child:after {
      content: "";
    }
  }
  .post-title {
    h3 {
      margin: 10px 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .post-action {
    li {
      border: 1px solid gainsboro;
      padding: 5px 10px;
      &:last-child {
        margin-left: 10px;
      }
    }
  }
  .post-div {
    width: 580px;
  }
  .post-img {
    width: 100px;
    height: 60px;
  }
}
</style>
