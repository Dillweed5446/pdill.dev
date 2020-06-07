import Link from 'next/link'
import Slider from '../components/slider'
import Head from 'next/head'
import Layout from '../components/layout'

export default function PhotoAlbum() {
    return (
      <Layout>
      <Head>
          <title>Photo Album</title>
      </Head>
        <Slider />
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Layout>
    )
  }