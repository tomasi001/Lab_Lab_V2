import WordCloudCell from 'src/components/WordCloud/WordCloudCell'

type WordCloudPageProps = {
  id: number
}

const WordCloudPage = ({ id }: WordCloudPageProps) => {
  return <WordCloudCell id={id} />
}

export default WordCloudPage
