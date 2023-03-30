export const schema = gql`
  type User {
    id: Int!
    firstName: String!
    lastName: String!
    email: String!
    accountStatus: String!
    textEntries: [TextEntry]!
    voiceEntries: [VoiceEntry]!
    wordCloud: [WordCloud]!
    commonNarratives: [CommonNarrative]!
    thoughtPatterns: [ThoughtPattern]!
    createdAt: DateTime!
    updatedAt: DateTime!
    Pinned: [Pinned]!
    hashedPassword: String!
    salt: String!
    resetToken: String!
    resetTokenExpiresAt: DateTime!
    roles: String!
  }

  type Query {
    users: [User!]! @skipAuth
    user(id: Int!): User @skipAuth
  }

  input CreateUserInput {
    firstName: String!
    lastName: String!
    email: String!
    accountStatus: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    roles: String!
  }

  input UpdateUserInput {
    firstName: String
    lastName: String
    email: String
    accountStatus: String
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
    roles: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @skipAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @skipAuth
    deleteUser(id: Int!): User! @skipAuth
  }
`
