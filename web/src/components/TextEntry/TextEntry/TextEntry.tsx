import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type {
  DeleteTextEntryMutationVariables,
  FindTextEntryById,
} from 'types/graphql'

const DELETE_TEXT_ENTRY_MUTATION = gql`
  mutation DeleteTextEntryMutation($id: Int!) {
    deleteTextEntry(id: $id) {
      id
    }
  }
`

interface Props {
  textEntry: NonNullable<FindTextEntryById['textEntry']>
}

const TextEntry = ({ textEntry }: Props) => {
  const [deleteTextEntry] = useMutation(DELETE_TEXT_ENTRY_MUTATION, {
    onCompleted: () => {
      toast.success('TextEntry deleted')
      navigate(routes.textEntries())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteTextEntryMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete textEntry ' + id + '?')) {
      deleteTextEntry({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            TextEntry {textEntry.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{textEntry.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{textEntry.title}</td>
            </tr>
            <tr>
              <th>Entry</th>
              <td>{textEntry.entry}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{textEntry.userId}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(textEntry.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(textEntry.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editTextEntry({ id: textEntry.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(textEntry.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default TextEntry
