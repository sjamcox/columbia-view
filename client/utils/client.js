import axios from 'axios'

export const browserClient = axios.create({
  baseURL: process.env.API_HOST,
  timeout: 5000,
})
