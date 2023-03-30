import type {
  EditCommonNarrativeById,
  UpdateCommonNarrativeInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CommonNarrativeForm from 'src/components/CommonNarrative/CommonNarrativeForm'

export const QUERY = gql`
  query EditCommonNarrativeById($id: Int!) {
    commonNarrative: commonNarrative(id: $id) {
      id
      title
      narrative
      userId
      createdAt
      updatedAt
    }
  }
`
const UPDATE_COMMON_NARRATIVE_MUTATION = gql`
  mutation UpdateCommonNarrativeMutation(
    $id: Int!
    $input: UpdateCommonNarrativeInput!
  ) {
    updateCommonNarrative(id: $id, input: $input) {
      id
      title
      narrative
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
  commonNarrative,
}: CellSuccessProps<EditCommonNarrativeById>) => {
  const [updateCommonNarrative, { loading, error }] = useMutation(
    UPDATE_COMMON_NARRATIVE_MUTATION,
    {
      onCompleted: () => {
        toast.success('CommonNarrative updated')
        navigate(routes.commonNarratives())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateCommonNarrativeInput,
    id: EditCommonNarrativeById['commonNarrative']['id']
  ) => {
    updateCommonNarrative({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit CommonNarrative {commonNarrative?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <CommonNarrativeForm
          commonNarrative={commonNarrative}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
