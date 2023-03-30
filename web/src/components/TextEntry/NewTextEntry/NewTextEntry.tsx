import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TextEntryForm from 'src/components/TextEntry/TextEntryForm'

import type { CreateTextEntryInput } from 'types/graphql'

const CREATE_TEXT_ENTRY_MUTATION = gql`
  mutation CreateTextEntryMutation($input: CreateTextEntryInput!) {
    createTextEntry(input: $input) {
      id
    }
  }
`

const NewTextEntry = () => {
  const [createTextEntry, { loading, error }] = useMutation(
    CREATE_TEXT_ENTRY_MUTATION,
    {
      onCompleted: () => {
        toast.success('TextEntry created')
        navigate(routes.textEntries())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateTextEntryInput) => {
    createTextEntry({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New TextEntry</h2>
      </header>
      <div className="rw-segment-main">
        <TextEntryForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTextEntry
