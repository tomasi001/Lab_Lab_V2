import type { FindWordClouds } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import WordClouds from 'src/components/WordCloud/WordClouds'

export const QUERY = gql`
  query FindWordClouds {
    wordClouds {
      id
      title
      userId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No wordClouds yet. '}
      <Link to={routes.newWordCloud()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ wordClouds }: CellSuccessProps<FindWordClouds>) => {
  return <WordClouds wordClouds={wordClouds} />
}
