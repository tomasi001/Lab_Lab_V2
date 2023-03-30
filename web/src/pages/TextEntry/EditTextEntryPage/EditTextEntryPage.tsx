import EditTextEntryCell from 'src/components/TextEntry/EditTextEntryCell'

type TextEntryPageProps = {
  id: number
}

const EditTextEntryPage = ({ id }: TextEntryPageProps) => {
  return <EditTextEntryCell id={id} />
}

export default EditTextEntryPage
