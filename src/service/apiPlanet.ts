import axios from 'axios'

export const getAllPlanets = axios.create({
  baseURL: 'https://swapi.dev/api',
})

export const getplanet = {
  get: (id: string) => {
    return getAllPlanets.get(`/planets/${id}`)
  },
}
