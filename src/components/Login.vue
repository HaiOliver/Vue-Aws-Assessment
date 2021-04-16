<template>
  <div>
    <form class="flex flex-col items-center" @submit.prevent="login">
      <div class="flex flex-col user">
        <label class="block text-gray-700 text-3xl font-bold mb-2" for="userName">User Name</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          v-model="username"
          placeholder="Type usename"
          id="userName"
        />
      </div>
      <div class="flex flex-col mt-10">
        <label class="block text-gray-700 text-3xl font-bold mb-2" for="password">Password</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          placeholder="Type password"
          v-model="password"
        />
      </div>
      <!-- eslint-disable -->
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-8 rounded">Sign in</button>
    </form>
    <div class="text-red-600">{{ error.message }}</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    username: "",
    password: "",
    email: "",
    error: "",
  }),
  methods: {

    ...mapActions({
      loginVue: "auth/login",
    }),

    async login() {
      try {
        await this.loginVue({
          username: this.username,
          password: this.password,
        });
        this.$router.push("/collectionrestaurants");
      } catch (error) {
        this.error = error;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>