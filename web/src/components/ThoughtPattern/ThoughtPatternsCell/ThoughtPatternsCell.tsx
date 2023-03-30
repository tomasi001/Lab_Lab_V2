import type { FindThoughtPatterns } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ThoughtPatterns from 'src/components/ThoughtPattern/ThoughtPatterns'

export const QUERY = gql`
  query FindThoughtPatterns {
    thoughtPatterns {
      id
      title
      pattern
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
      {'No thoughtPatterns yet. '}
      <Link to={routes.newThoughtPattern()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  thoughtPatterns,
}: CellSuccessProps<FindThoughtPatterns>) => {
  return <ThoughtPatterns thoughtPatterns={thoughtPatterns} />
}
