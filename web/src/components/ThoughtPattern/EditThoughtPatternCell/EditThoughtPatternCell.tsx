import type {
  EditThoughtPatternById,
  UpdateThoughtPatternInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ThoughtPatternForm from 'src/components/ThoughtPattern/ThoughtPatternForm'

export const QUERY = gql`
  query EditThoughtPatternById($id: Int!) {
    thoughtPattern: thoughtPattern(id: $id) {
      id
      title
      pattern
      userId
      createdAt
      updatedAt
    }
  }
`
const UPDATE_THOUGHT_PATTERN_MUTATION = gql`
  mutation UpdateThoughtPatternMutation(
    $id: Int!
    $input: UpdateThoughtPatternInput!
  ) {
    updateThoughtPattern(id: $id, input: $input) {
      id
      title
      pattern
      userId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  thoughtPattern,
}: CellSuccessProps<EditThoughtPatternById>) => {
  const [updateThoughtPattern, { loading, error }] = useMutation(
    UPDATE_THOUGHT_PATTERN_MUTATION,
    {
      onCompleted: () => {
        toast.success('ThoughtPattern updated')
        navigate(routes.thoughtPatterns())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateThoughtPatternInput,
    id: EditThoughtPatternById['thoughtPattern']['id']
  ) => {
    updateThoughtPattern({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit ThoughtPattern {thoughtPattern?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ThoughtPatternForm
          thoughtPattern={thoughtPattern}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
