import { IStars } from '../interfaces/IStars'
import { Api } from '../service/api'

const getAllMovies = () => Api.get<IStars[]>('/movies')

export const listingServices = {
  getAllMovies,
}
