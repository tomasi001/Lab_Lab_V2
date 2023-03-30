import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/ThoughtPattern/ThoughtPatternsCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteThoughtPatternMutationVariables,
  FindThoughtPatterns,
} from 'types/graphql'

const DELETE_THOUGHT_PATTERN_MUTATION = gql`
  mutation DeleteThoughtPatternMutation($id: Int!) {
    deleteThoughtPattern(id: $id) {
      id
    }
  }
`

const ThoughtPatternsList = ({ thoughtPatterns }: FindThoughtPatterns) => {
  const [deleteThoughtPattern] = useMutation(DELETE_THOUGHT_PATTERN_MUTATION, {
    onCompleted: () => {
      toast.success('ThoughtPattern deleted')
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

  const onDeleteClick = (id: DeleteThoughtPatternMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete thoughtPattern ' + id + '?')) {
      deleteThoughtPattern({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Pattern</th>
            <th>User id</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {thoughtPatterns.map((thoughtPattern) => (
            <tr key={thoughtPattern.id}>
              <td>{truncate(thoughtPattern.id)}</td>
              <td>{truncate(thoughtPattern.title)}</td>
              <td>{truncate(thoughtPattern.pattern)}</td>
              <td>{truncate(thoughtPattern.userId)}</td>
              <td>{timeTag(thoughtPattern.createdAt)}</td>
              <td>{timeTag(thoughtPattern.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.thoughtPattern({ id: thoughtPattern.id })}
                    title={
                      'Show thoughtPattern ' + thoughtPattern.id + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editThoughtPattern({ id: thoughtPattern.id })}
                    title={'Edit thoughtPattern ' + thoughtPattern.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete thoughtPattern ' + thoughtPattern.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(thoughtPattern.id)}
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

export default ThoughtPatternsList
