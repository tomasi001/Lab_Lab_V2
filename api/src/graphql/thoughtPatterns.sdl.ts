export const schema = gql`
  type ThoughtPattern {
    id: Int!
    title: String
    pattern: String!
    userId: Int!
    User: User!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    thoughtPatterns: [ThoughtPattern!]! @requireAuth
    thoughtPattern(id: Int!): ThoughtPattern @requireAuth
  }

  input CreateThoughtPatternInput {
    title: String
    pattern: String!
    userId: Int!
  }

  input UpdateThoughtPatternInput {
    title: String
    pattern: String
    userId: Int
  }

  type Mutation {
    createThoughtPattern(input: CreateThoughtPatternInput!): ThoughtPattern!
      @requireAuth
    updateThoughtPattern(
      id: Int!
      input: UpdateThoughtPatternInput!
    ): ThoughtPattern! @requireAuth
    deleteThoughtPattern(id: Int!): ThoughtPattern! @requireAuth
  }
`
