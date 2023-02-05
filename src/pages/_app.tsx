import { Header } from '@/components/Header/Header'
import { AppProps } from 'next/app'
import '../styles/global.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
