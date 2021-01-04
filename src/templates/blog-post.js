import React from 'react'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

function blogPost({ data }) {

  const { markdownRemark: post } = data
  return (
    <div>
      <Header />
      <div className="blog-post-container">
        <Helmet title={`${post.frontmatter.title}`} />
        <div className="blog-post">
          <h1 className="blog-post-title">{post.frontmatter.title}</h1>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default blogPost

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
