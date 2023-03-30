import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/VoiceEntry/VoiceEntriesCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteVoiceEntryMutationVariables,
  FindVoiceEntries,
} from 'types/graphql'

const DELETE_VOICE_ENTRY_MUTATION = gql`
  mutation DeleteVoiceEntryMutation($id: Int!) {
    deleteVoiceEntry(id: $id) {
      id
    }
  }
`

const VoiceEntriesList = ({ voiceEntries }: FindVoiceEntries) => {
  const [deleteVoiceEntry] = useMutation(DELETE_VOICE_ENTRY_MUTATION, {
    onCompleted: () => {
      toast.success('VoiceEntry deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteVoiceEntryMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete voiceEntry ' + id + '?')) {
      deleteVoiceEntry({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Entry</th>
            <th>User id</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {voiceEntries.map((voiceEntry) => (
            <tr key={voiceEntry.id}>
              <td>{truncate(voiceEntry.id)}</td>
              <td>{truncate(voiceEntry.title)}</td>
              <td>{truncate(voiceEntry.entry)}</td>
              <td>{truncate(voiceEntry.userId)}</td>
              <td>{timeTag(voiceEntry.createdAt)}</td>
              <td>{timeTag(voiceEntry.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.voiceEntry({ id: voiceEntry.id })}
                    title={'Show voiceEntry ' + voiceEntry.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editVoiceEntry({ id: voiceEntry.id })}
                    title={'Edit voiceEntry ' + voiceEntry.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete voiceEntry ' + voiceEntry.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(voiceEntry.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default VoiceEntriesList
