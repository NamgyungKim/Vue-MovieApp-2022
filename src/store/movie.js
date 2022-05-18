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
        if (state.page * 30 > state.totalResults) return
          state.page += 1
      } else {
        state.searchWord = search
        commit('resetState')
      }
      try {
        const start = state.page * 3 - 2
        const end = state.page * 3
        for (let i = start; i <= end; i++){
          let currentResults = state.movies.length
          if (state.totalResults !== 0 && currentResults >= state.totalResults) {
            state.loading = false
            return
          }
          const param = { s: search, page: i }
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
        state.loading = false
      }
      state.loading = false
    },

    async movieDetail({ state }, payload) {
      state.modalLoading = true
      const { i } = payload
      try {
        const param = { i, plot: 'full' }
        state.movie = await _request({ param })
      } catch(e) {
        console.error(e)
      }
      state.modalLoading = false
    }
  },
}

async function _request(params) {
  const data = await axios.post('/.netlify/functions/movie', JSON.stringify(params))
  return data.data
}
