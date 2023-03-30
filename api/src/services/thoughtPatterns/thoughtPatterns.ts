import type {
  QueryResolvers,
  MutationResolvers,
  ThoughtPatternRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const thoughtPatterns: QueryResolvers['thoughtPatterns'] = () => {
  return db.thoughtPattern.findMany()
}

export const thoughtPattern: QueryResolvers['thoughtPattern'] = ({ id }) => {
  return db.thoughtPattern.findUnique({
    where: { id },
  })
}

export const createThoughtPattern: MutationResolvers['createThoughtPattern'] =
  ({ input }) => {
    return db.thoughtPattern.create({
      data: input,
    })
  }

export const updateThoughtPattern: MutationResolvers['updateThoughtPattern'] =
  ({ id, input }) => {
    return db.thoughtPattern.update({
      data: input,
      where: { id },
    })
  }

export const deleteThoughtPattern: MutationResolvers['deleteThoughtPattern'] =
  ({ id }) => {
    return db.thoughtPattern.delete({
      where: { id },
    })
  }

export const ThoughtPattern: ThoughtPatternRelationResolvers = {
  User: (_obj, { root }) => {
    return db.thoughtPattern.findUnique({ where: { id: root?.id } }).User()
  },
}
