import React from "react"
import { Helmet } from "react-helmet"
import Header from "../components/Header/header"
import GallerySection from "../components/GallerySection/gallerySection"
import Footer from "../components/Footer/footer"

export default function About() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Gallery</title>
            </Helmet>
            <Header/>
                <GallerySection/>
            <Footer/>  
        </div>
    )
}