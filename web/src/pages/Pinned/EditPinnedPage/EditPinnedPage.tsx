import EditPinnedCell from 'src/components/Pinned/EditPinnedCell'

type PinnedPageProps = {
  id: number
}

const EditPinnedPage = ({ id }: PinnedPageProps) => {
  return <EditPinnedCell id={id} />
}

export default EditPinnedPage
