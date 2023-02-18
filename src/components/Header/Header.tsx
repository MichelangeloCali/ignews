import Image from 'next/image'

import styles from '../Header/Header.module.scss'
import logoSvg from '../../../public/images/logo.svg'
import { SignInButton } from '../SignInButton/SignInButton'
import { ActiveLink } from '../ActiveLink/Activelink'

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logoSvg} alt="ignews seu blog de tecnologia" />
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            Home
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} prefetch href="/posts">
            Posts
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}
