import axios from './HTTP'

const url = "/User/login"

export async function login(email, password) {
  const { data } = await axios.post(url, {email, password})

  localStorage.setItem('token', data.token)
}

export function logout() {
  localStorage.removeItem('token')
}