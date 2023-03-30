export const schema = gql`
  type Word {
    id: Int!
    word: String!
    rating: Int!
    wordCloudId: Int!
    wordClouds: WordCloud!
  }

  type Query {
    words: [Word!]! @requireAuth
    word(id: Int!): Word @requireAuth
  }

  input CreateWordInput {
    word: String!
    rating: Int!
    wordCloudId: Int!
  }

  input UpdateWordInput {
    word: String
    rating: Int
    wordCloudId: Int
  }

  type Mutation {
    createWord(input: CreateWordInput!): Word! @requireAuth
    updateWord(id: Int!, input: UpdateWordInput!): Word! @requireAuth
    deleteWord(id: Int!): Word! @requireAuth
  }
`
