import { IStars } from './../interfaces/IStars'
import { useState, useEffect } from 'react'
import getApi from './../service/api'

export const useStars = () => {
  const [data, setData] = useState<IStars[] | undefined>()
  const [error, setError] = useState()

  useEffect(() => {
    getApi
      .get('/movies')

      .then((res) => {
        setData(res.data.contents)
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
