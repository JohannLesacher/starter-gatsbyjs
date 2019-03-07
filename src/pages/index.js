import React from "react"

import Layout from "../components/layout"
import Landing from "../components/landing"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Landing data={data} parametres={['dingo', 'foufou']} />
  </Layout>
)

export default IndexPage

export const IndexPageQuery = graphql`
  query IndexPageQuery {
    file(relativePath: { eq: "landing.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 92) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
