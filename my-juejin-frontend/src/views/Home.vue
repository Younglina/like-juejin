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
  
}
</script>
<style lang="scss" scoped>
</style>
