import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"
import GitHubIcon from "@material-ui/icons/GitHub"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import LinkedInIcon from "@material-ui/icons/LinkedIn"

const GreetingText = styled.h2`
  font-size: 2.5rem;
  margin: 0;
`

const NameText = styled.h1`
  font-size: 7rem;
  margin: 0;
`

const DescriptionText = styled.h3`
  margin: 0;
`

const IconContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, min-content);
  grid-gap: 1rem;
`

const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-auto-rows: 5rem;
  grid-gap: 1rem;
`

const Button = styled.button`
  border: 1px solid white;
  border-radius: 25px;
  background-color: transparent;
  color: white;
  outline: 0;
  :hover {
    background-color: rgb(244, 8, 22);
    border-color: rgb(244, 8, 22);
    cursor: pointer;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="About me" />
    <div>
      <GreetingText>Hello, I am</GreetingText>
      <NameText>Marcin</NameText>
      <NameText>Skowyra</NameText>
      <DescriptionText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
        sollicitudin tellus erat, in bibendum leo lacinia eu. Vivamus mi lectus,
        sodales eu placerat et, porta vitae sapien. Proin justo nulla, maximus
        sed est eu, laoreet egestas purus. Vivamus lacinia facilisis mauris, id
        lobortis
      </DescriptionText>
    </div>
    <div>
      <span>Fine Me on</span>
      <IconContainer>
        <GitHubIcon style={{ fontSize: "3.5rem" }} />
        <FacebookIcon style={{ fontSize: "3.5rem" }} />
        <InstagramIcon style={{ fontSize: "3.5rem" }} />
        <LinkedInIcon style={{ fontSize: "3.5rem" }} />
      </IconContainer>
    </div>
    <ButtonsContainer>
      <Button>Hire Me</Button>
      <Button>Portfolio</Button>
    </ButtonsContainer>
  </Layout>
)

export default IndexPage
