import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

import type { DeleteWordMutationVariables, FindWordById } from 'types/graphql'

const DELETE_WORD_MUTATION = gql`
  mutation DeleteWordMutation($id: Int!) {
    deleteWord(id: $id) {
      id
    }
  }
`

interface Props {
  word: NonNullable<FindWordById['word']>
}

const Word = ({ word }: Props) => {
  const [deleteWord] = useMutation(DELETE_WORD_MUTATION, {
    onCompleted: () => {
      toast.success('Word deleted')
      navigate(routes.words())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteWordMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete word ' + id + '?')) {
      deleteWord({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Word {word.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{word.id}</td>
            </tr>
            <tr>
              <th>Word</th>
              <td>{word.word}</td>
            </tr>
            <tr>
              <th>Rating</th>
              <td>{word.rating}</td>
            </tr>
            <tr>
              <th>Word cloud id</th>
              <td>{word.wordCloudId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editWord({ id: word.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(word.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Word
