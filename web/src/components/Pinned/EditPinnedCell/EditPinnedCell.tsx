import type { EditPinnedById, UpdatePinnedInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PinnedForm from 'src/components/Pinned/PinnedForm'

export const QUERY = gql`
  query EditPinnedById($id: Int!) {
    pinned: pinned(id: $id) {
      id
      title
      pinnedItem
      userId
      createdAt
      updatedAt
    }
  }
`
const UPDATE_PINNED_MUTATION = gql`
  mutation UpdatePinnedMutation($id: Int!, $input: UpdatePinnedInput!) {
    updatePinned(id: $id, input: $input) {
      id
      title
      pinnedItem
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

export const Success = ({ pinned }: CellSuccessProps<EditPinnedById>) => {
  const [updatePinned, { loading, error }] = useMutation(
    UPDATE_PINNED_MUTATION,
    {
      onCompleted: () => {
        toast.success('Pinned updated')
        navigate(routes.pinneds())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdatePinnedInput,
    id: EditPinnedById['pinned']['id']
  ) => {
    updatePinned({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Pinned {pinned?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <PinnedForm
          pinned={pinned}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
