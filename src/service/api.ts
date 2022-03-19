import axios from 'axios'

export const Api = axios.create({
  baseURL: 'https://sky-frontend.herokuapp.com/',
})
