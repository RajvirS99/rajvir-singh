import React from "react"
import Header from "../components/Header/header"
import AboutSection from "../components/AboutSection/aboutSection"
import Footer from "../components/Footer/footer"
import { Helmet } from "react-helmet"

export default function About() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>About Me</title>
            </Helmet>
            <Header/>
            <AboutSection/>
            <Footer/>  
        </div>
    )
}