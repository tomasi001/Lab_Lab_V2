import type { FindThoughtPatternById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ThoughtPattern from 'src/components/ThoughtPattern/ThoughtPattern'

export const QUERY = gql`
  query FindThoughtPatternById($id: Int!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>ThoughtPattern not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  thoughtPattern,
}: CellSuccessProps<FindThoughtPatternById>) => {
  return <ThoughtPattern thoughtPattern={thoughtPattern} />
}
