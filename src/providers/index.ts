import { IStars } from '../interfaces/IStars'
import getApi from '../service/api'

const getAllMovies = () => getApi.get<IStars[]>('/movies')
const getMovieById = (id: number) => getApi.get<IStars>(`/movies/${id}`)

export const servicesMovie = {
  getAllMovies,
  getMovieById,
}
