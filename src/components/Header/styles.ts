import styled, { ThemeContext } from 'styled-components'

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
