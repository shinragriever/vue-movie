<template>
  <div>
    
    <div  class="row mt-4">
      <moviecard v-for="m in movies" :key="m.imdbID" :movie="m" class="mx-auto" />
    </div>
  </div>
</template>

<script>
import moviecard from "./MovieCard";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      
    }
  },
  components: {
    moviecard
  },
  computed: {
    ...mapGetters({movies:"getMovies"})
  }
};
</script>
