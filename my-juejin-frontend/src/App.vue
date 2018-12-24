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
  async mounted() {
    // try {
    //   const [
    //     { default: Scrollbar },
    //     { default: OverscrollPlugin }
    //   ] = await Promise.all([
    //     import("smooth-scrollbar"),
    //     import("smooth-scrollbar/plugins/overscroll")
    //   ]);
    //   const options = {
    //     alwaysShowTracks: false, // 保持滚动条轨迹可见。
    //     continuousScrolling: false, // 设置为true允许外部滚动条在当前滚动条到达边缘时继续滚动。
    //     renderByPixels: true, // 以整数像素值渲染每一帧，设置true为提高滚动性能
    //     damping: 0.2, // 阻尼系数，浮动值之间(0, 1)。值越低，滚动越平滑（绘制帧越多）。
    //     thumbMinSize: 20, // 滚动条拇指的最小尺寸。
    //     plugins: {
    //       overscroll: {
    //         effect: "glow",
    //         maxOverscroll: 150,
    //         damping: 0.2,
    //         glowColor: "#222a2d"
    //       }
    //     }
    //   };
    //   this._scrollbar = Scrollbar;
    //   Scrollbar.use(OverscrollPlugin);
      // this._scroll = Scrollbar.init(
      //   document.querySelector("#app"),
      //   options
      // );
      // this._scroll.addListener(status => {
      //   this.offsetProgress = (status.offset.y * 100) / status.limit.y < 20;
      // });
    // } catch (error) {
    //   console.error(error);
    // }
  }
};
</script>
