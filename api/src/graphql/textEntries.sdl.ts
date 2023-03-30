export const schema = gql`
  type TextEntry {
    id: Int!
    title: String
    entry: String!
    userId: Int!
    User: User!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    textEntries: [TextEntry!]! @requireAuth
    textEntry(id: Int!): TextEntry @requireAuth
  }

  input CreateTextEntryInput {
    title: String
    entry: String!
    userId: Int!
  }

  input UpdateTextEntryInput {
    title: String
    entry: String
    userId: Int
  }

  type Mutation {
    createTextEntry(input: CreateTextEntryInput!): TextEntry! @requireAuth
    updateTextEntry(id: Int!, input: UpdateTextEntryInput!): TextEntry!
      @requireAuth
    deleteTextEntry(id: Int!): TextEntry! @requireAuth
  }
`
