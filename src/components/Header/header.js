import React from "react"
import { Container, Navbar, Nav } from "react-bootstrap"

export default function Header(props){
    return (
        <Container>
            <Navbar expand="lg">
                <Navbar.Brand><a href="/">RS</a></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="ml-auto">
                        <Nav.Link href="/blog">Blog</Nav.Link>
                        <Nav.Link href="/about">About Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}