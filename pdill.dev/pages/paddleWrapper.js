import React from 'react'
import Head from 'next/head'
import MyLayout from '../components/layout'
import PaddleConditions from '../components/Paddler_App/paddler_app'
import Store from '../components/state/Store'

const App = () => {
  return (
    <div>
      <Head>
        <title>Ocean Paddler Weather Report</title>
      </Head>
      <main>
        <Store>
          <PaddleConditions />
        </Store>
      </main>
    </div>
  )
}

App.Layout = MyLayout

export default App
