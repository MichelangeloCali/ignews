import Link from 'next/link'
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
          <Link href="/" className={styles.active}>
            Home
          </Link>
          <Link href="/posts" prefetch>
            Posts
          </Link>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}
