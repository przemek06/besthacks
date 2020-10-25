import axios from "./HTTP"

const url = "https://quickchart.io/chart?c="

export async function getChart(json) {
  const { data } = await axios.get(url+json)

  return data
}