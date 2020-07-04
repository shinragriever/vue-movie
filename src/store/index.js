import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: null,
    movie: null,
    error: null
  },
  getters: {
    getMovies(state){
      return state.movies
    },
    getMovie(state){
      return state.movie
    }
  },
  mutations: {
    SET_MOVIES(state,payload){
      return state.movies = payload
    },
    SET_MOVIE(state,payload){
      return state.movie = payload
    },
    SET_ERROR(state,payload){
      return state.error = payload
    }
  },
  actions: {
    fetchMovies({commit}, m){
      m = m.replace(" ","-")
      
      axios
        .get(
          "http://www.omdbapi.com/?apikey=a5b69fbc&s="+m+"&type=movie"
        )
        .then(r => commit("SET_MOVIES",r.data.Search))
        .catch(e => commit("SET_ERROR",e))
    },
    fetchMovie({commit}, m){
      
      
      axios
        .get(
          "http://www.omdbapi.com/?apikey=a5b69fbc&i="+m+"&plot=full"
        )
        .then(r => commit("SET_MOVIE",r.data))
        .catch(e => commit("SET_ERROR",e))
    }
    }
  ,
  modules: {}
});
