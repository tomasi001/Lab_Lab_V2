import type { FindPinnedById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Pinned from 'src/components/Pinned/Pinned'

export const QUERY = gql`
  query FindPinnedById($id: Int!) {
    pinned: pinned(id: $id) {
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

export const Empty = () => <div>Pinned not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ pinned }: CellSuccessProps<FindPinnedById>) => {
  return <Pinned pinned={pinned} />
}
