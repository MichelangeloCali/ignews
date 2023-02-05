import { SubscribeButton } from '@/components/SubscribeButton/SubscribeButton'
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
          <span>👏 Olá, seja bem-vindo</span>
          <h1>
            Novidades e atualizações do <span>React</span>.
          </h1>
          <p>
            Acesse todas as publicações agora
            <br />
            <span>por R$9,90 mês</span>
          </p>

          <SubscribeButton />
        </section>

        <Image src={avatarSvg} alt="girl coding" />
      </main>
    </>
  )
}

export default Home
