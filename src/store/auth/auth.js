import { Auth } from "aws-amplify";
export const auth = {
      namespaced: true,
      state: { user: null },
      mutations: {
            setUser(state, payload) {
                  state.user = payload;
            }

      },

  actions: {
      async login({ commit }, { username, password }) {
            alert("log in in auth.js called")
            try {
                await Auth.signIn({
                    username,
                    password
                });
                const userInfo = await Auth.currentUserInfo();
                commit("setUser", userInfo);
                return Promise.resolve("Success");


            } catch (error) {
                console.log(error);
                return Promise.reject(error);
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
