import { useState, useEffect } from 'react'
import CardMain from '../../components/Cards'
import { IStars } from '../../interfaces'
import { Banner, ImageBkg, Container } from './styles'

const MainCard = () => {
  const [data, setData] = useState<IStars[] | undefined>()
  const [error, setError] = useState()

  useEffect(() => {
    fetch('https://sky-frontend.herokuapp.com/movies')
      .then((res) => res.json())
      .then((res) => {
        setData(res)
        console.log(res, 'TESTE')
      })
      .catch((err) => {
        setError(err)
      })
  }, [])

  return (
    <>
      <Banner>
        <ImageBkg src="/images/bg7.jpg" alt="background" />
      </Banner>
      <Container>
        <CardMain />
        <CardMain />
        <CardMain />
        <CardMain />
        <CardMain />
        <CardMain />
        <CardMain />
        <CardMain />
        <CardMain />
        <CardMain />
      </Container>
    </>
  )
}

export default MainCard
