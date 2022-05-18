<template>
  <div class="movie-card">
    <div
      class="img-wrap"
      @click="openModal">
      <img
        v-if="!movie.Poster || movie.Poster === 'N/A'"
        src="image/NA.png"
        alt="N/A" />
      <img
        v-else
        :src="movie.Poster"
        :alt="movie.Title" />
    </div>
    <h2>{{ movie.Title }}</h2>
    <span>{{ movie.Year }}</span>
  </div>
</template>

<script>
export default {
  props:{
    movie:{
      type: Object,
      default: ()=> ({})
    }
  },
  emits:['update:modelValue'],
  methods: {
    async openModal(){
      this.$emit('update:modelValue', true)
      const { imdbID } = this.movie
      await this.$store.dispatch('movie/movieDetail', { i: imdbID })
    },
  }
}
</script>

<style lang="scss" scoped>
.movie-card{
  display: flex;
  flex-direction: column;
  width: calc( 1080px / 5 - 37px );
  .img-wrap{
    cursor: pointer;
    overflow: hidden;
    width: 100%;
    height: auto;
    filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.3));
    &:hover{
      filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.5));
    }
  }
  img{
    width: 100%;
    border-radius: 5px;
    transition: .5s;
    &:hover{
      transform: scale(1.05);
    }
  }
  h2{
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0 5px;
    word-wrap: break-word;
  }
  span{
    font-size: 14px;
  }
  @include media(desktop) {
    width: calc( 100vw/5 - 37px )
  }
  @include media(tablet) {
    width: calc( 100vw/4 - 37px )
  }
  @include media(mobile) {
    width: calc( 100vw/2 - 45px )
  }
}
</style>