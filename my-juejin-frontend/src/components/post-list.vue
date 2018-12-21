<template>
  <div class="post-main">
    <ul class="post-list">
      <li class="post-li-title">
        <ul class="sort-left">
          <li>热门</li>
          <li>最新</li>
          <li>评论</li>
        </ul>
        <ul class="sort-right">
          <li>本周最热</li>
          <li class="center-li">本月最热</li>
          <li>历史最热</li>
        </ul>
      </li>
      <li v-for="item in dataList" :key="item.objectId" class="post-li">
        <router-link target="_blank" class="post-a" :to="{path:'/detail/'+item.objectId}">
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
        </router-link>
      </li>
    </ul>
    <div class="post-right"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "post-list",
  props: {
    msg: String
  },
  computed: {
    ...mapGetters(["currentCate"])
  },
  data() {
    return {
      dataList: []
    };
  },
  watch: {
    currentCate(data) {
      this.fetchData(data);
    }
  },
  methods: {
    fetchData(cate) {
      cate = cate || "5562b415e4b00c57d9b94ac8";
      this.axios
        .get("/juejin/get_entry_by_timeline",{
          params: {
            src: "web",
            category: cate,
            limit: 20
          },
          method: "get"
        })
        .then(res => {
          let tempTags,
            nowDate = new Date();
          let list = res.data.d.entrylist.map(item => {
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
              objectId: item.originalUrl.slice(23),
              createdAt: item.createdAt.slice(0, 10),
              diffTime: this.pushTime(nowDate, item.createdAt),
              username: item.user.username,
              hot: item.viewsCount > 2500,
              screenshot: item.screenshot,
              tags: tempTags
            };
          });
          this.dataList = list;
        });
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
    this.fetchData(this.currentCate);
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
  background-color: white;
  .post-a,
  .post-li-title {
    text-decoration: none;
    padding: 20px 20px;
    border-bottom: 1px solid gainsboro;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .sort-left {
    li {
      font-size: 14px;
      color: darkgray;
      padding: 0 1rem;
      border-right: 1px solid darkgray;
    }
  }
  .sort-right {
    li {
      font-size: 14px;
      color: darkgray;
    }
    .center-li {
      &::after,
      &::before {
        content: "·";
        padding: 0 0.3rem;
      }
    }
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
      color: black;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .post-action {
    color: gray;
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
