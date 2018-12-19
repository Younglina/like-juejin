<template>
  <div id="detail">
    <div class="post-detail">
      <div class="top-user">
        <img class="user-avator" :src="postInfo.user.avatarLarge" alt>
        <div class="post-smaple">
          <span>{{postInfo.user.username}}</span>
          <div>
            <span>{{postInfo.createdAt.substr(0,10)}}</span>
            <span>阅读 {{postInfo.viewsCount}}</span>
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
          <span><i class="iconfont icon-like"></i> 获得赞数 {{postInfo.user.totalCollectionsCount}}</span>
          <span><i class="iconfont icon-yanjing"></i> 获得阅读数 {{postInfo.user.totalCollectionsCount}}</span>
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
      postInfo: ""
    };
  },
  mounted() {
    this.axios({
      url:
        "/detail/getDetailData?src=web&type=entry&postId=5c19c692e51d450bb60ccea8",
      method: "get"
    }).then(res => {
      this.postInfo = res.data.d;
    });
    this.axios({
      url:
        "/detail/getDetailData?src=web&type=entryView&postId=5c19c692e51d450bb60ccea8",
      method: "get"
    }).then(res => {
      this.content = res.data.d.transcodeContent.replace("↵", "");
    });
  }
};
</script>

<style lang='scss'>
.cate-list,
.nav-hr {
  display: none;
}

#detail {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  font-size: 14px;
  max-width: 960px;
  margin: auto;
  .post-detail {
    background-color: white;
    width: 700px;
    padding: 2rem;
  }
  .post-side {
    > div {
      background-color: white;
      padding: 1rem;
    }
    .side-title{
        border-bottom: 1px solid gainsboro;
        margin-bottom: 1rem;
    }
    .about-user{
        display: flex;
        flex-direction: column;
        span{
            margin-top: 1rem;
            i{
                color:#7bb9ff;
                margin-right: 1rem;
                background-color: #e1efff;
                padding: 5px;
                border-radius: 50%;
            }
        }
    }
  }
  .top-user {
    display: flex;
    align-items: center;
    font-size: 14px;
    .user-avator {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
    .post-smaple {
      margin-left: 1rem;
    }
  }
  img {
    width: 40rem;
    height: 25rem;
  }
}
</style>