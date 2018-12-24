<template>
  <div class="w-notify" :class="type" v-show="isShow">
    <span>{{message}}</span>
  </div>
</template>
<script>
export default {
  name: "w-notify",
  data() {
    return {
      message: '',
      isShow: false,
      type:''
    };
  },
  mounted(){
    const timer = setTimeout(()=>{
        this.isShow=false;
        clearTimeout(timer);
    },2000)
  }
};
</script>
<style lang="scss" scoped>
.w-notify {
  position: fixed;
  right: 40px;
  top: 80px;
  z-index: 1000;

  border: 1px solid;

  padding: 10px;
  border-radius: 3px;
}
.add {
  color: #007fff;
  background-color: #007fff30;
}
.push {
  color: #6cbd45;
  background-color: #6cbd4530;
}
</style>
