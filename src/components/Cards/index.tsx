import {
  Container,
  ButtonModal,
  Description,
  ImageCard,
  WrapImage,
  Title,
  Text,
} from './styles'

const CardMain = () => {
  const Click = () => {
    alert('Click')
  }

  return (
    <Container>
      <ButtonModal onClick={Click}>
        <WrapImage>
          <ImageCard src="/images/bg5.jpg" alt="background" />
        </WrapImage>
      </ButtonModal>
      <Description>
        <Title>Titulo</Title>
        <Text>Descrição</Text>
      </Description>
    </Container>
  )
}

export default CardMain
