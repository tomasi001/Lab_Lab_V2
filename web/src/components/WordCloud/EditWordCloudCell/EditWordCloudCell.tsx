import type { EditWordCloudById, UpdateWordCloudInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import WordCloudForm from 'src/components/WordCloud/WordCloudForm'

export const QUERY = gql`
  query EditWordCloudById($id: Int!) {
    wordCloud: wordCloud(id: $id) {
      id
      title
      userId
      createdAt
      updatedAt
    }
  }
`
const UPDATE_WORD_CLOUD_MUTATION = gql`
  mutation UpdateWordCloudMutation($id: Int!, $input: UpdateWordCloudInput!) {
    updateWordCloud(id: $id, input: $input) {
      id
      title
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

export const Success = ({ wordCloud }: CellSuccessProps<EditWordCloudById>) => {
  const [updateWordCloud, { loading, error }] = useMutation(
    UPDATE_WORD_CLOUD_MUTATION,
    {
      onCompleted: () => {
        toast.success('WordCloud updated')
        navigate(routes.wordClouds())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateWordCloudInput,
    id: EditWordCloudById['wordCloud']['id']
  ) => {
    updateWordCloud({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit WordCloud {wordCloud?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <WordCloudForm
          wordCloud={wordCloud}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
