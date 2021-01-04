import React from "react"
import { Helmet } from "react-helmet"
import Header from "../components/Header/header"
import Footer from "../components/Footer/footer"

export default function About() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Gallery</title>
            </Helmet>
            <Header/>
                <div className="gallerySection">
                    <h1>My Gallery</h1>
                    <p className="textGray mb-0">Welcome to my auspicious world of Photos. All the Pictures here are captured by me.</p>
                    <p className="textGray">Feel free to check them out.</p>
                    <div className="photos">
                        <p>Here comes my photos</p>
                    </div>
                </div>
            <Footer/>  
        </div>
    )
}