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

const TestingBlock = styled(Block)`
  width: 50%;
  justify-self: end;

  @media (max-width: 1250px) {
    justify-self: start;
    width: 75%;
  }
`

const ProgrammingBlock = styled(Block)`
  width: 75%;

  @media (max-width: 1250px) {
    width: 100%;
  }
`
const OtherBlock = styled(Block)`
  justify-self: start;
  width: 50%;

  @media (max-width: 1250px) {
    width: 75%;
    justify-self: end;
  }
`

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  grid-template-rows: 1fr;
  grid-column: 2/12;
  grid-row: 3/12;
`

const SkillsComponent = () => {
  const sideSkillsAnimation = useSpring({
    from: { height: "0%", opacity: 0 },
    to: { height: "75%", opacity: 1 },
    delay: 200,
    config: config.slow,
  })

  const centerSkillsAnimation = useSpring({
    from: { height: "0%", opacity: 0 },
    to: { height: "100%", opacity: 1 },
    config: config.slow,
  })

  const Testing = (
    <TestingBlock style={sideSkillsAnimation}>
      <Skills.TestingSkills />
    </TestingBlock>
  )

  const Programming = (
    <ProgrammingBlock style={centerSkillsAnimation}>
      <Skills.ProgrammingSkills />
    </ProgrammingBlock>
  )

  const Other = (
    <OtherBlock style={sideSkillsAnimation}>
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
