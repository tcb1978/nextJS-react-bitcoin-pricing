import React, { Fragment } from 'react'
import Fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Prices from '../components/Prices'

const Index = (props) => (
  <Layout>
    <Fragment>
      <main>
        <h1>Welcome to BitzPrice</h1>
        <p>Check current Bitcoin rate</p>
        <Prices bpi={props.bpi}/>
      </main>
    </Fragment>
  </Layout>
)

Index.getInitialProps = async () => {
  const url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
  const res = await fetch(url)
  const data = await res.json()

  return {
    bpi: data.bpi
  }
}

export default Index