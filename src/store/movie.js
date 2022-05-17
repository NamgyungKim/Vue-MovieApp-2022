import axios from 'axios'

export default {
  namespaced: true,
  state() {
    return {
      searchWord: '',
      movies: [],
      movie: {},
      page: 1,
      totalResults: 0,
      loading: false,
      modalLoading: false
    }
  },
  getters: {},
  mutations: {
    resetState(state) {
      state.movies = []
      state.page = 1
      state.totalResults= 0
    }
  },
  actions: {
    async searchMovie({ state, commit }, payload) {
      state.loading = true
      const { search } = payload
      if (search === state.searchWord) {
        if(state.page * 30 > state.totalResults)return
        state.page += 1
      } else {
        state.searchWord = search
        commit('resetState')
      }
      try {
        for (let i = state.page * 3 - 2; i <= state.page * 3; i++){
          if(state.totalResults !== 0 && i * 10 > state.totalResults){
            state.loading = false
            return
          }
          const param = { s: state.searchWord, page: i }
          const { Search, totalResults } = await _request({ param })
          if (!Search) {
            state.loading = false
            return
          } 
          state.movies.push(...Search)
          state.totalResults = totalResults
        }
      } catch (e) {
        console.error(e)
      }
      state.loading = false
    },
    async movieDetail({ state }, payload) {
      const { i } = payload
      try {
        const param = { i, plot: 'full' }
        state.movie = await _request({ param })
      } catch(e) {
        console.error(e)
      }
    }
  },
}

async function _request(params) {
  const apikey = '7035c60c'
  return await axios.get(`http://www.omdbapi.com?apikey=${apikey}`,
     {params: params.param} )
    .then(function (response) {
      return response.data
    }).catch((e) => {
      console.log(e)
    })
}
