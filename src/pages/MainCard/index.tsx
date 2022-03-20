import { useState, useEffect } from 'react'
import CardMain from '../../components/Cards'
import { useStars } from '../../hooks/useStars'
import { IStars } from '../../interfaces'
import { Banner, ImageBkg, Container } from './styles'

const MainCard = () => {
  const { data: item, error } = useStars()
  const [data, setData] = useState<IStars[] | undefined>()

  useEffect(() => {
    if (item) {
      setData(item)
    }
  }, [item])

  return (
    <>
      {/* <Banner>
        <ImageBkg src="/images/bg7.jpg" alt="background" />
      </Banner> */}
      <Container>
        {data &&
          data.map((item: IStars) => (
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
