import EditVoiceEntryCell from 'src/components/VoiceEntry/EditVoiceEntryCell'

type VoiceEntryPageProps = {
  id: number
}

const EditVoiceEntryPage = ({ id }: VoiceEntryPageProps) => {
  return <EditVoiceEntryCell id={id} />
}

export default EditVoiceEntryPage
