import WordCell from 'src/components/Word/WordCell'

type WordPageProps = {
  id: number
}

const WordPage = ({ id }: WordPageProps) => {
  return <WordCell id={id} />
}

export default WordPage
