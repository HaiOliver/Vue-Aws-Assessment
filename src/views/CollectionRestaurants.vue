/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
<template>
  <div>
    <h3 class="text-3xl">Create Or Choose An Album</h3>
    <div class="flex flex-col m-auto w-64">
      <input
        class="my-4 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        placeholder="Collection Name..."
        type="text"
        v-model="collectionRestaurantName"
      />
      <button class="btn-blue mb-4" @click="createCollectionRestaurant()">Create Collection</button>
    </div>
    <div class="text-red-500">{{ error }}</div>
    <hr />
    <h5 class="mt-4 text-2xl">List Of Collections</h5>
    <div class="flex flex-wrap w-full m-auto justify-center">
      <div
        v-for="(collection, idx) in collectionRestaurant"
        :key="idx"
        class="cursor-pointer mt-4 ml-4 w-3/12 h-24 shadow-xl flex items-center justify-center"
        @click="openCollectionDetail(collection)"
      >
        <div class="text-2xl">{{ collection.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {

  async mounted() {
    this.$store.dispatch("collectionRestaurantInfo/getListAllCollectionRestaurant");
  },

  data: () => ({ collectionRestaurantName: "", error: "" }),
  methods: {
    openCollectionDetail(collection) {

      console.log("🚀 ~ file: CollectionRestaurants.vue ~ line 41 ~ openCollectionDetail ~ collection", collection)
      this.$router.push(`/restaurant/${collection.id}`);
    },
    async createCollectionRestaurant() {
      this.error = "";
      if (!this.collectionRestaurantName) {
        alert("Please enter an collection name");
        return;
      }
      const newcollectionRestaurant = {
        name: this.collectionRestaurantName,
        owner: this.user.username,
        ownerId: this.user.id,
      };
      this.$store.dispatch("collectionRestaurantInfo/createCollectionRestaurant", newcollectionRestaurant);
    },
  },

  computed: {
    ...mapGetters({
      user: "auth/user",
      collectionRestaurant: "collectionRestaurantInfo/collectionRestaurant",
    }),
  },
};
</script>

<style lang="scss" scoped>
</style>