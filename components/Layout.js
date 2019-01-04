import React, { Fragment } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'

const Layout = (props) => (
  <Fragment>
    <Head><title>BitzPrice</title></Head>
    <link
      rel="stylesheet"
      href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
    />
    <Navbar/>
    <div className="container">{props.children}</div>
  </Fragment>
)

export default Layout