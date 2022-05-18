<template>
  <div class="wrap">
    <Header />
    <RouterView />
  </div>
</template>

<script>
import Header from '~/components/Header'
export default {
  components:{
    Header
  },
  data() {
    return {
      msg: 'Hello Webpack!!',
      search: 'frozen'
    }
  }
}
</script>

<style lang="scss">

.wrap{
  margin:  auto;
  max-width: 1080px;
}
</style>
