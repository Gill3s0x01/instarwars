import { FaGithub } from 'react-icons/fa'
import { ButtonGit } from './styles'

export const SigninButton: React.FC = () => {
  return (
    <ButtonGit>
      <FaGithub />
      Sign in Github
    </ButtonGit>
  )
}
