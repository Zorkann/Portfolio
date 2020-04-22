import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { useSpring, animated, config } from "react-spring"
import Skills from "../components/skills"

const Block = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  background: linear-gradient(rgb(120, 13, 56), rgb(130, 8, 22));
  box-shadow: 0px 0px 25px 3px rgba(0, 0, 0, 0.5);
`

const TestingBlock = styled(Block)``

const ProgrammingBlock = styled(Block)`
  width: 80%;
  justify-self: center;

  @media (max-width: 1000px) {
    width: 100%;
  }
`
const OtherBlock = styled(Block)``

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr 2fr;
  grid-template-rows: 1fr;
  grid-column: 3/11;
  grid-row: 3/12;

  @media (max-width: 1300px) {
    grid-column: 2/12;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-column: 4/10;
    grid-gap: 2rem;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-column: 3/11;
    grid-gap: 2rem;
  }
`

const SkillsComponent = () => {
  const animation = useSpring({
    from: { height: "0%", opacity: 0 },
    to: { height: "100%", opacity: 1 },
    config: config.slow,
  })

  const Testing = (
    <TestingBlock style={animation}>
      <Skills.TestingSkills />
    </TestingBlock>
  )

  const Programming = (
    <ProgrammingBlock style={animation}>
      <Skills.ProgrammingSkills />
    </ProgrammingBlock>
  )

  const Other = (
    <OtherBlock style={animation}>
      <Skills.OtherSkills />
    </OtherBlock>
  )

  return (
    <Layout>
      <SEO title="Skills" />
      <SkillsContainer>
        {Testing}
        {Programming}
        {Other}
      </SkillsContainer>
    </Layout>
  )
}

export default SkillsComponent
