import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import { AvatarMain, ContentContainer, Hero } from './stylesHome'

const Home = () => {
  return (
    <>
      <Head>
        <title>InstaHome</title>
      </Head>

      <ContentContainer>
        <Hero>
          <span> 👋 Hey, welcome </span>
          <h1>
            New about the
            <span> Stars Wars</span> world.
          </h1>
          <p>
            Get acesse to all the informations <br /> <span>$9.90</span>
          </p>
          <SubscribeButton />
        </Hero>
        <AvatarMain src="/images/avatar.png" alt="Girl coding" />
      </ContentContainer>
    </>
  )
}

export default Home
