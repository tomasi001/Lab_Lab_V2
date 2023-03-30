import type {
  QueryResolvers,
  MutationResolvers,
  TextEntryRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const textEntries: QueryResolvers['textEntries'] = () => {
  return db.textEntry.findMany()
}

export const textEntry: QueryResolvers['textEntry'] = ({ id }) => {
  return db.textEntry.findUnique({
    where: { id },
  })
}

export const createTextEntry: MutationResolvers['createTextEntry'] = ({
  input,
}) => {
  return db.textEntry.create({
    data: input,
  })
}

export const updateTextEntry: MutationResolvers['updateTextEntry'] = ({
  id,
  input,
}) => {
  return db.textEntry.update({
    data: input,
    where: { id },
  })
}

export const deleteTextEntry: MutationResolvers['deleteTextEntry'] = ({
  id,
}) => {
  return db.textEntry.delete({
    where: { id },
  })
}

export const TextEntry: TextEntryRelationResolvers = {
  User: (_obj, { root }) => {
    return db.textEntry.findUnique({ where: { id: root?.id } }).User()
  },
}
