import axios from './HTTP'

const url = "/User/users"

export async function getUser(nickname) {
  const { data } = await axios.get(url+'/'+nickname)

  return data
}