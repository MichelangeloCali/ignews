import { Header } from '@/components/Header/Header'
import { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import '../styles/global.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
