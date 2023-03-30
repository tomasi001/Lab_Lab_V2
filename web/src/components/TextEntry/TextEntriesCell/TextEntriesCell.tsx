import type { FindTextEntries } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import TextEntries from 'src/components/TextEntry/TextEntries'

export const QUERY = gql`
  query FindTextEntries {
    textEntries {
      id
      title
      entry
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
      {'No textEntries yet. '}
      <Link to={routes.newTextEntry()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ textEntries }: CellSuccessProps<FindTextEntries>) => {
  return <TextEntries textEntries={textEntries} />
}
