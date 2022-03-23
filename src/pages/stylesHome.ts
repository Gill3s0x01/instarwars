import styled from 'styled-components'

export const AvatarMain = styled.img`
  width: 334px;
  height: 520px;
`

export const ContentContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
  height: calc(100vh - 5rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Hero = styled.div`
  max-width: 600px;
  span {
    font-size: 2rem;
    font-weight: 700;
  }
  h1 span {
    color: var(--cyan-500);
    font-size: 4.5rem;
  }
  h1 {
    font-size: 4.5rem;
    line-height: 4.5rem;
    font-weight: 900;
    margin-top: 2.5rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 2.5rem;
    margin-top: 2rem;
  }

  p span {
    font-weight: 900;
    color: var(--cyan-500);
  }

  button {
    margin-top: 2rem;
  }
`
