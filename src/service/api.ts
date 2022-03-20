import axios from 'axios'

const getApi = axios.create({
  baseURL: 'https://sky-frontend.herokuapp.com',
})

export default getApi
