import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'
import { Container, LogoMain, Nav, Text, ButtonHeader } from './styles'
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
        <Text>Planets</Text>
        <Text>Species</Text>
        <Text>People</Text>
      </Nav>
      <ButtonHeader>
        <SigninButton />
      </ButtonHeader>
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
