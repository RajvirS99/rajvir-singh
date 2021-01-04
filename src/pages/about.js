import React from "react"
import Header from "../components/Header/header"
import Footer from "../components/Footer/footer"
import { Helmet } from "react-helmet"

export default function About() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About Me</title>
            </Helmet>
            <Header />
            <div className="aboutSection">
                <h1 className="display-4 font-weight-bold mb-4">About Me</h1>
                <p>I am Rajvir Singh from Punjab, India. I'm a Computer Science student from Guru Nanak Dev Engineering College. As a tech geek, I like to know stuff about technologies. It can be any anything from programming to latest devices. I also love to share my knowledge. I also have a YouTube channel where I like to share stuff I learn.</p>
                <p>Being a Nature Lover, I like to spend time in outside. I love to travel new places and talking to new people. Getting exposure about new places. Sometimes I also like click pictures of world living around me. Fun fact- It can include things as small as snowflake to as big as sunsets.</p>
                <p></p>
            </div>
            <Footer />
        </div>
    )
}