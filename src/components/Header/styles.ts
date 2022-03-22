import styled from 'styled-components'

export const Container = styled.div`
  height: 80px;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  color: ${(props) => props.theme.colors.textUp};
`
export const LogoMain = styled.img`
  height: 60px;
  width: auto;
`
export const Nav = styled.nav`
  margin-left: 5rem;
  height: 5rem;
  cursor: pointer;
`
export const Text = styled.a`
  display: inline-block;
  position: relative;
  padding: 0 0.5rem;
  line-height: 5rem;
  color: ${(props) => props.theme.colors.textUp};
  transition: transform 200ms ease-in;
  & + a {
    margin-left: 2rem;
  }
  &:hover {
    color: var(--cyan-500);
    opacity: 0.8;
  }
  &.active {
    color: ${(props) => props.theme.colors.secondary};
  }

  &.active::after {
    content: '';
    height: 3px;
    border-radius: 3px 3px 0 0;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: var(--yellow-500);
    bottom: 1px;
  }
`
