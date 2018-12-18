<template>
  <div id="user-setting" class="content-show">
    <div class="content">
    <h2>个人资料</h2>
    <ul>
      <li>
        <span class="item-keys">头像</span>
        <div class="center-div">
          <img :src='"http://"+user.avator' class="user-avator">
          <div class="upload-div">
            <div>支持 jpg、png 格式大小 5M 以内的图片</div>
            <button type="submit" class="upload-btn" @click="$refs.uploadInput.click()">点击上传</button>
            <input type="file" class="upload-input" v-show="false" ref="uploadInput" @change="uploadImg">
          </div>
        </div>
      </li>
      <li v-for="(item,key) of user" v-if="key != 'avator' " :key="key">
        <span class="item-keys">{{keyName[key]}}</span>
        <div class="center-div">
          <input type="text" v-model="user[key]" @click="shwoKey=key" :placeholder="'请填写你的'+keyName[key]">
        </div>
        <button class="user-edit" v-if="shwoKey!=key" @click="shwoKey=key">
          <i class="iconfont icon-shezhi_tougao_edit"></i>
          <span>修改</span>
        </button>
        <button class="user-edit" v-if="shwoKey==key">
          <span @click="handelSave(key)">保存</span>
          <span @click="shwoKey=''">取消</span>
        </button>
      </li>
    </ul>
  </div>
  </div>
</template>
<script>
import COS from "cos-js-sdk-v5";
export default {
  name: "",
  data() {
    return {
      myCos: {},
      user: {},
      old_user:{},
      toggleShow:true,
      shwoKey:'',
      keyName: {
        name: "用户名",
        avator: "头像",
        post: "岗位",
        company: "公司",
        introduce: "个人描述",
        page: "个人主页"
      },
      avator:
        "izaya-1256042946.cos.ap-chengdu.myqcloud.com/565b8f7a18c8de9a.jpg"
    };
  },
  mounted() {
    this.myCos = new COS({
      SecretId: "AKIDe6KK9ktWcU8bpOurSpysWvJRLzQOnZXH",
      SecretKey: "fBUYR5TijV2JOHvKabaLq79vSlq57uYx"
    });
    this.getUser();
  },
  methods: {
    getUser() {
      this.axios({
        url: "/local/get-user",
        method: "get",
        params: {
          id: 2
        }
      }).then(res => {
        this.user = res.data.user[0];
        this.old_user = Object.assign({},this.user)
      });
    },
    handelSave(key) {
      if(this.old_user[key]==this.user[key]){this.shwoKey=''; return;}
      this.axios({
        url: "/local/set-user",
        method: "post",
        data: {
          id: 2,
          [key]:this.user[key]
        }
      }).then(res => {
        this.old_user[key] = this.user[key];
        this.shwoKey='';
      });
    },
    uploadImg(e) {
      let self = this;
      this.myCos.putObject(
        {
          Bucket: "izaya-1256042946",
          Region: "ap-chengdu",
          Key: e.target.files[0].name,
          StorageClass: "STANDARD",
          Body: e.target.files[0], // 上传文件对象
          onProgress: function(progressData) {
            self.avator = progressData.Location;
            console.log(JSON.stringify(progressData));
          }
        },
        function(err, data) {
          console.log(err || data);
          console.log(data.Location);
        }
      );
      //   let data = new FormData();
      //   data.append("file", e.target.files[0]);
      //   this.axios({
      //     url: "https://cdn-ms.juejin.im/v1/upload?bucket=gold-user-assets",
      //     method:'POST',
      //     headers: {
      //       "Content-Type": "multipart/form-data"
      //     },
      //     data: data
      //   }).then(res=>{
      //       console.log(res);
      //   })
    }
  }
};
</script>
<style lang='scss' scoped>
#user-setting {
  padding: 30px 0;
  margin: 0 auto;
  width: 58rem;
  margin-top: 1rem; 
  font-size: 14px;
  .content{
    padding: 0 2rem;
  }
}
.user-avator {
  width: 70px;
  height: 70px;
}
h2 {
  padding-left: 20px;
}
ul {
  flex-direction: column;
  li {
    cursor: initial;
    display: flex;
    justify-content: space-between;
    padding: 24px 20px;
    border-top: 1px solid gainsboro;
    align-items: center;
    .item-keys {
      width: 120px;
    }
    .user-edit {
      border: none;
      outline: none;
      color: #007fff;
      cursor: pointer;
      font-size: 16px;
      span {
        margin-left: 5px;
      }
    }
    .center-div {
      flex-grow: 1;
      display: flex;
      input{
        width: 100%;
        height: 2rem;
      }
      .upload-div {
        margin-left: 15px;
        div {
          font-size: 14px;
          color: gray;
        }
        .upload-btn {
          background-color: #007fff;
          margin-top: 10px;
          cursor: pointer;
          color: white;
          font-size: 12px;
          padding: 6px 15px;
          border-radius: 2px;
        }
      }
    }
  }
}
</style>