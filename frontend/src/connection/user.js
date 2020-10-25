import axios, { setJwt, getJwt } from './HTTP'

//setJwt(getJwt())

const url = "http://localhost:8080/api/User"

export async function register(nickname, email, password) {
  const { data } = await axios.post(url+'/register', {nickname:nickname, email:email, password:password})

  return data
}

export async function login(email, password) {
  const { data } = await axios.post(url+'/login', {email, password})

  setJwt(data.token)
  localStorage.setItem('token', data.token)
}

export function logout() {
  localStorage.removeItem('token')
}

