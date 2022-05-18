<template>
  <header>
    <h1>
      <router-link to="/">
        <img
          src="image/logo.png"
          alt="Logo" />
      </router-link>
    </h1>
    <input
      ref="content"
      style="background-image: url('image/search-icon.svg')"
      class="search-input"
      type="text" 
      placeholder="Search or enter movie title"
      @keyup.enter="search" />
    <button
      class="search-btn"
      style="background: center/cover no-repeat url('image/search-btn.png')"
      @click="search"></button>
  </header>
</template>

<script>
import router from '~/routes'

export default {
  watch:{
    $route(){
      this.request()
    }
  },
  methods:{
    async search(){
      const { value } = this.$refs.content
      if(value.length < 2) return
      await router.push({
        name: 'search',
        params: {
          word: value
        }
      })
      this.$refs.content.value = ''
      this.request()
    },
    async request(){
      const { word } = await this.$route.params
      if(!word)return
      await this.$store.dispatch('movie/searchMovie', { search: word })
    }
  }
}
</script>

<style scoped lang="scss">
header{
  display: flex;
  margin: 50px 30px 0;
  box-sizing: border-box;
  height: 150px;
  @include media(tablet) {
    margin: 30px 20px 0;
    height: 126px;
  }
}
h1 {
  align-self: flex-end;
  img{
    display: block;
    width: 190px;
    cursor: pointer;
    @include media(tablet) {
      width: 150px;
    }
    @include media(mobile) {
    display: none;
  }
  }
}
.search-input{
  height: 50px;
  flex-grow: 1;
  border-radius: 5px;
  border: none;
  font-size: 20px;
  margin: 36px 10px 0 40px;
  padding-left: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  outline: none;
  background-repeat: no-repeat;
  background-position: 10px;
  @include media(tablet) {
    height: 40px;
    font-size: 16px;
    margin: 36px 10px 0 20px;
    padding-left: 40px;
  }
  @include media(mobile) {
    margin-left: 0;
    margin-right: 0;
    font-size: 14px;
  }
}
.search-btn{
  align-self: flex-start;
  width: 135px;
  height: 100px;
  border: none;
  margin: none;
  cursor: pointer;
  transition: all .5s;
  &:hover{
    transform: rotate(5deg);
  }
  @include media(tablet) {
    height: 80px;
  }
}
</style>
