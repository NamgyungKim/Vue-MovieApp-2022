<template>
  <ul>
    <li
      v-for="movie in movies"
      :key="movie.imdbID">
      <MovieCard
        v-model="isShowModal"
        :movie="movie" />
    </li>
  </ul>
  <Loading v-if="isLoading" />
  <Modal
    v-if="isShowModal"
    v-model="isShowModal" />
</template>

<script>
import MovieCard from '~/components/MovieCard'
import Modal from '~/components/Modal'
export default {
  components:{
    MovieCard,
    Modal
  },
  data(){
    return{
      isShowModal: false
    }
  },
  computed:{
    movies(){
      return this.$store.state.movie.movies
    },
    isLoading(){
      return this.$store.state.movie.loading
    }
  }
}
</script>

<style lang="scss" scoped>
ul{
  margin: 0 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  box-sizing: border-box;
}
</style>