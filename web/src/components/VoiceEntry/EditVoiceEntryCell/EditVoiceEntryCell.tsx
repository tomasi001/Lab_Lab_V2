import type { EditVoiceEntryById, UpdateVoiceEntryInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import VoiceEntryForm from 'src/components/VoiceEntry/VoiceEntryForm'

export const QUERY = gql`
  query EditVoiceEntryById($id: Int!) {
    voiceEntry: voiceEntry(id: $id) {
      id
      title
      entry
      userId
      createdAt
      updatedAt
    }
  }
`
const UPDATE_VOICE_ENTRY_MUTATION = gql`
  mutation UpdateVoiceEntryMutation($id: Int!, $input: UpdateVoiceEntryInput!) {
    updateVoiceEntry(id: $id, input: $input) {
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

export const Success = ({
  voiceEntry,
}: CellSuccessProps<EditVoiceEntryById>) => {
  const [updateVoiceEntry, { loading, error }] = useMutation(
    UPDATE_VOICE_ENTRY_MUTATION,
    {
      onCompleted: () => {
        toast.success('VoiceEntry updated')
        navigate(routes.voiceEntries())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateVoiceEntryInput,
    id: EditVoiceEntryById['voiceEntry']['id']
  ) => {
    updateVoiceEntry({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit VoiceEntry {voiceEntry?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <VoiceEntryForm
          voiceEntry={voiceEntry}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
