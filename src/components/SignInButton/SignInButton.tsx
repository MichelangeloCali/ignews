import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from '../SignInButton/SignInButton.styles.module.scss'

export const SignInButton = () => {
  const isUserLoggedIn = true

  return isUserLoggedIn ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#04d361" />
      Michelangelo Cali
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  )
}
