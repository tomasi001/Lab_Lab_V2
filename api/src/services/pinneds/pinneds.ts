import type {
  QueryResolvers,
  MutationResolvers,
  PinnedRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const pinneds: QueryResolvers['pinneds'] = () => {
  return db.pinned.findMany()
}

export const pinned: QueryResolvers['pinned'] = ({ id }) => {
  return db.pinned.findUnique({
    where: { id },
  })
}

export const createPinned: MutationResolvers['createPinned'] = ({ input }) => {
  return db.pinned.create({
    data: input,
  })
}

export const updatePinned: MutationResolvers['updatePinned'] = ({
  id,
  input,
}) => {
  return db.pinned.update({
    data: input,
    where: { id },
  })
}

export const deletePinned: MutationResolvers['deletePinned'] = ({ id }) => {
  return db.pinned.delete({
    where: { id },
  })
}

export const Pinned: PinnedRelationResolvers = {
  User: (_obj, { root }) => {
    return db.pinned.findUnique({ where: { id: root?.id } }).User()
  },
}
