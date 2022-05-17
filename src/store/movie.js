import axios from 'axios'

export default {
  namespaced: true,
  state() {
    return {
      searchWord: '',
      movies: [],
      movie: {},
      page: 1,
      totalResults: 0
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
    async searchMovie({ state,commit }, payload) {
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
          if(state.totalResults !== 0 && i * 10 > state.totalResults)return
          const param = { s: search, page: i }
          const { Search, totalResults } = await _request({ param })
          state.movies.push(...Search)
          state.totalResults = totalResults
        }
      } catch (e) {
        console.error(e)
      }
    },
    async movieDetail({ state }, payload) {
      const { id } = payload
      try {
        const param = { i: id, plot: 'full' }
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