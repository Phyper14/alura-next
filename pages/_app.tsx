import '../styles/globals.css'
import type { AppProps } from 'next/app'
import GlobalStyle from '@/src/Theme/GlobalStyle'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
