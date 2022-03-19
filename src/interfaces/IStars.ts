export interface IStars {
  id?: string
  title: string
  images?: IImage[]
  mediaType: string
  description: string
  price: string
  year: number
  categories: string
}

export interface IImage {
  url: string
}
