import axios from 'axios'
import { toast } from 'react-toastify'

axios.defaults.baseURL = process.env.REACT_APP_API_URL

//axios.defaults.headers.common['Content-Type'] = "text/plain;charset=utf-8";

axios.interceptors.response.use(null, (error) => {
  const expectedError = error.response && error.response.status >= 400 && error.response.status < 500

  if (!expectedError) {
    toast.error(error.response.status+' server error [Details in console]')
    console.log(error)
  }

  return Promise.reject(error)
})

export default axios