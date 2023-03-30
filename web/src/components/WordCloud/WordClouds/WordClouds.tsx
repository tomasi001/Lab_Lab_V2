import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/WordCloud/WordCloudsCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteWordCloudMutationVariables,
  FindWordClouds,
} from 'types/graphql'

const DELETE_WORD_CLOUD_MUTATION = gql`
  mutation DeleteWordCloudMutation($id: Int!) {
    deleteWordCloud(id: $id) {
      id
    }
  }
`

const WordCloudsList = ({ wordClouds }: FindWordClouds) => {
  const [deleteWordCloud] = useMutation(DELETE_WORD_CLOUD_MUTATION, {
    onCompleted: () => {
      toast.success('WordCloud deleted')
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

  const onDeleteClick = (id: DeleteWordCloudMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete wordCloud ' + id + '?')) {
      deleteWordCloud({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>User id</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {wordClouds.map((wordCloud) => (
            <tr key={wordCloud.id}>
              <td>{truncate(wordCloud.id)}</td>
              <td>{truncate(wordCloud.title)}</td>
              <td>{truncate(wordCloud.userId)}</td>
              <td>{timeTag(wordCloud.createdAt)}</td>
              <td>{timeTag(wordCloud.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.wordCloud({ id: wordCloud.id })}
                    title={'Show wordCloud ' + wordCloud.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editWordCloud({ id: wordCloud.id })}
                    title={'Edit wordCloud ' + wordCloud.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete wordCloud ' + wordCloud.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(wordCloud.id)}
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

export default WordCloudsList
