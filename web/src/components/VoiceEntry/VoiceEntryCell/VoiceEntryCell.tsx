import type { FindVoiceEntryById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import VoiceEntry from 'src/components/VoiceEntry/VoiceEntry'

export const QUERY = gql`
  query FindVoiceEntryById($id: Int!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>VoiceEntry not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  voiceEntry,
}: CellSuccessProps<FindVoiceEntryById>) => {
  return <VoiceEntry voiceEntry={voiceEntry} />
}
