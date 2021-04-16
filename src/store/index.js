// import Vue from "vue";
// import Vuex from "vuex";
import { auth } from "./auth/auth";
import { createStore } from 'vuex';
import {collectionRestaurantInfo} from "./collectionRestaurants/collection";

const store = createStore({
  modules: {
    auth,
    collectionRestaurantInfo
  }
});

export default store;


// Vue.use(Vuex);

// export default new Vuex.Store({
//   modules: {
//     auth,

//   }
// });
