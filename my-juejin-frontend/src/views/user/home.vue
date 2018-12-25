<template>
  <div class="user-home">
    <div class="user-left">
      <div class="user-info-main">
        <img class="user-avator" :src="userInfo.avator" alt>
        <div class="user-info">
          <div class="user-name">{{userInfo.name}}</div>
          <div class="user-post">
            <i class="iconfont icon-creditcard"></i>
            {{userInfo.post}}
          </div>
          <div class="user-intro">
            <i class="iconfont icon-user"></i>
            {{userInfo.introduce}}
          </div>
        </div>
        <div class="user-action">
          <div class="user-call">
            <i class="iconfont icon-weibo"></i>
            <i class="iconfont icon-changyonglogo33"></i>
            <i class="iconfont icon-weixin"></i>
          </div>
          <div>
            <router-link to="/user/setting" tag="button" class="w-button">编辑个人资料</router-link>
          </div>
        </div>
      </div>

      <div class="user-nav">
        <ul>
          <router-link
            v-for="item in nav"
            :key="item.index"
            :to="item.link"
            tag="li"
          >{{item.name}} {{userInfo[item.key]}}</router-link>
        </ul>
      </div>

      <div>
        <router-view></router-view>
      </div>
    </div>

    <div class="user-right">
      <div class="user-right-nav">
        <div class="about-user">
          <span class="side-title">个人成就</span>
          <span>
            <i class="iconfont icon-like"></i>
            获得赞数 {{userInfo.total_like}} 次
          </span>
          <span>
            <i class="iconfont icon-yanjing"></i>
            文章被阅读 {{userInfo.total_views}} 次
            <!-- 获得阅读数 {{userInfo.totalCollectionsCount}} -->
          </span>
        </div>
      </div>

      <div class="user-right-nav">
        <div class="user-attn">
          <div>
            <div>关注了</div>
            <p>{{userInfo.attentions}}</p>
          </div>
          <div>
            <div>关注者</div>
            <p>{{userInfo.followers}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "home",
  data() {
    return {
      nav: [
        {
          name: "动态",
          key: "",
          link: "/user"
        },
        {
          name: "专栏",
          key: "",
          link: "/user/zl"
        },
        {
          name: "沸点",
          key: "active_nums",
          link: "/user/list/pins"
        },
        {
          name: "分享",
          key: "",
          link: "/user/share"
        },
        {
          name: "赞",
          key: "",
          link: "/user/likes"
        },
        {
          name: "小册",
          key: "",
          link: "/user/xiaoce"
        },
        {
          name: "更多",
          key: "",
          link: "/user/more"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["userInfo"])
  }
};
</script>

<style lang="scss">
.content-main{
  margin-top: 8rem;
}
.user-home {
  max-width: 960px;
  margin: auto;
  display: flex;
  .user-left {
    .user-info-main {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 700px;
      background-color: white;
      padding: 20px;
      .user-avator {
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
      .user-info {
        flex-grow: 1;
        padding: 0 10px;
        font-size: 14px;
        color: gray;
        .user-name {
          font-size: 24px;
          color: black;
          font-weight: bolder;
          margin-bottom: 10px;
        }
        div {
          i {
            margin-right: 10px;
          }
        }
      }
    }
    .user-nav {
      ul {
        font-size: 18px;
        background-color: white;
        margin-top: 10px;
        border-bottom: 1px solid gainsboro;
        li {
          width: 100%;
          text-align: center;
          padding: 10px 0;
        }
        .router-link-exact-active {
          color: #007fff;
          border-bottom: 1px solid;
        }
      }
    }
  }
  .user-right {
    display: flex;
    flex-direction: column;
    .user-right-nav {
      font-size: 14px;
      margin: 0 0 10px 10px;
      padding: 10px;
      background-color: white;
    }
    .user-attn {
      display: flex;
      justify-content: space-around;
      font-size:16px;
      font-weight: bolder;
      p{
        text-align: center;
        margin: 10px 0;
      }
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
    }
  }
  .user-action {
    display: flex;
    flex-direction: column;
    .user-call {
      text-align: right;
      margin-bottom: 20px;
      i {
        margin-left: 10px;
        font-size: 24px;
      }
    }
    .w-button {
      padding: 4px 8px;
      font-size: 16px;
    }
  }
}
</style>
