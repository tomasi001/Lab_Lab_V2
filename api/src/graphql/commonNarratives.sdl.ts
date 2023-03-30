export const schema = gql`
  type CommonNarrative {
    id: Int!
    title: String
    narrative: String!
    userId: Int!
    User: User!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    commonNarratives: [CommonNarrative!]! @requireAuth
    commonNarrative(id: Int!): CommonNarrative @requireAuth
  }

  input CreateCommonNarrativeInput {
    title: String
    narrative: String!
    userId: Int!
  }

  input UpdateCommonNarrativeInput {
    title: String
    narrative: String
    userId: Int
  }

  type Mutation {
    createCommonNarrative(input: CreateCommonNarrativeInput!): CommonNarrative!
      @requireAuth
    updateCommonNarrative(
      id: Int!
      input: UpdateCommonNarrativeInput!
    ): CommonNarrative! @requireAuth
    deleteCommonNarrative(id: Int!): CommonNarrative! @requireAuth
  }
`
