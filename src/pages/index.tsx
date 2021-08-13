import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tenka</title>
        <meta name="description" content="Build your project faster" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <h1>
          Welcome to Tenka
        </h1>
      </main>

    </div>
  )
}

export default Home
