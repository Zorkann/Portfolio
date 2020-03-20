import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

import ReactIcon from "../images/react5-icon.svg"
import ReduxIcon from "../images/redux-icon.png"
import HtmlIcon from "../images/html2-icon.png"
import CssIcon from "../images/css-icon.png"
import JsIcon from "../images/js-icon.png"
import SassIcon from "../images/sass5-icon.svg"
import NodeIcon from "../images/node5-icon.svg"
import AntDIcon from "../images/antd-icon.png"
import InvisionIcon from "../images/invision-icon.png"
import SketchIcon from "../images/sketch-icon.png"
import TypescriptIcon from "../images/typescript-icon.svg"
import WebpackIcon from "../images/webpack-icon.png"
import JestIcon from "../images/jest-icon.png"
import ReactTestingLibraryIcon from "../images/reactTestingLibrary-icon.png"
import CypressIcon from "../images/cypress-icon.png"

const Skill = styled.div`
  display: flex;
  font-size: 1.4rem;
  width: 100%;
  justify-content: flex-start;
  img {
    width: 4rem;
    height: 4rem;
  }
  span {
    align-self: center;
    padding-left: 2rem;
  }
`

const TestingSkills = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  justify-items: center;
  align-items: start;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 8;
`

const ProgrammingSkills = styled.div`
  display: grid;
  justify-items: center;
  align-items: start;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-start: 4;
  grid-column-end: 7;
  grid-row-start: 1;
  grid-row-end: 8;
`
const OtherSkills = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  justify-items: center;
  align-items: start;
  grid-column-start: 8;
  grid-column-end: 10;
  grid-row-start: 1;
  grid-row-end: 8;
`

const skillsData = {
  programming: [
    {
      title: "React",
      Icon: ReactIcon,
      alt: "React Icon",
    },
    {
      title: "Redux",
      Icon: ReduxIcon,
      alt: "Redux Icon",
    },
    {
      title: "Html",
      Icon: HtmlIcon,
      alt: "Html Icon",
    },
    {
      title: "Css",
      Icon: CssIcon,
      alt: "Css Icon",
    },
    {
      title: "Js",
      Icon: JsIcon,
      alt: "Js Icon",
    },
    {
      title: "Typescript",
      Icon: TypescriptIcon,
      alt: "Typescript Icon",
    },
    {
      title: "Sass",
      Icon: SassIcon,
      alt: "Sass Icon",
    },
    {
      title: "React Native",
      Icon: ReactIcon,
      alt: "React Icon",
    },
    {
      title: "Node",
      Icon: NodeIcon,
      alt: "Node Icon",
    },
  ],
  other: [
    {
      title: "AntD",
      Icon: AntDIcon,
      alt: "Ant D Icon",
    },
    {
      title: "Invision",
      Icon: InvisionIcon,
      alt: "Invision Icon",
    },
    {
      title: "Sketch",
      Icon: SketchIcon,
      alt: "Sketch Icon",
    },
    {
      title: "Webpack",
      Icon: WebpackIcon,
      alt: "Webpack Icon",
    },
  ],
  testing: [
    {
      title: "Cypress",
      Icon: CypressIcon,
      alt: "Cypress Icon",
    },
    {
      title: "React Testing Library",
      Icon: ReactTestingLibraryIcon,
      alt: "React Testing Library Icon",
    },
    {
      title: "Jest",
      Icon: JestIcon,
      alt: "Jest Icon",
    },
  ],
}

const SecondPage = () => (
  <Layout>
    <SEO title="Skills" />
    <TestingSkills>
      {skillsData.testing.map(otherSkill => (
        <Skill>
          <img src={otherSkill.Icon} alt={otherSkill.alt} />
          <span>{otherSkill.title}</span>
        </Skill>
      ))}
    </TestingSkills>
    <ProgrammingSkills>
      {skillsData.programming.map(programmingSkill => (
        <Skill>
          <img src={programmingSkill.Icon} alt={programmingSkill.alt} />
          <span>{programmingSkill.title}</span>
        </Skill>
      ))}
    </ProgrammingSkills>
    <OtherSkills>
      {skillsData.other.map(otherSkill => (
        <Skill>
          <img src={otherSkill.Icon} alt={otherSkill.alt} />
          <span>{otherSkill.title}</span>
        </Skill>
      ))}
    </OtherSkills>
  </Layout>
)

export default SecondPage
