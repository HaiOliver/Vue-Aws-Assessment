// import Vue from "vue";
// import Vuex from "vuex";
import { auth } from "./auth/auth";
import { createStore } from 'vuex'

const store = createStore({
  modules: {
    auth
  }
})

export default store


// Vue.use(Vuex);

// export default new Vuex.Store({
//   modules: {
//     auth
//   }
// });
