import type { FindCommonNarratives } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import CommonNarratives from 'src/components/CommonNarrative/CommonNarratives'

export const QUERY = gql`
  query FindCommonNarratives {
    commonNarratives {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No commonNarratives yet. '}
      <Link to={routes.newCommonNarrative()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  commonNarratives,
}: CellSuccessProps<FindCommonNarratives>) => {
  return <CommonNarratives commonNarratives={commonNarratives} />
}
