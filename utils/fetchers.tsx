
export async function fetchCID(cid: string) {
  const response = await fetch(`https://w3s.link/ipfs/${cid}`)
  return await response.json()
}