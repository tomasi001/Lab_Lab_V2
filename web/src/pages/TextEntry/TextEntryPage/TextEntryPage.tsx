import TextEntryCell from 'src/components/TextEntry/TextEntryCell'

type TextEntryPageProps = {
  id: number
}

const TextEntryPage = ({ id }: TextEntryPageProps) => {
  return <TextEntryCell id={id} />
}

export default TextEntryPage
