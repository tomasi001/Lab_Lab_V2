import type { FindWordCloudById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import WordCloud from 'src/components/WordCloud/WordCloud'

export const QUERY = gql`
  query FindWordCloudById($id: Int!) {
    wordCloud: wordCloud(id: $id) {
      id
      title
      userId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>WordCloud not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ wordCloud }: CellSuccessProps<FindWordCloudById>) => {
  return <WordCloud wordCloud={wordCloud} />
}
