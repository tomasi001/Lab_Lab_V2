import EditWordCell from 'src/components/Word/EditWordCell'

type WordPageProps = {
  id: number
}

const EditWordPage = ({ id }: WordPageProps) => {
  return <EditWordCell id={id} />
}

export default EditWordPage
