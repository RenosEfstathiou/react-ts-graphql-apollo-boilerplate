import { ProductTypeDef } from "./graphQL/Product";

export const schema = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  ${ProductTypeDef}


  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  
  type Query {
    products: [Product]
    productById(id: Int!): Product
    productsByIds(ids: [Int!]!): [Product!]!
  }


  type Mutation {
      addProduct(
      name: String!
      description: String!
      price: Float!
      image: String!
      quantity: Int!
    ): Product
  }
`;
