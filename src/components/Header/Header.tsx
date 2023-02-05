import Image from 'next/image'
import styles from '../Header/Header.styles.module.scss'
import logoSvg from '../../../public/images/logo.svg'

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
      </div>
    </header>
  )
}
