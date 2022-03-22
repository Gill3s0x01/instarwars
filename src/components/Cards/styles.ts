import styled from 'styled-components'

export const ImageCard = styled.img`
  width: 100%;
  height: 250px;
  object-fit: fill;
  border-radius: 5px;
`

export const ButtonModal = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Container = styled.div`
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 200ms ease-in;
  min-width: 250;
  min-height: 450px;
  max-width: 300px;
  max-height: 500px;
  /* background-color: var(--background); */
  background-color: red;
  overflow: hidden;
  margin: 30px;

  &:hover {
    transform: scale(1.05);
  }
`
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  height: 100%;
  width: 100%;
  background-color: var(--background);
`
export const Title = styled.h1`
  flex-direction: column;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--text-title);
  margin-bottom: 0.5rem;
`

export const Text = styled.p`
  flex-direction: column;
  font-size: 1rem;
  color: var(--text-body);
  margin-bottom: 0.5rem;
`
