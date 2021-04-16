/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCollectionRestaurants = /* GraphQL */ `
  query GetCollectionRestaurants($id: ID!) {
    getCollectionRestaurants(id: $id) {
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
export const listCollectionRestaurantss = /* GraphQL */ `
  query ListCollectionRestaurantss(
    $filter: ModelCollectionRestaurantsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCollectionRestaurantss(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getRestaurant = /* GraphQL */ `
  query GetRestaurant($id: ID!) {
    getRestaurant(id: $id) {
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
export const listRestaurants = /* GraphQL */ `
  query ListRestaurants(
    $filter: ModelRestaurantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          restaurants {
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
      nextToken
    }
  }
`;
