import type {
  QueryResolvers,
  MutationResolvers,
  UserRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const users: QueryResolvers['users'] = () => {
  return db.user.findMany()
}

export const user: QueryResolvers['user'] = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const createUser: MutationResolvers['createUser'] = ({ input }) => {
  return db.user.create({
    data: input,
  })
}

export const updateUser: MutationResolvers['updateUser'] = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser: MutationResolvers['deleteUser'] = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}

export const User: UserRelationResolvers = {
  textEntries: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).textEntries()
  },
  voiceEntries: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).voiceEntries()
  },
  wordCloud: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).wordCloud()
  },
  commonNarratives: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).commonNarratives()
  },
  thoughtPatterns: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).thoughtPatterns()
  },
  Pinned: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).Pinned()
  },
}
