import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import HeaderToPhones from "../components/headerToPhones";

const notFound = () => {
  return (
    <div>
      <Header/>
      <h1>404 Not Found :( </h1>
      <Footer/>
      <HeaderToPhones/>
    </div>
  )
}

export default notFound
