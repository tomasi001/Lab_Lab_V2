import CommonNarrativeCell from 'src/components/CommonNarrative/CommonNarrativeCell'

type CommonNarrativePageProps = {
  id: number
}

const CommonNarrativePage = ({ id }: CommonNarrativePageProps) => {
  return <CommonNarrativeCell id={id} />
}

export default CommonNarrativePage
