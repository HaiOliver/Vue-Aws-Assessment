/* eslint-disable prettier/prettier */
import { API, graphqlOperation } from "aws-amplify";
import { createCollectionRestaurants } from "@/graphql/mutations";
import { getCollectionRestaurants } from "@/graphql/queries";
import { listCollectionRestaurantss } from '@/graphql/queries';
// import { createPhoto as createPhotoMutation } from "@/graphql/mutations";
// import { uuid } from "uuidv4";
// import awsconfig from "@/aws-exports";



export const collectionRestaurantInfo = {
    namespaced: true,
    state: { collectionRestaurant: null },
    mutations: {
        setCollectionRestaurant(state, payload) {
            state.collectionRestaurant = payload;
        }
    },
    actions: {
          // ? Creat single collection
        async createCollectionRestaurant(_, newCollection) {
            try {
                await API.graphql(graphqlOperation(createCollectionRestaurants, { input: newCollection }))

            //     dispatch("getAlbumsData");

            } catch (error) {
                console.error("createalbum", error)


            }
        },
        // Get single 1 collection
        async getRestaurantCollections(_, collectionRestaurantId) {
            return await API.graphql(
                graphqlOperation(getCollectionRestaurants, { id: collectionRestaurantId })
            )
        },

        // ! Load all collections
        async getListAllCollectionRestaurant({ commit }) {
            const collectionRestaurantData = await API.graphql(graphqlOperation(listCollectionRestaurantss));
            commit("setCollectionRestaurant", collectionRestaurantData.data.listCollectionRestaurantss.items);
        },
      //   async createPhoto(_, data) {
      //       const {
      //           aws_user_files_s3_bucket_region: region,
      //           aws_user_files_s3_bucket: bucket
      //       } = awsconfig;
      //       const { file, type: mimeType, id } = data;
      //       const extension = file.name.substr(file.name.lastIndexOf(".") + 1);
      //       const photoId = uuid();
      //       const key = `images/${photoId}.${extension}`;
      //       const inputData = {

      //           id: photoId,
      //           photoAlbumId: id,
      //           contentType: mimeType,
      //           fullsize: {
      //               key,
      //               region,
      //               bucket
      //           }
      //       }

      //       //s3 bucket storage add file to it
      //       try {
      //           await Storage.put(key, file, {
      //               level: "protected",
      //               contentType: mimeType,
      //               metadata: { albumId: id, photoId }
      //           })
      //           await API.graphql(
      //               graphqlOperation(createPhotoMutation, { input: inputData })
      //           )
      //           return Promise.resolve("success");


      //       } catch (error) {
      //           console.log("createPhoto error", error)
      //           return Promise.reject(error);

      //       }
      //   }

    },
    getters: {
        collectionRestaurant: (state) => state.collectionRestaurant
    }
}