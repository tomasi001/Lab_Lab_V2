import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import WordCloudForm from 'src/components/WordCloud/WordCloudForm'

import type { CreateWordCloudInput } from 'types/graphql'

const CREATE_WORD_CLOUD_MUTATION = gql`
  mutation CreateWordCloudMutation($input: CreateWordCloudInput!) {
    createWordCloud(input: $input) {
      id
    }
  }
`

const NewWordCloud = () => {
  const [createWordCloud, { loading, error }] = useMutation(
    CREATE_WORD_CLOUD_MUTATION,
    {
      onCompleted: () => {
        toast.success('WordCloud created')
        navigate(routes.wordClouds())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateWordCloudInput) => {
    createWordCloud({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New WordCloud</h2>
      </header>
      <div className="rw-segment-main">
        <WordCloudForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewWordCloud
