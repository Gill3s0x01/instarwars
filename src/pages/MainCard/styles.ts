import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  flex-direction: row;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 22rem));
  gap: 1rem;
  justify-content: space-between;

  @media (max-width: 820px) {
    padding-left: 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-template-columns: 1fr;
    margin: 0 auto;
    position: relative;
  }
`

export const WrapCard = styled.div`
  overflow: hidden;
  padding-left: 8px;
  padding-right: 8px;
`
