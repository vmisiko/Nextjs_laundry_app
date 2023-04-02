import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/presentation/layouts/MainLayout'
import { ReactNode } from 'react'
const inter = Inter({ subsets: ['latin'] })

function Home() {
  return (
    <>
      <Head>
        <title>Create New order </title>
        <meta name="description" content="Create New order" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">

      </main>
    </>
  )
}

Home.getLayout = function getLayout(page:any) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Home