import axios from './HTTP'

const url = "/users"

export async function getUser(nickname) {
  const { data } = await axios.get(url+'/'+nickname)

  return data
}