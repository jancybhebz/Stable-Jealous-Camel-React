import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Stable Jealous Camel</title>
        <meta property="og:title" content="Stable Jealous Camel" />
      </Helmet>
      <form className="home-form">
        <h1 className="home-text">WELCOME</h1>
        <img
          alt="image"
          src="/playground_assets/paetelogo-big-transparent-300h.gif"
          className="home-image"
        />
      </form>
    </div>
  )
}

export default Home
