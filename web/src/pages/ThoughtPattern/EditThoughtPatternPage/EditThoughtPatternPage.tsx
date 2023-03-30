import EditThoughtPatternCell from 'src/components/ThoughtPattern/EditThoughtPatternCell'

type ThoughtPatternPageProps = {
  id: number
}

const EditThoughtPatternPage = ({ id }: ThoughtPatternPageProps) => {
  return <EditThoughtPatternCell id={id} />
}

export default EditThoughtPatternPage
