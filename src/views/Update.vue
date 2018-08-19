<template>
    <div>
        <form @submit.prevent="onSubmitHandler">
            <!-- <input type="email" v-model="email"> -->
            <input type="text" v-model="firstName">
            <input type="text" v-model="lastName">

            <button></button>
        </form>
        <ul>
            <li v-for="p in people" :key="p.id">
                {{ p.id }} {{p.email}} {{p.firstName}} {{p.lastName}}
                <button @click="clickBtn(p.email,firstName,lastName)">update</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { UPDATE_PERSON, GET_PERSON } from "../queries/graphql";
export default {
  data: () => {
    return {
      email: "",
      firstName: "",
      lastName: "",
      people: null
    };
  },
  apollo: {
    people: {
      query: GET_PERSON
    }
  },
  methods: {
    clickBtn(email, firstName, lastName) {
      this.$apollo
        .mutate({
          mutation: UPDATE_PERSON,
          variables: {
            email,
            firstName,
            lastName
          }
          // refetchQueries: [{ query: GET_PERSON }]
        })
        .then(rs => console.log(rs))
        .catch(err => console.log("err: ", err));
    }
  }
};
</script>
