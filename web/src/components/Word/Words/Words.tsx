import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Word/WordsCell'
import { truncate } from 'src/lib/formatters'

import type { DeleteWordMutationVariables, FindWords } from 'types/graphql'

const DELETE_WORD_MUTATION = gql`
  mutation DeleteWordMutation($id: Int!) {
    deleteWord(id: $id) {
      id
    }
  }
`

const WordsList = ({ words }: FindWords) => {
  const [deleteWord] = useMutation(DELETE_WORD_MUTATION, {
    onCompleted: () => {
      toast.success('Word deleted')
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

  const onDeleteClick = (id: DeleteWordMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete word ' + id + '?')) {
      deleteWord({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Word</th>
            <th>Rating</th>
            <th>Word cloud id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word) => (
            <tr key={word.id}>
              <td>{truncate(word.id)}</td>
              <td>{truncate(word.word)}</td>
              <td>{truncate(word.rating)}</td>
              <td>{truncate(word.wordCloudId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.word({ id: word.id })}
                    title={'Show word ' + word.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editWord({ id: word.id })}
                    title={'Edit word ' + word.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete word ' + word.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(word.id)}
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

export default WordsList
