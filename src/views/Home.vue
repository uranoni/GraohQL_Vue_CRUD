<template>
  <div class="home">
    <pre>{{ posts }}</pre>
  </div>
</template>

<script>
// @ is an alias to /src
import { GET_POSTS } from "../queries/graphql";

export default {
  name: "home",
  data: () => ({
    posts: null
  }),
  apollo: {
    posts: {
      query: GET_POSTS
    }
  }
};
</script>
