<template>
  <p
    v-if="movies.length === 0 && !isLoading"
    class="no-results">
    No results were found for your search
  </p>
  <div v-else>
    <ul>
      <li
        v-for="movie in movies"
        :key="movie.imdbID">
        <MovieCard
          v-model="isShowModal"
          :movie="movie" />
      </li>
    </ul>
    <button
      v-if="!isLoading && movies.length < totalResults"
      @click="search">
      more
    </button>
  </div>
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
    },
    totalResults(){
      return this.$store.state.movie.totalResults
    },
  },
  methods:{
    async search(){
      const { word } = this.$route.params
      await this.$store.dispatch('movie/searchMovie', { search: word })
    }
  }
}
</script>

<style lang="scss" scoped>
ul{
  margin: 0 30px 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  box-sizing: border-box;
}
.no-results{
  margin: 100px 0;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
}
button{
  display: block;
  background: #fff;
  border: none;
  height: 50px;
  width: 200px;
  border-radius: 5px;
  margin: 50px auto;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all .4s;
  &:hover{
    background: rgba(#fff, $alpha: 0.8);
  }
}
</style>