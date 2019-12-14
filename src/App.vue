<template>
  <div>
    <router-view></router-view>
    <FooterNav v-show="$route.meta.isShowFooter"></FooterNav>
  </div>
</template>

<script type="text/ecmascript-6">
import FooterNav from '@/components/FooterNav/FooterNav.vue'
  export default {
    components:{
      FooterNav
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

 
</style>
