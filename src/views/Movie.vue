<template>
<div>
  <div class="row">
    <h1>{{m.Title}} - ({{m.Year}})</h1>
    </div>
    <div class="row">
        <div class="col-md-4"><img :src="m.Poster" alt="Movie Poster"></div>
       <div class="col-md-8">{{m.Plot}}</div>
    </div>
<button @click="back">Back</button>


    {{ m }}
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
    back(){
        this.$router.go(-1)
    }
  }
};
</script>

<style></style>
