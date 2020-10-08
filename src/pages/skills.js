import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SnakeBorderCard from "../components/snakeBorderCard"
import styled from "styled-components"

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 40rem;
  grid-column: 3/11;
  grid-row-start: 3;
  grid-gap: 4rem;
`

const SkillsComponent = () => {
  return (
    <Layout>
      <SEO title="Skills" />
      <SkillsContainer>
        <SnakeBorderCard title={"Programming"} />
        <SnakeBorderCard title={"Tests"} />
        <SnakeBorderCard title={"Others"} />
      </SkillsContainer>
    </Layout>
  )
}

export default SkillsComponent
