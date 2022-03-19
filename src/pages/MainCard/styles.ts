import styled from 'styled-components'

export const Banner = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  border-bottom-left-radius: 50% 40%;
  border-bottom-right-radius: 50% 40%;
`
export const ImageBkg = styled.img`
  width: 100%;
  height: 380px;
  border-bottom-left-radius: 50% 35%;
  border-bottom-right-radius: 50% 35%;
`

export const Container = styled.div`
  display: grid;
  flex-direction: row;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 22rem));
  gap: 1rem;
  justify-content: space-between;
  margin: 0 auto;

  @media (max-width: 860px) {
    flex-direction: column;
    position: relative;
  }
`

export const WrapCard = styled.div`
  overflow: hidden;
  padding-left: 8px;
  padding-right: 8px;
`
