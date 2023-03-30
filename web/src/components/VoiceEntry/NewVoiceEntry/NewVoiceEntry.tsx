import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import VoiceEntryForm from 'src/components/VoiceEntry/VoiceEntryForm'

import type { CreateVoiceEntryInput } from 'types/graphql'

const CREATE_VOICE_ENTRY_MUTATION = gql`
  mutation CreateVoiceEntryMutation($input: CreateVoiceEntryInput!) {
    createVoiceEntry(input: $input) {
      id
    }
  }
`

const NewVoiceEntry = () => {
  const [createVoiceEntry, { loading, error }] = useMutation(
    CREATE_VOICE_ENTRY_MUTATION,
    {
      onCompleted: () => {
        toast.success('VoiceEntry created')
        navigate(routes.voiceEntries())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateVoiceEntryInput) => {
    createVoiceEntry({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New VoiceEntry</h2>
      </header>
      <div className="rw-segment-main">
        <VoiceEntryForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewVoiceEntry
