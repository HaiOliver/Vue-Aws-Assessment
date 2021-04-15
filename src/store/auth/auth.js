import { Auth } from "aws-amplify";
export const auth = {
  namespace: true,
  state: { user: null },
  mutation: {
    setUser(state, payload) {
      state.user = payload;
    },
  },

  actions: {
    async login({ commit }, { username, password }) {
      try {
        // ! user sign in AWS
        await Auth.singIn({
          username,
          password,
        });

        const currentUser = await Auth.currentUserInfo();
        // ! commit state
        commit("setUser", currentUser);
        return Promise.resolve("Success");
      } catch (err) {
        console.log(
          "🚀 ~ file: auth.js ~ line 27 ~ loadingContainer ~ error",
          err
        );
        Promise.reject(err);
      }
    },

    // ! Log out
    async logout({ commit }) {
      // ? remove User
      commit("setUser", null);
      return await Auth.signOut();
    },

    // Confirm Sign Up
    async confirmSignUp(_, { username, code }) {
      try {
        await Auth.confirmSignUp(username, code);
        return Promise.resolve();
      } catch (err) {
        console.log("🚀 ~ file: auth.js ~ line 46 ~ confirmSignUp ~ err", err);
        Promise.reject(err);
      }
    },

    // Sign Up
    async signUp(_, { username, password, email }) {
      try {
        await Auth.signUp({
          username,
          password,
          attributes: {
            email,
          },
        });
        return Promise.resolve();
      } catch (err) {
        console.log("🚀 ~ file: auth.js ~ line 58 ~ signUp ~ err", err);
        Promise.reject(err);
      }
    },
    async authAction({ commit }) {
      const currentUser = await Auth.currentUserInfo();
      commit("setUser", currentUser);
    },
  },
  getters: {
    user: (state) => state.user,
  },
};
