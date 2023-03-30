import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type {
  DeletePinnedMutationVariables,
  FindPinnedById,
} from 'types/graphql'

const DELETE_PINNED_MUTATION = gql`
  mutation DeletePinnedMutation($id: Int!) {
    deletePinned(id: $id) {
      id
    }
  }
`

interface Props {
  pinned: NonNullable<FindPinnedById['pinned']>
}

const Pinned = ({ pinned }: Props) => {
  const [deletePinned] = useMutation(DELETE_PINNED_MUTATION, {
    onCompleted: () => {
      toast.success('Pinned deleted')
      navigate(routes.pinneds())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeletePinnedMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete pinned ' + id + '?')) {
      deletePinned({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Pinned {pinned.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{pinned.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{pinned.title}</td>
            </tr>
            <tr>
              <th>Pinned item</th>
              <td>{pinned.pinnedItem}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{pinned.userId}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(pinned.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(pinned.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPinned({ id: pinned.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(pinned.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Pinned
