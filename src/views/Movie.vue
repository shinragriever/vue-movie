<template>
  <div class="container">
    <div class="row">
      <h1>{{ m.Title }} - ({{ m.Year }})</h1>
    </div>
    <div class="row">
      <div class="col-md-4"><img :src="m.Poster" alt="Movie Poster" /></div>
      <div class="col-md-8">
        <h6 class="mb-3">
          <span class="badge badge-info">{{ m.Rated }}</span> Released:
          {{ m.Released }} - Runtime : {{ m.Runtime }} - Genre: {{ m.Genre }}
        </h6>
        <p>{{ m.Plot }}</p>
        <p>
          <span class="font-weight-bold">Director:</span> {{ m.Director }}<br />
          <span class="font-weight-bold">Writer:</span> {{ m.Writer }}<br />
          <span class="font-weight-bold">Stars:</span> {{ m.Actors }}<br />
          <span class="font-weight-bold">Production:</span> {{ m.Production }}
        </p>
        <p>
          <span class="font-weight-bold">Metascore:</span> {{ m.Metascore }} |
          <span class="font-weight-bold">IMDB Rating:</span> {{ m.imdbRating }}
        </p>
        <p><span class="font-weight-bold">Awards:</span> {{ m.Awards }}</p>
      </div>
    </div>
    <div class="row mt-5">
      <button @click="back" class="btn btn-info btn-sm mx-auto">
        Back to search
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  created() {
    this.fetchMovie();
  },
  computed: {
    ...mapGetters({ m: "getMovie" })
  },
  methods: {
    fetchMovie() {
      this.$store.dispatch("fetchMovie", this.$route.params.id);
    },
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style></style>
