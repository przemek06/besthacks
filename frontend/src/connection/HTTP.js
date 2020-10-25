import axios from 'axios'
import { toast } from 'react-toastify'

//axios.defaults.headers.common['Content-Type'] = "text/plain;charset=utf-8";

axios.interceptors.response.use(null, (error) => {
  const expectedError = error.response && error.response.status >= 400 && error.response.status < 500

  if (!expectedError) {
    console.log(error)
    toast.error(error)
  }

  return Promise.reject(error)
})

export const setJwt = (jwt) => {
  axios.defaults.headers.common['x-auth-token'] = jwt
}

export const getJwt = (jwt) => {
  return localStorage.getItem('token')
}

export default axios