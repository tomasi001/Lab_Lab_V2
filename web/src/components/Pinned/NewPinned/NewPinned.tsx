import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PinnedForm from 'src/components/Pinned/PinnedForm'

import type { CreatePinnedInput } from 'types/graphql'

const CREATE_PINNED_MUTATION = gql`
  mutation CreatePinnedMutation($input: CreatePinnedInput!) {
    createPinned(input: $input) {
      id
    }
  }
`

const NewPinned = () => {
  const [createPinned, { loading, error }] = useMutation(
    CREATE_PINNED_MUTATION,
    {
      onCompleted: () => {
        toast.success('Pinned created')
        navigate(routes.pinneds())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreatePinnedInput) => {
    createPinned({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Pinned</h2>
      </header>
      <div className="rw-segment-main">
        <PinnedForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPinned
