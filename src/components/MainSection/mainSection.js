import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import image from "../../images/rs-home.jpg"

export default function MainSection(){
    return (
        <div className="mainSection">
            <Container>
            <Row className="centered">
                <Col xs={6}>
                    <div>
                        <h1 className="display-4">I'm <b>Rajvir Singh</b></h1>
                        <h4>Tech Geek, Web Developer, Computer Science Student</h4>   
                    </div>
                </Col>
                <Col xs={6}>
                    <img className="rsImage" src={image} alt=""/>
                </Col> 
            </Row>
            </Container>
        </div>
    )
}