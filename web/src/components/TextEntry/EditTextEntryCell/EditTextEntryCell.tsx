import type { EditTextEntryById, UpdateTextEntryInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TextEntryForm from 'src/components/TextEntry/TextEntryForm'

export const QUERY = gql`
  query EditTextEntryById($id: Int!) {
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
const UPDATE_TEXT_ENTRY_MUTATION = gql`
  mutation UpdateTextEntryMutation($id: Int!, $input: UpdateTextEntryInput!) {
    updateTextEntry(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ textEntry }: CellSuccessProps<EditTextEntryById>) => {
  const [updateTextEntry, { loading, error }] = useMutation(
    UPDATE_TEXT_ENTRY_MUTATION,
    {
      onCompleted: () => {
        toast.success('TextEntry updated')
        navigate(routes.textEntries())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateTextEntryInput,
    id: EditTextEntryById['textEntry']['id']
  ) => {
    updateTextEntry({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit TextEntry {textEntry?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <TextEntryForm
          textEntry={textEntry}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
