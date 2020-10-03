import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
// import image from "../../images/rs-home.jpg"
import Img from "gatsby-image"

export default function MainSection(){
  const data = useStaticQuery(graphql`
  query MyQuery {
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
  `)
    return (
        <div className="mainSection">
            <Container>
            <Row className="centered">
                <Col xs={6}>
                    <div>
                        <p className="display-4">I'm <b className="font-weight-bold">Rajvir Singh</b></p>
                        <h4>Tech Geek, Web Developer, Computer Science Student</h4>   
                    </div>
                </Col>
                <Col xs={6}>
                    {/* <img className="rsImage" id="moveImage" src={image} alt=""/> */}
                    <Img className="rsImage" fluid={data.file.childImageSharp.fluid} />
                </Col> 
            </Row>
            </Container>
        </div>
    )
}