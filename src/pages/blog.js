import React from "react"
import Header from "../components/Header/header"
// import GallerySection from "../components/GallerySection/gallerySection"
import Footer from "../components/Footer/footer"

export default function About() {
    return (
        <div>
            <Header/>
                <div className="aboutSection">
                    <p>This is my blog</p>
                </div>
            <Footer/>  
        </div>
    )
}