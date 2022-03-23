import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0;
`

export const ButtonGit = styled.button`
  height: 2.5rem;
  border-radius: 9px;
  background-color: ${(props) => props.theme.colors.primary};
  background: var(--gray-800);
  padding: 0 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  transform: scale(1.11);
  transition: all 200ms ease-in;
  border: 0;
  &:hover {
    transform: scale(1.2);
  }
  &:hover .svg {
    opacity: 0.8;
  }
  .svg {
    font-size: 1.6rem;
    color: var(--yellow-500);
  }
  .closeIcon {
    margin-left: 1rem;
  }
`
export const Text = styled.text`
  margin-left: 0.5rem;
  color: ${(props) => props.theme.colors.textUp};
`
