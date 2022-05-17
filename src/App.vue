<template>
  <SearchBar />
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
</template>

<script>
import SearchBar from '~/components/SearchBar'
export default {
  components:{
    SearchBar
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
      await this.$store.dispatch('movie/searchMovie', { search: 'omg'})
      await this.$store.dispatch('movie/searchMovie', { search: 'omg'})
      await this.$store.dispatch('movie/searchMovie', { search: 'omg'})
      await this.$store.dispatch('movie/searchMovie', { search: 'omg'})
      console.log(this.$store.state.movie)
    }
  }
}
</script>

<style lang="scss">

body{
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
