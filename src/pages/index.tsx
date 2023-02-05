import Head from 'next/head'
import Image from 'next/image'
import avatarSvg from '../../public/images/avatar.svg'
import styles from './home.module.scss'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for $9.90 month</span>
          </p>
        </section>

        <Image src={avatarSvg} alt="girl coding" />
      </main>
    </>
  )
}

export default Home
