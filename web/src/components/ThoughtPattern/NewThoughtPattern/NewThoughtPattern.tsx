import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ThoughtPatternForm from 'src/components/ThoughtPattern/ThoughtPatternForm'

import type { CreateThoughtPatternInput } from 'types/graphql'

const CREATE_THOUGHT_PATTERN_MUTATION = gql`
  mutation CreateThoughtPatternMutation($input: CreateThoughtPatternInput!) {
    createThoughtPattern(input: $input) {
      id
    }
  }
`

const NewThoughtPattern = () => {
  const [createThoughtPattern, { loading, error }] = useMutation(
    CREATE_THOUGHT_PATTERN_MUTATION,
    {
      onCompleted: () => {
        toast.success('ThoughtPattern created')
        navigate(routes.thoughtPatterns())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateThoughtPatternInput) => {
    createThoughtPattern({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New ThoughtPattern</h2>
      </header>
      <div className="rw-segment-main">
        <ThoughtPatternForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewThoughtPattern
