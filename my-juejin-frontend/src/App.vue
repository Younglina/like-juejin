<style lang="scss">
@import "./app.scss";
</style>

<template>
  <div id="app">
    <my-header :toggleShow="offsetProgress"></my-header>
    <div class="content-main">
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/my-header";
export default {
  name: "app",
  data() {
    return {
      offsetProgress: true,
    };
  },
  components: { MyHeader },
  methods:{
  },
  mounted() {
   
  }
};
</script>
