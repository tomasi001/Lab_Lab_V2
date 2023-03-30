import ThoughtPatternCell from 'src/components/ThoughtPattern/ThoughtPatternCell'

type ThoughtPatternPageProps = {
  id: number
}

const ThoughtPatternPage = ({ id }: ThoughtPatternPageProps) => {
  return <ThoughtPatternCell id={id} />
}

export default ThoughtPatternPage
