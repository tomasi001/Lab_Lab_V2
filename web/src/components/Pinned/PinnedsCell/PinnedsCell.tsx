import type { FindPinneds } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Pinneds from 'src/components/Pinned/Pinneds'

export const QUERY = gql`
  query FindPinneds {
    pinneds {
      id
      title
      pinnedItem
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
      {'No pinneds yet. '}
      <Link to={routes.newPinned()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ pinneds }: CellSuccessProps<FindPinneds>) => {
  return <Pinneds pinneds={pinneds} />
}
