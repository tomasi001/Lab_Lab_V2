import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type {
  DeleteThoughtPatternMutationVariables,
  FindThoughtPatternById,
} from 'types/graphql'

const DELETE_THOUGHT_PATTERN_MUTATION = gql`
  mutation DeleteThoughtPatternMutation($id: Int!) {
    deleteThoughtPattern(id: $id) {
      id
    }
  }
`

interface Props {
  thoughtPattern: NonNullable<FindThoughtPatternById['thoughtPattern']>
}

const ThoughtPattern = ({ thoughtPattern }: Props) => {
  const [deleteThoughtPattern] = useMutation(DELETE_THOUGHT_PATTERN_MUTATION, {
    onCompleted: () => {
      toast.success('ThoughtPattern deleted')
      navigate(routes.thoughtPatterns())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteThoughtPatternMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete thoughtPattern ' + id + '?')) {
      deleteThoughtPattern({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            ThoughtPattern {thoughtPattern.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{thoughtPattern.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{thoughtPattern.title}</td>
            </tr>
            <tr>
              <th>Pattern</th>
              <td>{thoughtPattern.pattern}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{thoughtPattern.userId}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(thoughtPattern.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(thoughtPattern.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editThoughtPattern({ id: thoughtPattern.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(thoughtPattern.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default ThoughtPattern
