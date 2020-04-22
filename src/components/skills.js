import React from "react"

import styled from "styled-components"
import skillsData from "../data/skillsData"

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  flex-wrap: wrap;
  span {
    font-size: 1.5rem;
    padding: 1rem;
  }

  @media (max-width: 1000px) {
    height: 200px
  }
`

const SkillHeader = styled.h2`
  grid-column: 1/-1;
`

const Skills = ({ data, title }) => (
  <>
    <SkillHeader> {title} </SkillHeader>
    <SkillsList>
      {data.map(({ title }) => (
        <span>{title}</span>
      ))}
    </SkillsList>
  </>
)

const TestingSkills = () => (
  <Skills data={skillsData.testing} title={"Testing Skills"} />
)
const ProgrammingSkills = () => (
  <Skills data={skillsData.programming} title={"Programming Skills"} />
)
const OtherSkills = () => (
  <Skills data={skillsData.other} title={"Other Skills"} />
)

export default {
  TestingSkills,
  ProgrammingSkills,
  OtherSkills,
}
