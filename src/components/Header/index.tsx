import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'
import { Container, LogoMain, Nav, Text } from './styles'
import { SigninButton } from '../SigninButton'

interface Props {
  toggleTheme(): void
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext)
  return (
    <Container>
      <LogoMain src="/images/star.png" alt="logoStar" />
      <Nav>
        <Text>Home</Text>
        <Text>Post</Text>
        <Text>Post</Text>
      </Nav>
      <SigninButton />
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.text)}
        onColor={colors.secondary}
      />
    </Container>
  )
}

export default Header
