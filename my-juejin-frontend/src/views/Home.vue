<template>
  <div id="home">
      <post-list></post-list>
  </div>
</template>

<script>
import PostList from '@/components/post-list'
export default {
  name: 'home',
  components:{PostList},
  data() {
    return {
     
    };
  },
  mounted(){
  }
}
</script>
<style lang="scss" scoped>
  
</style>
