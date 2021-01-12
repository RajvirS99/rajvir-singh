import React from 'react'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
// import Img from 'gatsby-image'

function BlogPost({ data }) {

  const { markdownRemark: post } = data;

  return (
    <div>
      <Header />
      <div className="blog-post-container">
        <Helmet title={`${post.frontmatter.title}`} />
        <div className="blog-post">
          <h1 className="blog-post-title">{post.frontmatter.title}</h1>
          <p className="textGray ml-2"> Posted on - {post.frontmatter.date}</p>
          <div className="blog-post-content">
            {/* <Img fluid={image.childImageSharp.fluid} />  */}
            {/* <img src={post.frontmatter.featuredImage.src} alt={post.frontmatter.featuredImage.alt} /> */}
            <div
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default BlogPost

export const PostFetching = graphql`
    query blogPostByPath($path: String!){
        markdownRemark(frontmatter: {path: {eq: $path}}) {
            html
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              path
              title
            }
          }
        }
`