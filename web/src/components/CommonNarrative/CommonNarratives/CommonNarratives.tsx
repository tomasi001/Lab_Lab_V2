import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/CommonNarrative/CommonNarrativesCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteCommonNarrativeMutationVariables,
  FindCommonNarratives,
} from 'types/graphql'

const DELETE_COMMON_NARRATIVE_MUTATION = gql`
  mutation DeleteCommonNarrativeMutation($id: Int!) {
    deleteCommonNarrative(id: $id) {
      id
    }
  }
`

const CommonNarrativesList = ({ commonNarratives }: FindCommonNarratives) => {
  const [deleteCommonNarrative] = useMutation(
    DELETE_COMMON_NARRATIVE_MUTATION,
    {
      onCompleted: () => {
        toast.success('CommonNarrative deleted')
      },
      onError: (error) => {
        toast.error(error.message)
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Narrative</th>
            <th>User id</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {commonNarratives.map((commonNarrative) => (
            <tr key={commonNarrative.id}>
              <td>{truncate(commonNarrative.id)}</td>
              <td>{truncate(commonNarrative.title)}</td>
              <td>{truncate(commonNarrative.narrative)}</td>
              <td>{truncate(commonNarrative.userId)}</td>
              <td>{timeTag(commonNarrative.createdAt)}</td>
              <td>{timeTag(commonNarrative.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.commonNarrative({ id: commonNarrative.id })}
                    title={
                      'Show commonNarrative ' + commonNarrative.id + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editCommonNarrative({ id: commonNarrative.id })}
                    title={'Edit commonNarrative ' + commonNarrative.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete commonNarrative ' + commonNarrative.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(commonNarrative.id)}
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

export default CommonNarrativesList
