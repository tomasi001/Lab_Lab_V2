import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/TextEntry/TextEntriesCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteTextEntryMutationVariables,
  FindTextEntries,
} from 'types/graphql'

const DELETE_TEXT_ENTRY_MUTATION = gql`
  mutation DeleteTextEntryMutation($id: Int!) {
    deleteTextEntry(id: $id) {
      id
    }
  }
`

const TextEntriesList = ({ textEntries }: FindTextEntries) => {
  const [deleteTextEntry] = useMutation(DELETE_TEXT_ENTRY_MUTATION, {
    onCompleted: () => {
      toast.success('TextEntry deleted')
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

  const onDeleteClick = (id: DeleteTextEntryMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete textEntry ' + id + '?')) {
      deleteTextEntry({ variables: { id } })
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
          {textEntries.map((textEntry) => (
            <tr key={textEntry.id}>
              <td>{truncate(textEntry.id)}</td>
              <td>{truncate(textEntry.title)}</td>
              <td>{truncate(textEntry.entry)}</td>
              <td>{truncate(textEntry.userId)}</td>
              <td>{timeTag(textEntry.createdAt)}</td>
              <td>{timeTag(textEntry.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.textEntry({ id: textEntry.id })}
                    title={'Show textEntry ' + textEntry.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editTextEntry({ id: textEntry.id })}
                    title={'Edit textEntry ' + textEntry.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete textEntry ' + textEntry.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(textEntry.id)}
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

export default TextEntriesList
