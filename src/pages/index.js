import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Header from "../components/Header/header"
import { Container, Row, Col } from "react-bootstrap"
import Img from "gatsby-image"
import Footer from "../components/Footer/footer"

export default function Home() {

  // image fetching from images directory using graphql
  
  const data = useStaticQuery(graphql`
  query homepageImage {
    file(relativePath: {eq: "rs-home.jpg"}) {
      childImageSharp {
        fluid {
          aspectRatio
          base64
          sizes
          src
          srcSet
        }
      }
    }
  }
  `);

  return (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Rajvir Singh</title>
      <script src="mousemove.js" />
    </Helmet>
    <Header headerText="Index Header" />
      {/* main section */}

      <div className="mainSection">
            <Container>
            <Row className="centered">
                <Col xs={6}>
                    <div>
                        <h1 className="indexPageHeading">I'm <b className="font-weight-bold">Rajvir Singh</b></h1>
                        <p className="indexPageText">Tech Geek, Web Developer, Computer Science Student</p>   
                    </div>
                </Col>
                <Col xs={6}>
                    <Img className="rsImage" fluid={data.file.childImageSharp.fluid} />
                </Col> 
            </Row>
            </Container>
        </div>
  
    <Footer />
  </div>
  )
}
