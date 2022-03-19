import { IStars } from './../interfaces/IStars'
import { useState, useEffect } from 'react'

export const useStars = () => {
  const [data, setData] = useState<IStars[] | undefined>()
  const [error, setError] = useState()

  useEffect(() => {
    fetch('https://sky-frontend.herokuapp.com/movies')
      .then((res) => res.json())
      .then((res) => {
        setData(res.contents)
      })
      .catch((err) => {
        console.log(err)
        setError(err)
      })
  }, [])

  return {
    data,
    error,
  }
}
