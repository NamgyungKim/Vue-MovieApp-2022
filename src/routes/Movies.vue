<template>
  <ul>
    <li
      v-for="movie in movies"
      :key="movie.imdbID">
      <MovieCard :movie="movie" />
    </li>
  </ul>
</template>

<script>
import MovieCard from '~/components/MovieCard'
export default {
  components:{
    MovieCard
  },
  computed:{
    movies(){
      return this.$store.state.movie.movies
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