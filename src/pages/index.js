import React from "react"
import { Helmet } from "react-helmet"
import Header from "../components/Header/header"
import MainSection from "../components/MainSection/mainSection"
import Footer from "../components/Footer/footer"

export default function Home() {
  return (
  <div>
    <Helmet>
      <meta charSet="utf-8"/>
      <title>Rajvir Singh</title>
    </Helmet>
    <Header headerText="Index Header" />
    <MainSection/>
    <Footer/>
  </div>
  )
}
