/* eslint-disable prettier/prettier */
import { API, graphqlOperation,  Storage } from "aws-amplify";
import { createCollectionRestaurants } from "@/graphql/mutations";
import { getCollectionRestaurants } from "@/graphql/queries";
import { listCollectionRestaurantss } from '@/graphql/queries';
import { createRestaurant } from "@/graphql/mutations";
import { uuid } from "uuidv4";
import awsconfig from "@/aws-exports";



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
        async createCollectionRestaurant({dispatch}, newCollection) {
            try {
                await API.graphql(graphqlOperation(createCollectionRestaurants, { input: newCollection }))

                 dispatch("getListAllCollectionRestaurant");

            } catch (error) {
                console.error("line 29, error in createCollectionRestaurant", error)


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
        async createRestaurant(_, data) {
            const {
                aws_user_files_s3_bucket_region: region,
                aws_user_files_s3_bucket: bucket
            } = awsconfig;
            const { file, type: mimeType, id } = data;

            const extension = file.name.substr(file.name.lastIndexOf(".") + 1);
            const restaurantId = uuid();

            const key = `images/${restaurantId}.${extension}`;

            const inputData = {

                id: restaurantId,
                name:"oliver",
                address:"test address",
                contentType: mimeType,
                fullsize: {
                    key,
                    region,
                    bucket
                }
            }

            //s3 bucket storage add file to it
            try {
                await Storage.put(key, file, {
                    level: "protected",
                    contentType: mimeType,
                    metadata: { collectionRestaurantId: id, restaurantId }
                })
                await API.graphql(
                    graphqlOperation(createRestaurant, { input: inputData })
                )
                return Promise.resolve("success");


            } catch (error) {
                console.log("line 87, error add new image: ", error)
                return Promise.reject(error);

            }
        }

    },
    getters: {
        collectionRestaurant: (state) => state.collectionRestaurant
    }
}