// import '@/styles/globals.css'
// import './css/integration1.css'
import type { AppProps } from 'next/app'

export default function App ({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}
