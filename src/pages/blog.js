import React from "react"
import Header from "../components/Header/header"
import { graphql, Link } from 'gatsby'
import Footer from "../components/Footer/footer"
import { Helmet } from "react-helmet"
import Img from 'gatsby-image'
import { Row, Col } from "react-bootstrap"

export default function Blog({ data }) {
    const { edges: posts } = data.allMarkdownRemark

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Experiences</title>
            </Helmet>
            <Header />
            <div className="blogSection">
                <h1>My Experiences</h1>
                <p className="textGray">Feel to free to have a ride.</p>
                {posts
                    .filter(post => post.node.frontmatter.title.length > 0)
                    .map(({ node: post }) => {
                        const imageAlt = post.frontmatter.title
                        const featuredImage = post.frontmatter.image
                        return (
                            <Row className="blogPost">
                                <Col xs={3}>
                                    <Img fluid={post.frontmatter.image} alt={imageAlt} />
                                </Col>
                                <Col className="blogDescription" xs={9}>
                                    <Link className="linkText" to={post.frontmatter.path}><h3>{post.frontmatter.title}</h3></Link>
                                    <p>{post.excerpt}</p>
                                </Col>
                            </Row>
                        )
                    })}
            </div>
            <Footer />
        </div>
    )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            image
          }
        }
      }
    }
  }
`