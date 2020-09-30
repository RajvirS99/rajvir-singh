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
                        <p className="display-4">I'm <b className="font-weight-bold">Rajvir Singh</b></p>
                        <h4>Tech Geek, Web Developer, Computer Science Student</h4>   
                    </div>
                </Col>
                <Col xs={6}>
                    <img className="rsImage" id="moveImage" src={image} alt=""/>
                </Col> 
            </Row>
            </Container>
        </div>
    )
}