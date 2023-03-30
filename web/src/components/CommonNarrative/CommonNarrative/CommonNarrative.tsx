import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type {
  DeleteCommonNarrativeMutationVariables,
  FindCommonNarrativeById,
} from 'types/graphql'

const DELETE_COMMON_NARRATIVE_MUTATION = gql`
  mutation DeleteCommonNarrativeMutation($id: Int!) {
    deleteCommonNarrative(id: $id) {
      id
    }
  }
`

interface Props {
  commonNarrative: NonNullable<FindCommonNarrativeById['commonNarrative']>
}

const CommonNarrative = ({ commonNarrative }: Props) => {
  const [deleteCommonNarrative] = useMutation(
    DELETE_COMMON_NARRATIVE_MUTATION,
    {
      onCompleted: () => {
        toast.success('CommonNarrative deleted')
        navigate(routes.commonNarratives())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onDeleteClick = (id: DeleteCommonNarrativeMutationVariables['id']) => {
    if (
      confirm('Are you sure you want to delete commonNarrative ' + id + '?')
    ) {
      deleteCommonNarrative({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            CommonNarrative {commonNarrative.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{commonNarrative.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{commonNarrative.title}</td>
            </tr>
            <tr>
              <th>Narrative</th>
              <td>{commonNarrative.narrative}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{commonNarrative.userId}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(commonNarrative.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(commonNarrative.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCommonNarrative({ id: commonNarrative.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(commonNarrative.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default CommonNarrative
