import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type {
  DeleteWordCloudMutationVariables,
  FindWordCloudById,
} from 'types/graphql'

const DELETE_WORD_CLOUD_MUTATION = gql`
  mutation DeleteWordCloudMutation($id: Int!) {
    deleteWordCloud(id: $id) {
      id
    }
  }
`

interface Props {
  wordCloud: NonNullable<FindWordCloudById['wordCloud']>
}

const WordCloud = ({ wordCloud }: Props) => {
  const [deleteWordCloud] = useMutation(DELETE_WORD_CLOUD_MUTATION, {
    onCompleted: () => {
      toast.success('WordCloud deleted')
      navigate(routes.wordClouds())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteWordCloudMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete wordCloud ' + id + '?')) {
      deleteWordCloud({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            WordCloud {wordCloud.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{wordCloud.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{wordCloud.title}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{wordCloud.userId}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(wordCloud.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(wordCloud.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editWordCloud({ id: wordCloud.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(wordCloud.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default WordCloud
