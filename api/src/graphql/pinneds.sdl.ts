export const schema = gql`
  type Pinned {
    id: Int!
    title: String
    pinnedItem: String!
    userId: Int!
    User: User!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    pinneds: [Pinned!]! @requireAuth
    pinned(id: Int!): Pinned @requireAuth
  }

  input CreatePinnedInput {
    title: String
    pinnedItem: String!
    userId: Int!
  }

  input UpdatePinnedInput {
    title: String
    pinnedItem: String
    userId: Int
  }

  type Mutation {
    createPinned(input: CreatePinnedInput!): Pinned! @requireAuth
    updatePinned(id: Int!, input: UpdatePinnedInput!): Pinned! @requireAuth
    deletePinned(id: Int!): Pinned! @requireAuth
  }
`
