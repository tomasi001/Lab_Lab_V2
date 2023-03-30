import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type {
  DeleteVoiceEntryMutationVariables,
  FindVoiceEntryById,
} from 'types/graphql'

const DELETE_VOICE_ENTRY_MUTATION = gql`
  mutation DeleteVoiceEntryMutation($id: Int!) {
    deleteVoiceEntry(id: $id) {
      id
    }
  }
`

interface Props {
  voiceEntry: NonNullable<FindVoiceEntryById['voiceEntry']>
}

const VoiceEntry = ({ voiceEntry }: Props) => {
  const [deleteVoiceEntry] = useMutation(DELETE_VOICE_ENTRY_MUTATION, {
    onCompleted: () => {
      toast.success('VoiceEntry deleted')
      navigate(routes.voiceEntries())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteVoiceEntryMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete voiceEntry ' + id + '?')) {
      deleteVoiceEntry({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            VoiceEntry {voiceEntry.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{voiceEntry.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{voiceEntry.title}</td>
            </tr>
            <tr>
              <th>Entry</th>
              <td>{voiceEntry.entry}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{voiceEntry.userId}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(voiceEntry.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(voiceEntry.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editVoiceEntry({ id: voiceEntry.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(voiceEntry.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default VoiceEntry
