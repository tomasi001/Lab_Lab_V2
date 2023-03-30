import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CommonNarrativeForm from 'src/components/CommonNarrative/CommonNarrativeForm'

import type { CreateCommonNarrativeInput } from 'types/graphql'

const CREATE_COMMON_NARRATIVE_MUTATION = gql`
  mutation CreateCommonNarrativeMutation($input: CreateCommonNarrativeInput!) {
    createCommonNarrative(input: $input) {
      id
    }
  }
`

const NewCommonNarrative = () => {
  const [createCommonNarrative, { loading, error }] = useMutation(
    CREATE_COMMON_NARRATIVE_MUTATION,
    {
      onCompleted: () => {
        toast.success('CommonNarrative created')
        navigate(routes.commonNarratives())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateCommonNarrativeInput) => {
    createCommonNarrative({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New CommonNarrative</h2>
      </header>
      <div className="rw-segment-main">
        <CommonNarrativeForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewCommonNarrative
