import EditWordCloudCell from 'src/components/WordCloud/EditWordCloudCell'

type WordCloudPageProps = {
  id: number
}

const EditWordCloudPage = ({ id }: WordCloudPageProps) => {
  return <EditWordCloudCell id={id} />
}

export default EditWordCloudPage
