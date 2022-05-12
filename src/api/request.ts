import axios from 'axios'

export const API_ENDPOINT = process.env.ENDPOINT
  ? process.env.ENDPOINT
  : 'https://random-data-api.com/api/coffee/random_coffee?size=20'

export function apiRequest() {
  const headers = {
    'Content-Type': 'application/json',
  }

  return axios.create({
    baseURL: API_ENDPOINT,
    headers: headers,
  })
}
