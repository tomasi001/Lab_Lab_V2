import type { FindCommonNarrativeById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import CommonNarrative from 'src/components/CommonNarrative/CommonNarrative'

export const QUERY = gql`
  query FindCommonNarrativeById($id: Int!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>CommonNarrative not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  commonNarrative,
}: CellSuccessProps<FindCommonNarrativeById>) => {
  return <CommonNarrative commonNarrative={commonNarrative} />
}
