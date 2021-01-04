import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby";

// FontAwesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

export default function Footer(props){
    return (
        <Container fluid className="pg-footer">
            <Row>
                <Col>
                <Link className="icons-hover" to="https://www.facebook.com/Rajvir.saggu99"><FontAwesomeIcon icon={['fab','facebook']} size="lg" className="social-icons" /></Link>
                <Link className="icons-hover" to="https://www.youtube.com/channel/UCiqNZRLlzE0I7SYyU_i87Tg"><FontAwesomeIcon icon={['fab','youtube']} size="lg" className="social-icons" /></Link>
                <Link className="icons-hover" to="https://www.instagram.com/rajvirsingh.99/"><FontAwesomeIcon icon={['fab','instagram']} size="lg" className="social-icons" /></Link>
                <Link className="icons-hover" to="https://github.com/RajvirS99"><FontAwesomeIcon icon={['fab','github']} size="lg" className="social-icons" /></Link>
                </Col>
                <Col className="right-footer">Made with &#10084; by Rajvir Singh</Col>
            </Row>
        </Container>
    )
}