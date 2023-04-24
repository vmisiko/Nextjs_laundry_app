import Head from 'next/head'
import Layout from '@/presentation/layouts/MainLayout'
import NewOrder from '@/presentation/modules/new-order'

function Home() {
  return (
    <>
      <Head>
        <title>Create New order </title>
        <meta name="description" content="Create New order" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen">
        <NewOrder />
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