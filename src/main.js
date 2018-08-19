import Vue from 'vue';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo from 'vue-apollo';

import App from './App.vue';
import router from './router';
import store from './store';

const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:8080/graphql',
});

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});


const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

// Install the vue plugin
Vue.use(VueApollo);

Vue.config.productionTip = false;

new Vue({
  provide: apolloProvider.provide(),
  router,
  store,
  render: h => h(App),
}).$mount('#app');

