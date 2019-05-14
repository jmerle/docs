import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ReferenceLayout from '../components/reference-layout'

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <ReferenceLayout currentPageTitle={frontmatter.title}>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ReferenceLayout>
  )
}

Template.propTypes = {
  data: PropTypes.object
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
