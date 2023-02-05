import Head from 'next/head'
import Image from 'next/image'
import { GetStaticProps } from 'next'
import { SubscribeButton } from '@/components/SubscribeButton/SubscribeButton'
import avatarSvg from '../../public/images/avatar.svg'
import styles from './home.module.scss'
import { stripe } from '@/services/stripe'

interface HomeProps {
  product: {
    priceId: string
    amount: number
  }
}

const Home = ({ product }: HomeProps) => {
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
            <span>por {product.amount} mês</span>
          </p>

          <SubscribeButton priceId={product.priceId} />
        </section>

        <Image src={avatarSvg} alt="girl coding" />
      </main>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1MYBjeJzznzrphXPORBFKieP')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price.unit_amount! / 100),
  }

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, //24 hours
  }
}
