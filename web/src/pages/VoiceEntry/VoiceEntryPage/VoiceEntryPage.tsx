import VoiceEntryCell from 'src/components/VoiceEntry/VoiceEntryCell'

type VoiceEntryPageProps = {
  id: number
}

const VoiceEntryPage = ({ id }: VoiceEntryPageProps) => {
  return <VoiceEntryCell id={id} />
}

export default VoiceEntryPage
