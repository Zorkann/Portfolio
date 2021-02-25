import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const Skills = () => (
  <Layout>
    <p>Skills</p>
  </Layout>
)

export default Skills

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
