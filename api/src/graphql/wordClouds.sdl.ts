export const schema = gql`
  type WordCloud {
    id: Int!
    title: String
    userId: Int!
    User: User!
    createdAt: DateTime!
    updatedAt: DateTime!
    words: [Word]!
  }

  type Query {
    wordClouds: [WordCloud!]! @requireAuth
    wordCloud(id: Int!): WordCloud @requireAuth
  }

  input CreateWordCloudInput {
    title: String
    userId: Int!
  }

  input UpdateWordCloudInput {
    title: String
    userId: Int
  }

  type Mutation {
    createWordCloud(input: CreateWordCloudInput!): WordCloud! @requireAuth
    updateWordCloud(id: Int!, input: UpdateWordCloudInput!): WordCloud!
      @requireAuth
    deleteWordCloud(id: Int!): WordCloud! @requireAuth
  }
`
