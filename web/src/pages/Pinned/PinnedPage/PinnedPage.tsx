import PinnedCell from 'src/components/Pinned/PinnedCell'

type PinnedPageProps = {
  id: number
}

const PinnedPage = ({ id }: PinnedPageProps) => {
  return <PinnedCell id={id} />
}

export default PinnedPage
