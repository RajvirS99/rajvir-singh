import React from "react"
import Header from "../components/Header/header"
import Post from "../components/Post/post"
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
                    <h1>My Experiences</h1>
                    <p className="textGray">Feel to free to have a ride.</p>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    
                </div>
            <Footer/>  
        </div>
    )
}