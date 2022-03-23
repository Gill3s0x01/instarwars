import { FaGithub } from 'react-icons/fa'
import { ButtonGit, Text, Container } from './styles'
import { FiX } from 'react-icons/fi'

interface ISigninButtonProps {
  isUserLoggedIn?: boolean
}

export const SigninButton: React.FC<ISigninButtonProps> = () => {
  const isUserLoggedIn = true
  return (
    <Container>
      {isUserLoggedIn ? (
        <ButtonGit>
          <FaGithub color="#04d361" width={'25px'} />
          <Text>Lorison Gilles</Text>
          <FiX color="#737380" className="closeIcon" />
        </ButtonGit>
      ) : (
        <ButtonGit>
          <FaGithub className="svg" />
          <Text>Sign in Github</Text>
        </ButtonGit>
      )}
    </Container>
  )
}
