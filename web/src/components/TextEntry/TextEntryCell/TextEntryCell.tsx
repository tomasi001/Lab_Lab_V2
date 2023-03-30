import type { FindTextEntryById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import TextEntry from 'src/components/TextEntry/TextEntry'

export const QUERY = gql`
  query FindTextEntryById($id: Int!) {
    textEntry: textEntry(id: $id) {
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

export const Empty = () => <div>TextEntry not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ textEntry }: CellSuccessProps<FindTextEntryById>) => {
  return <TextEntry textEntry={textEntry} />
}
