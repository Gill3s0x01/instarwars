import { useState, useEffect } from 'react'
import CardMain from '../Cards'
import { usePlanets } from '../../hooks/usePlanets'
import { useStars } from '../../hooks/useStars'
import { IPlanet, IStars } from '../../interfaces'
import { Container } from './styles'

const MainCard = () => {
  const { loadingPlanets, onePlanet, planet } = usePlanets()
  const { data: item, error } = useStars()
  const [data, setData] = useState<IStars[] | IPlanet | undefined>()

  useEffect(() => {
    if (onePlanet) {
      setData(onePlanet)
      console.log(onePlanet, 'AQUII')
    }
    if (planet) {
      setData(planet)
      console.log(planet, 'planet')
    }

    if (item) {
      setData(item)
      console.log(item)
    }
  }, [item, onePlanet, planet])

  return (
    <>
      {/* <Banner>
        <ImageBkg src="/images/bg7.jpg" alt="background" />
      </Banner> */}
      <Container>
        {item &&
          item.map((item: IStars) => (
            <CardMain
              key={item.id}
              title={item.title}
              mediaType={item.mediaType}
              categories={item.categories}
              price={item.price}
              description={item.description}
              year={item.year}
            />
          ))}
      </Container>
    </>
  )
}

export default MainCard
