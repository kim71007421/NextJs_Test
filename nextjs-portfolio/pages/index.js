import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>NextJs 포트폴리오</title>
        <meta name="description" content="NextJs 포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  )
}
