<template>
  <div
    class="modal-bg"
    @click="closeModal">
    <Loading
      v-if="!movie"
      style="color:#fff" />
    <div
      v-else
      class="modal"
      @click.stop>
      <div class="image-wrap">
        <img
          v-if="!movie.Poster || movie.Poster === 'N/A'"
          src="image/NA.png"
          alt="N/A" />
        <img
          :src="movie.Poster"
          :alt="movie.Title" />
      </div>
      <div class="movie-description">
        <h2>{{ movie.Title }}</h2>
        <p class="plot">
          {{ movie.Plot }}
        </p>

        <h3>Actors</h3>
        <p>{{ movie.Actors }}</p>

        <h3>Director</h3>
        <p>{{ movie.Director }}</p>
        
        <h3>Genre</h3>
        <p>{{ movie.Genre }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits:['update:modelValue'],
  computed:{
    movie(){
      return this.$store.state.movie.movie
    }
  },
  methods:{
    closeModal(){
      this.$emit('update:modelValue', false)
    }
  }
}
</script>

<style lang="scss" scoped>

.modal-bg{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: rgba(black, .7);
  cursor: pointer;
}
.modal{
  position: absolute;
  display: flex;
  justify-content: center;
  width: 1000px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  border-radius: 25px;
  overflow: hidden;
  cursor: default;
  @include media(desktop) {
    width: 90%;
  }
  .image-wrap{
    width: 50%;
    background: #fff;
    img{
      height: 100%;
      width: 100%;
    }
    @include media(mobile) {
      display: none;
    }
  }
  .movie-description{
    width: 50%;
    background: #fff;
    padding: 30px;
    box-sizing: border-box;
    overflow: auto;
    @include media(tablet) {
      padding: 20px;
    }
    @include media(mobile) {
      width: auto;
    }
    .plot{
      height: 250px;
      overflow: auto;
      &::-webkit-scrollbar {
        width: 5px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: $gray-color;
        border-radius: 5px;
      }
      &::-webkit-scrollbar-track {
        background-color: #ddd;
        border-radius: 5px;
      }
      @include media(tablet) {
        height: 150px;
      }
    }
    h2{
      font-size: 50px;
      font-weight: bold;
      margin-top: 40px;
      margin-bottom: 20px;
      @include media(tablet) {
        font-size: 40px;
        margin-top: 20px;
      }
    }
    h3{
      margin: 25px 0 10px;
      font-weight: bold;
      font-size: 20px;
      @include media(tablet) {
        font-size: 18px;
        margin-top: 20px;
      }
    }
    p{
      color: $test-color;
      line-height: 1.5;
      @include media(tablet) {
        font-size: 14px;
        margin-top: 20px;
      }
    }
  }
}
</style>