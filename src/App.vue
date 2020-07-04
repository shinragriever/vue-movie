<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand">Omdb Movie Search</a>
      <form class="form-inline" @submit.prevent>
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="searchMovie"
        />
        <button
          class="btn btn-outline-success my-2 my-sm-0 mx-auto"
          @click="fetchMovies"
        >
          Search
        </button>
      </form>
    </nav>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      movies: null,
      searchMovie: null
    };
  },
  methods: {
    fetchMovies() {
      if (!(this.$router.currentRoute.path === "/")) {
        this.$router.push({ path: "/" });
      }
      this.$store.dispatch("fetchMovies", this.searchMovie);
    }
  }
};
</script>

<style lang="scss">
@media (max-width: 767px) {
  .btn {
    display: block;
    width: 100%;
  }
  h1 {
    font-size: 2rem;
  }
}
</style>
