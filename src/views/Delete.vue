<template>
    <div>
        <form @submit.prevent="onSubmitHandler">
            <input type="email" v-model="email">
            <button></button>
        </form>
        <ul>
            <li v-for="p in people" :key="p.id">
                {{ p.id }} {{p.email}}
                <button @click="clickBtn(p.email)">delete</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { DELETE_PERSON, GET_PERSON } from "../queries/graphql";
export default {
  data: () => {
    return {
      email: "",
      people: null
    };
  },
  apollo: {
    people: {
      query: GET_PERSON
    }
  },
  methods: {
    clickBtn(email) {
      this.$apollo
        .mutate({
          mutation: DELETE_PERSON,
          variables: {
            email
          }
          // refetchQueries: [{ query: GET_PERSON }]
        })
        .then(rs => console.log(rs))
        .catch(err => console.log("err: ", err));
    }
  }
};
</script>
