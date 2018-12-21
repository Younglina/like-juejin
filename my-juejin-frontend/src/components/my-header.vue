<template>
  <header class="top-nav">
    <nav>
      <ul class="tag-list" v-show="toggleShow">
        <li>
          <a href="/">
            <img
              src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg"
              alt="掘金"
              class="nav-logo"
            >
          </a>
        </li>
        <li v-for="item in topNav" :key="item.value" class="nav-list">
          <router-link :to="item.link">{{item.name}}</router-link>
        </li>
        <li class="nav-query">
          <input type="text" placeholder="搜索掘金">
          <i class="iconfont icon-sousuo_o"></i>
        </li>
        <li>
          <button class="nav-write">写文章</button>
        </li>
        <li>
          <i class="iconfont icon-lingdang"></i>
        </li>
        <li>
          <img src="../assets/header.jpg" class="nav-actor" alt="头像" @click="toSetting">
        </li>
      </ul>
      <hr class="nav-hr">
      <ul class="cate-list">
        <li v-for="item in cateList" :key="item.id" @click="changeCate">
          <span
            :data-cate="item.tagId"
            :class="{'cate-active':activeCate==item.tagId}"
          >{{item.name}}</span>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  name: "my-header",
  props: ["toggleShow"],
  data() {
    return {
      topNav: [
        { name: "首页", value: "timeline", link: "/" },
        { name: "动态", value: "activities", link: "/active" },
        { name: "小册", value: "books", link: "/" },
        { name: "开源库", value: "repos", link: "/" },
        { name: "活动", value: "events", link: "/" }
      ],
      cateList: [],
      activeCate: ""
    };
  },
  mounted() {
    this.axios.get("/local/category", {}).then(res => {
      this.cateList = res.data.result.list;
    });
  },
  methods: {
    changeCate(e) {
      this.activeCate = e.target.dataset.cate;
      this.$store.commit("SET_CATE", e.target.dataset.cate);
    },
    toSetting() {
      this.$router.push("/user/setting");
    }
  }
};
</script>
<style lang='scss' scoped>
header {
  padding: 10px 0;
  position: fixed;
  z-index: 100;
  background-color: white;
  .cate-list,
  .tag-list {
    max-width: 960px;
    margin: 0 auto;
  }
  .nav-actor {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .cate-list {
    font-size: 14px;
    padding: 1rem 0;
    justify-content: flex-start;
    .cate-active {
      color: #007fff;
    }
    li {
      margin-right: 2rem;
      a {
        color: darkgray;
        text-decoration: none;
        cursor: pointer;
        &:hover {
          color: #007fff;
        }
      }
    }
  }
  .nav-list {
    a {
      color: gray;
      text-decoration: none;
      cursor: pointer;
      &:hover {
        color: #007fff;
      }
    }
  }
  ul {
    justify-content: space-between;
    align-items: center;
    color: gray;
    font-size: 18px;
    li {
      &:hover {
        color: #007fff;
      }
    }
    .nav-query {
      border: 1px solid gainsboro;
      padding: 0 10px;
      input {
        width: 100px;
        padding: 8px 0;
        font-size: 14px;
      }
    }
    .nav-write {
      border: none;
      outline: none;
      padding: 8px 10px;
      border-radius: 5px;
      background-color: #007fff;
      color: white;
      cursor: pointer;
    }
  }
}
</style>