<template>
  <div>
    <div v-for="item in lists" class="active-list" :key="item.id">
      <div class="user-top">
        <img class="actorImg" :src="user.avator" alt>
        <div class="user-info">
          <div class="user-name">{{user.name}}</div>
          <div class="user-blone">
            <span>{{user.post}}</span>
            <span v-if="item.company">@ {{user.company}}</span>
          </div>
        </div>
      </div>
      <div class="active-content">
        <span>{{item.content}}</span>
        <div class="imgs-main">
          <div
            class="imgs-div"
            v-if="item.imgs"
            :style="`background-image:url(${item.imgs});`"
            :key="imgs.index"
          ></div>
        </div>
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
</template>
<script>
export default {
  data(){
      return{
          lists:[],
          user:''
      }
  },
  mounted(){
      this.user = this.$store.getters.userInfo;
      this.axios.get('/local/get-user-pins?id='+2).then(res=>{
          this.lists = res.data.pins
      })
  }
};
</script>
<style lang="scss" scoped>
.active-list {
  margin-bottom: 10px;
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
}
</style>
