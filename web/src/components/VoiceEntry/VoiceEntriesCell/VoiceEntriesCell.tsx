import type { FindVoiceEntries } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import VoiceEntries from 'src/components/VoiceEntry/VoiceEntries'

export const QUERY = gql`
  query FindVoiceEntries {
    voiceEntries {
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
      {'No voiceEntries yet. '}
      <Link to={routes.newVoiceEntry()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  voiceEntries,
}: CellSuccessProps<FindVoiceEntries>) => {
  return <VoiceEntries voiceEntries={voiceEntries} />
}
