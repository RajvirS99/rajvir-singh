import React from 'react'
import { Row, Col } from 'react-bootstrap'

function post() {
    return (
        <Row className="blogPost">
            <Col lg={3}>
                Image
           </Col>
            <Col lg={9}>
                <h3>This is the title</h3>
            </Col>
        </Row>
    )
}

export default post
