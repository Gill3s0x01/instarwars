import { getplanet } from './../service/apiPlanet'
import { useEffect, useState } from 'react'
import { IPlanet } from '../interfaces'
import { getAllPlanets } from '../service/apiPlanet'

export const usePlanets = () => {
  const [planet, setPlanet] = useState<IPlanet | undefined>()
  const [errorPlanet, setErrorPlanet] = useState()
  const [loadingPlanets, setLoadingPlanets] = useState(true)
  const [onePlanet, setSetOnePlanet] = useState<IPlanet | undefined>()

  useEffect(() => {
    getAllPlanets
      .get('/planets')
      .then((res) => {
        setPlanet(res.data)
        setLoadingPlanets(false)
      })
      .catch((err) => {
        console.log(err)
        setErrorPlanet(err)
        setLoadingPlanets(false)
      })
  }, [])

  useEffect(() => {
    getplanet
      .get('/4')
      .then((res) => {
        setSetOnePlanet(res.data)
        setLoadingPlanets(false)
      })
      .catch((err) => {
        console.log(err)
        setErrorPlanet(err)
        setLoadingPlanets(false)
      })
  }, [])

  return {
    planet,
    errorPlanet,
    loadingPlanets,
    onePlanet,
  }
}
