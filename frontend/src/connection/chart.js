import axios from './HTTP'

const url = "http://localhost:8080/data/pollution"

export async function getChartLink() {
  const { data } = await axios.get(url+'/pm25')

  return data.data
}

export async function getAqi() {
  const { data } = await axios.get(url+'/aqi')

  return data.data
}