import React from "react"
import Header from "../components/Header/header"
// import GallerySection from "../components/GallerySection/gallerySection"
import Footer from "../components/Footer/footer"
import { Helmet } from "react-helmet"

export default function About() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>My Blog</title>
            </Helmet>
            <Header/>
                <div className="blogSection">
                    <p>This is my blog</p>
                </div>
            <Footer/>  
        </div>
    )
}