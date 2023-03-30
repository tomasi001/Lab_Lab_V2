import type {
  QueryResolvers,
  MutationResolvers,
  VoiceEntryRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const voiceEntries: QueryResolvers['voiceEntries'] = () => {
  return db.voiceEntry.findMany()
}

export const voiceEntry: QueryResolvers['voiceEntry'] = ({ id }) => {
  return db.voiceEntry.findUnique({
    where: { id },
  })
}

export const createVoiceEntry: MutationResolvers['createVoiceEntry'] = ({
  input,
}) => {
  return db.voiceEntry.create({
    data: input,
  })
}

export const updateVoiceEntry: MutationResolvers['updateVoiceEntry'] = ({
  id,
  input,
}) => {
  return db.voiceEntry.update({
    data: input,
    where: { id },
  })
}

export const deleteVoiceEntry: MutationResolvers['deleteVoiceEntry'] = ({
  id,
}) => {
  return db.voiceEntry.delete({
    where: { id },
  })
}

export const VoiceEntry: VoiceEntryRelationResolvers = {
  User: (_obj, { root }) => {
    return db.voiceEntry.findUnique({ where: { id: root?.id } }).User()
  },
}
