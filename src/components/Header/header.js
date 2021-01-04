import React from "react"
import { Container, Navbar, Nav } from "react-bootstrap"

export default function Header(props){
    return (
        <Container fluid>
            <Navbar expand="lg" fluid="true">
                <Navbar.Brand><a className="icons-hover" href="/">RS</a></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                        <Nav.Link href="/gallery">My Gallery</Nav.Link>
                        <Nav.Link href="/about">About Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}