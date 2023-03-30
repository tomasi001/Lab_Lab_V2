export const schema = gql`
  type VoiceEntry {
    id: Int!
    title: String
    entry: String!
    userId: Int!
    User: User!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    voiceEntries: [VoiceEntry!]! @requireAuth
    voiceEntry(id: Int!): VoiceEntry @requireAuth
  }

  input CreateVoiceEntryInput {
    title: String
    entry: String!
    userId: Int!
  }

  input UpdateVoiceEntryInput {
    title: String
    entry: String
    userId: Int
  }

  type Mutation {
    createVoiceEntry(input: CreateVoiceEntryInput!): VoiceEntry! @requireAuth
    updateVoiceEntry(id: Int!, input: UpdateVoiceEntryInput!): VoiceEntry!
      @requireAuth
    deleteVoiceEntry(id: Int!): VoiceEntry! @requireAuth
  }
`
