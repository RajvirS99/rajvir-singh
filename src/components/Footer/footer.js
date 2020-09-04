import React from "react"
import { Container, Row, Col } from "react-bootstrap"

export default function Footer(props){
    return (
        <Container className="pg-footer">
            <Row>
                <Col>Made with &#10084; by Rajvir Singh</Col>
                <Col className="right-footer">Made with &#10084; by Rajvir Singh</Col>
            </Row>
        </Container>
    )
}