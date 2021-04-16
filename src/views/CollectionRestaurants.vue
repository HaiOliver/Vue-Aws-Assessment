/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
<template>
  <div>
    <h3 class="text-7xl font-semibold antialiased hover:text-gray-600 text-opacity-100">Create Or Choose An Collection of Restaurant</h3>
    <div class="flex flex-col m-auto w-full">
      <h3 class="text-3xl antialiased hover:text-purple-600 text-opacity-100"><span class="text-red-600 font-bold ">Story</span>: Under unpredictable Covid-19 era, we sadly cannot go out with our friend to sharing our moment together, that would be better if we can organized all restaurants in collection for multiple purposes such
      as my favorite restaurant, dine in or take out group. </h3>
    </div>

    <div class="flex flex-col m-auto w-64">
      <input
        class="my-4 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        placeholder="Type Collection Name ..."
        type="text"
        v-model="collectionRestaurantName"
      />
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-8 rounded" @click="createCollectionRestaurant()">Create Collection</button>
    </div>


    <hr />
    <h5 class="text-4xl mt-4 antialiased hover:text-red-500 text-opacity-100">List Of Collections</h5>
    <div class="flex flex-wrap w-full m-auto justify-center">
      <div
        v-for="(collection, idx) in collectionRestaurant"
        :key="idx"
        class="cursor-pointer mt-4 ml-4 w-3/12 h-24 shadow-xl flex items-center justify-center"
        @click="openCollectionDetail(collection)"
      >
        <div class="text-3xl mt-4 antialiased hover:text-blue-500 text-opacity-100">{{ collection.name }}</div>
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

      console.log("🚀 ~ file: CollectionRestaurants.vue ~ line 41 ~ openCollectionDetail ~ collection.id", collection.id)
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