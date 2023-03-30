import EditCommonNarrativeCell from 'src/components/CommonNarrative/EditCommonNarrativeCell'

type CommonNarrativePageProps = {
  id: number
}

const EditCommonNarrativePage = ({ id }: CommonNarrativePageProps) => {
  return <EditCommonNarrativeCell id={id} />
}

export default EditCommonNarrativePage
