import Layout from '../components/Layout'
import { PageInfo } from './api/typings.d'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
 
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout >
      <Component {...pageProps} />
    </Layout>
  )
}