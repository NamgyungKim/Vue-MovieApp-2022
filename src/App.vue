<template>
  <div class="wrap">
    <Header />
    <RouterLink to="/">
      Home
    </RouterLink>
    <RouterLink to="/search/심슨">
      search
    </RouterLink>
    <RouterLink to="/123">
      notFound
    </RouterLink>
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
  },
  created(){
    this.searchMovie()
  },
  methods:{
    async searchMovie(){
      // await this.$store.dispatch('movie/searchMovie', { search: 'omg'})
      // await this.$store.dispatch('movie/searchMovie', { search: 'omg'})
      // await this.$store.dispatch('movie/searchMovie', { search: 'omg'})
      // await this.$store.dispatch('movie/searchMovie', { search: 'omg'})
     
    }
  }
}
</script>

<style lang="scss">

.wrap{
  margin:  auto;
  max-width: 1080px;
  @include media(desktop) {
    background: pink;
  }
  @include media(tablet) {
    background: $main-color;
  }
  @include media(mobile) {
    background: pink;
  }
}
</style>
