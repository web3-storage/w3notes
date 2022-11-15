import { Plate } from '@udecode/plate-core'
import { useRouter } from 'next/router'
import useSWR from 'swr'

import { fetchCID } from '../../utils/fetchers'

const editableProps = {
  readOnly: true
};

const NotePage = () => {
  const { query } = useRouter()
  const cid = query.cid
  const { data } = useSWR(cid, fetchCID)

  if (data) {
    return (<Plate editableProps={editableProps} initialValue={data} />)
  } else {
    return <div>loading</div>
  }
}

export default NotePage
