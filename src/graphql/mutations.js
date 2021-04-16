/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCollectionRestaurants = /* GraphQL */ `
  mutation CreateCollectionRestaurants(
    $input: CreateCollectionRestaurantsInput!
    $condition: ModelCollectionRestaurantsConditionInput
  ) {
    createCollectionRestaurants(input: $input, condition: $condition) {
      id
      owner
      ownerId
      name
      createdAt
      updatedAt
      restaurants {
        items {
          id
          name
          address
          createdAt
          updatedAt
          collection {
            id
            owner
            ownerId
            name
            createdAt
            updatedAt
          }
          fullsize {
            region
            bucket
            key
          }
          thumbnail {
            region
            bucket
            key
          }
          contentType
          height
          width
          size
          owner
        }
        nextToken
      }
    }
  }
`;
export const updateCollectionRestaurants = /* GraphQL */ `
  mutation UpdateCollectionRestaurants(
    $input: UpdateCollectionRestaurantsInput!
    $condition: ModelCollectionRestaurantsConditionInput
  ) {
    updateCollectionRestaurants(input: $input, condition: $condition) {
      id
      owner
      ownerId
      name
      createdAt
      updatedAt
      restaurants {
        items {
          id
          name
          address
          createdAt
          updatedAt
          collection {
            id
            owner
            ownerId
            name
            createdAt
            updatedAt
          }
          fullsize {
            region
            bucket
            key
          }
          thumbnail {
            region
            bucket
            key
          }
          contentType
          height
          width
          size
          owner
        }
        nextToken
      }
    }
  }
`;
export const deleteCollectionRestaurants = /* GraphQL */ `
  mutation DeleteCollectionRestaurants(
    $input: DeleteCollectionRestaurantsInput!
    $condition: ModelCollectionRestaurantsConditionInput
  ) {
    deleteCollectionRestaurants(input: $input, condition: $condition) {
      id
      owner
      ownerId
      name
      createdAt
      updatedAt
      restaurants {
        items {
          id
          name
          address
          createdAt
          updatedAt
          collection {
            id
            owner
            ownerId
            name
            createdAt
            updatedAt
          }
          fullsize {
            region
            bucket
            key
          }
          thumbnail {
            region
            bucket
            key
          }
          contentType
          height
          width
          size
          owner
        }
        nextToken
      }
    }
  }
`;
export const createRestaurant = /* GraphQL */ `
  mutation CreateRestaurant(
    $input: CreateRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    createRestaurant(input: $input, condition: $condition) {
      id
      name
      address
      createdAt
      updatedAt
      collection {
        id
        owner
        ownerId
        name
        createdAt
        updatedAt
        restaurants {
          items {
            id
            name
            address
            createdAt
            updatedAt
            contentType
            height
            width
            size
            owner
          }
          nextToken
        }
      }
      fullsize {
        region
        bucket
        key
      }
      thumbnail {
        region
        bucket
        key
      }
      contentType
      height
      width
      size
      owner
    }
  }
`;
export const updateRestaurant = /* GraphQL */ `
  mutation UpdateRestaurant(
    $input: UpdateRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    updateRestaurant(input: $input, condition: $condition) {
      id
      name
      address
      createdAt
      updatedAt
      collection {
        id
        owner
        ownerId
        name
        createdAt
        updatedAt
        restaurants {
          items {
            id
            name
            address
            createdAt
            updatedAt
            contentType
            height
            width
            size
            owner
          }
          nextToken
        }
      }
      fullsize {
        region
        bucket
        key
      }
      thumbnail {
        region
        bucket
        key
      }
      contentType
      height
      width
      size
      owner
    }
  }
`;
export const deleteRestaurant = /* GraphQL */ `
  mutation DeleteRestaurant(
    $input: DeleteRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    deleteRestaurant(input: $input, condition: $condition) {
      id
      name
      address
      createdAt
      updatedAt
      collection {
        id
        owner
        ownerId
        name
        createdAt
        updatedAt
        restaurants {
          items {
            id
            name
            address
            createdAt
            updatedAt
            contentType
            height
            width
            size
            owner
          }
          nextToken
        }
      }
      fullsize {
        region
        bucket
        key
      }
      thumbnail {
        region
        bucket
        key
      }
      contentType
      height
      width
      size
      owner
    }
  }
`;
