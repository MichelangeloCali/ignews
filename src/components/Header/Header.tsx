import Image from 'next/image'
import styles from '../Header/Header.module.scss'
import logoSvg from '../../../public/images/logo.svg'
import { SignInButton } from '../SignInButton/SignInButton'

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logoSvg} alt="ignews seu blog de tecnologia" />
        <nav>
          <a href="" className={styles.active}>
            Home
          </a>
          <a href="">Posts</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}
