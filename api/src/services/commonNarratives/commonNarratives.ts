import type {
  QueryResolvers,
  MutationResolvers,
  CommonNarrativeRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const commonNarratives: QueryResolvers['commonNarratives'] = () => {
  return db.commonNarrative.findMany()
}

export const commonNarrative: QueryResolvers['commonNarrative'] = ({ id }) => {
  return db.commonNarrative.findUnique({
    where: { id },
  })
}

export const createCommonNarrative: MutationResolvers['createCommonNarrative'] =
  ({ input }) => {
    return db.commonNarrative.create({
      data: input,
    })
  }

export const updateCommonNarrative: MutationResolvers['updateCommonNarrative'] =
  ({ id, input }) => {
    return db.commonNarrative.update({
      data: input,
      where: { id },
    })
  }

export const deleteCommonNarrative: MutationResolvers['deleteCommonNarrative'] =
  ({ id }) => {
    return db.commonNarrative.delete({
      where: { id },
    })
  }

export const CommonNarrative: CommonNarrativeRelationResolvers = {
  User: (_obj, { root }) => {
    return db.commonNarrative.findUnique({ where: { id: root?.id } }).User()
  },
}
