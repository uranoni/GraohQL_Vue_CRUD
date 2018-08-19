<template>
  <div class="about">
    <form @submit.prevent="onSubmitHandler">
      <input type="text" placeholder="email" v-model="email">
      <input type="text" placeholder="firstName" v-model="firstName">
      <input type="text" placeholder="lastName" v-model="lastName">
      <button>submit</button>
    </form>
  </div>
</template>
<script>
import { GET_POSTS, ADD_PERSON } from "../queries/graphql";

export default {
  data: () => ({
    email: "",
    firstName: "",
    lastName: ""
  }),
  methods: {
    onSubmitHandler() {
      this.$apollo.mutate({
        mutation: ADD_PERSON,
        variables: {
          email: this.email,
          firstName: this.firstName,
          lastName: this.lastName
        }
        //   update: (store, { data: { newTag } }) => {
        //   // Read the data from our cache for this query.
        //   const data = store.readQuery({ query: TAGS_QUERY })
        //   // Add our tag from the mutation to the end
        //   data.tags.push(newTag)
        //   // Write our data back to the cache.
        //   store.writeQuery({ query: TAGS_QUERY, data })
        // },
      });
    }
  }
};
</script>
