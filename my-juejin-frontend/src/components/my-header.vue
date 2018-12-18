<template>
  <header class="top-nav">
    <nav>
      <ul v-show="toggleShow">
        <li>
          <a href="/">
          <img
            src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg"
            alt="掘金"
            class="nav-logo"
          >
          </a>
        </li>
        <li v-for="item in topNav" :key="item.value">{{item.name}}</li>
        <li class="nav-query">
          <input type="text" placeholder="搜索掘金">
          <i class="iconfont icon-sousuo_o"></i>
        </li>
        <li>
          <button class="nav-write">写文章</button>
        </li>
        <li>
          <i class="iconfont icon-pinglun"></i>
        </li>
        <li>
          <img class="nav-actor" alt="头像" @click="toSetting">
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  name: "my-header",
  props:['toggleShow'],
  data() {
    return {
      topNav: [
        { name: "首页", value: "timeline" },
        { name: "动态", value: "activities" },
        { name: "小册", value: "books" },
        { name: "开源库", value: "repos" },
        { name: "活动", value: "events" }
      ]
    };
  },
  methods:{
    toSetting(){
      this.$router.push('/user/setting')
    }
  }
};
</script>
<style lang='scss' scoped>
header {
  padding: 10px 0;
  position: sticky;
  height: 40px;
  z-index: 100;
  background-color: white;
  nav {
    max-width: 960px;
    margin: 0 auto;
  }
  ul {
    justify-content: space-between;
    align-items: center;
    li {
      color: gray;
      font-size: 18px;
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
      background-color: #007fff;
      color: white;
      cursor: pointer;
      padding: 8px 10px;
      border-radius: 5px;
    }
  }
}
</style>