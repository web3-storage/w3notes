import { useRouter } from 'next/router'
import useSWR from 'swr'

import { ReadOnlyEditor } from '../../components/plate/Editor'
import { fetchCID } from '../../utils/fetchers'

const NotePage = () => {
  const { query } = useRouter()
  const cid = query.cid
  const { data } = useSWR(cid, fetchCID)

  if (data) {
    return (<ReadOnlyEditor initialValue={data} />)
  } else {
    return <div>loading...</div>
  }
}

export default NotePage
