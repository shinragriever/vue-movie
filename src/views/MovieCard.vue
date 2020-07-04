<template>
  <div class="p-2">
    <div class="card" style="width: 20rem; col-sm-12 m-2 col-md-4">
      <img :src="movie.Poster" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{movie.Title}}</h5>
        <p class="card-text">
          Release Year: {{movie.Year}}
        </p>
        <router-link :to="movie.imdbID" class="btn btn-info btn-sm">more info...</router-link>
      </div>
    </div>
    

   
  </div>
</template>
<script>
export default {
    props: {
        movie: {
            type: Object
        }
    }
}
</script>
