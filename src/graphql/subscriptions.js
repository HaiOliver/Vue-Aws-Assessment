/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCollectionRestaurants = /* GraphQL */ `
  subscription OnCreateCollectionRestaurants($owner: String!) {
    onCreateCollectionRestaurants(owner: $owner) {
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
export const onUpdateCollectionRestaurants = /* GraphQL */ `
  subscription OnUpdateCollectionRestaurants($owner: String!) {
    onUpdateCollectionRestaurants(owner: $owner) {
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
export const onDeleteCollectionRestaurants = /* GraphQL */ `
  subscription OnDeleteCollectionRestaurants($owner: String!) {
    onDeleteCollectionRestaurants(owner: $owner) {
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
export const onCreateRestaurant = /* GraphQL */ `
  subscription OnCreateRestaurant {
    onCreateRestaurant {
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
export const onUpdateRestaurant = /* GraphQL */ `
  subscription OnUpdateRestaurant {
    onUpdateRestaurant {
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
export const onDeleteRestaurant = /* GraphQL */ `
  subscription OnDeleteRestaurant {
    onDeleteRestaurant {
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
