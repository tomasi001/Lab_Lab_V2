import type {
  QueryResolvers,
  MutationResolvers,
  WordCloudRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const wordClouds: QueryResolvers['wordClouds'] = () => {
  return db.wordCloud.findMany()
}

export const wordCloud: QueryResolvers['wordCloud'] = ({ id }) => {
  return db.wordCloud.findUnique({
    where: { id },
  })
}

export const createWordCloud: MutationResolvers['createWordCloud'] = ({
  input,
}) => {
  return db.wordCloud.create({
    data: input,
  })
}

export const updateWordCloud: MutationResolvers['updateWordCloud'] = ({
  id,
  input,
}) => {
  return db.wordCloud.update({
    data: input,
    where: { id },
  })
}

export const deleteWordCloud: MutationResolvers['deleteWordCloud'] = ({
  id,
}) => {
  return db.wordCloud.delete({
    where: { id },
  })
}

export const WordCloud: WordCloudRelationResolvers = {
  User: (_obj, { root }) => {
    return db.wordCloud.findUnique({ where: { id: root?.id } }).User()
  },
  words: (_obj, { root }) => {
    return db.wordCloud.findUnique({ where: { id: root?.id } }).words()
  },
}
