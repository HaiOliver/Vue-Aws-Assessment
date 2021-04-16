/* eslint-disable prettier/prettier */ /* eslint-disable prettier/prettier */
<template>
  <div  >
    <h3 class="text-7xl font-semibold antialiased hover:text-gray-600 text-opacity-100 ">Collection name: {{ collectionName }}</h3>
    <div
      class="flex flex-col w-full mt-10 items-center justify-center bg-grey-lighter"
    >
      <form
        enctype="multipart/form-data"
        novalidate
        @submit.prevent="addNewRestaurant()"
      >
        <div class="form-group">
          <label
            class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-green-600"
          >
            <svg
              class="w-8 h-8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
              />
            </svg>
            <span class="mt-2 text-base leading-normal">Upload a image</span>
            <input
              @change="onFileChange"
              accept="image/*"
              type="file"
              class="hidden"
            />
          </label>
        </div>
        <!-- =================================== -->
        <div class="form-group flex flex-col m-auto w-64">
          <input
            class="my-4 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            placeholder="add name restaurant ..."
            type="text"
            v-model="nameRestaurant"
          />
          <input
            class="my-4 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            placeholder=" add address ..."
            type="text"
            v-model="address"
          />
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-8 rounded" type="submit">
            Add New restaurant
          </button>
        </div>

        <!-- ================================= -->
      </form>
    </div>
    <div class="text-4xl mt-4 antialiased hover:text-red-500 text-opacity-100" >List Of Restaurants</div>
    <div
      class="flex flex-wrap p-10 justify-center m-auto w-full "
      v-if="restaurants"
    >
    <!-- ============================================== -->

      <div
        class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 shadow-lg m-1 "
        v-for="(restaurant, idx) in restaurants"
        :key="idx"
      >

        <article class="overflow-hidden shadow-lg">
                    <amplify-s3-image
                      level="protected"
                      :img-key="restaurant.fullsize.key"
                      class="w-4/12 block h-auto w-full"
                    >
                    </amplify-s3-image>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-3xl font-semibold antialiased hover:text-blue-600 text-opacity-100">
                             {{ restaurant.name }}
                    </h1>
                    <p class="text-grey-darker text-sm">
                        Create at: {{ restaurant.createdAt.slice(0,10) }}
                    </p>
                </header>

                <footer class="flex items-center justify-start leading-none p-2 md:p-4">
                        <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random">
                        <p class="ml-2 text-sm">
                            <span class="text-1xl font-semibold antialiased">Address:</span> {{ restaurant.address }}
                        </p>
                </footer>

            </article>



      </div>




      <!-- =================================== -->

    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getAllRestaurants();
  },
  data: () => ({
    restaurants: [],
    collectionName: "",
    address: "",
    nameRestaurant: "",
    selectedImage: "",
  }),
  methods: {
    async onFileChange(file) {
      if (!file.target || !file.target.files[0]) {
        alert("No image inserted yet !!");
        return;
      }
      this.selectedImage = file.target.files[0];
      // console.log("🚀 ~ file: Restaurant.vue ~ line 91 ~ onFileChange ~ this.selectedImage", this.selectedImage)
    },

    async addNewRestaurant() {
      try {
        await this.$store.dispatch(
          "collectionRestaurantInfo/createRestaurant",
          {
            file: this.selectedImage,
            id: this.id,
            address: this.address,
            name: this.nameRestaurant

          }
        );

        // ! Render all restaurants on pages
        this.getAllRestaurants();

        this.nameRestaurant = "";
        this.address = "";
        this.selectedImage = "";
      } catch (error) {
        console.log("error create restaurant", error);
      }
    },

    async getAllRestaurants() {
      const collection = await this.$store.dispatch(
        "collectionRestaurantInfo/getRestaurantCollections",
        this.id
      );

      this.restaurants =
        collection.data.getCollectionRestaurants.restaurants.items;

      console.log(
        "🚀 ~ file: Restaurant.vue ~ line 103 ~ getAllRestaurants ~ restaurants",
        collection.data
      );

      this.collectionName = collection.data.getCollectionRestaurants.name;
    },
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
};
</script>

<style scoped>
amplify-s3-image {
  --width: 75%;
}
</style>
