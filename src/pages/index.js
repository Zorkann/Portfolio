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
  padding-bottom: 2rem;
  padding-top: 1rem;
`

const IconContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, min-content);
  grid-gap: 1.5rem;
  svg {
    font-size: 3.5rem;
    :hover {
      cursor: pointer;
    }
  }
`

const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 8rem;
  align-items: end;
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
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
`

const SomeContent = styled.div`
  border: 1px solid red;
  grid-column-start: 5;
  grid-column-end: auto-fill;
  grid-row-start: 1;
  grid-row-end: auto-fill;
`

const Container = styled.div`
  grid-row-start: 1;
  grid-row-end: 6;
  grid-column-start: 1;
  grid-column-end: 5;
  display: grid;
`

const Icon = styled.a``

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title="About me" />
      <GreetingText>Hello, I am</GreetingText>
      <NameText>Marcin</NameText>
      <NameText>Skowyra</NameText>
      <DescriptionText>
        A young Frontend Developer interesting in mobile and web applications
      </DescriptionText>
      <span style={{ paddingBottom: "1rem" }}>Fine Me on</span>
      <IconContainer>
        <a href="/">
          <GitHubIcon />
        </a>
        <a href="/">
          <FacebookIcon />
        </a>
        <a href="/">
          <InstagramIcon />
        </a>
        <a href="/">
          <LinkedInIcon />
        </a>
      </IconContainer>
      <ButtonsContainer>
        <Button>Hire Me</Button>
        <Button>Portfolio</Button>
      </ButtonsContainer>
    </Container>
    <SomeContent>SomeConent</SomeContent>
  </Layout>
)

export default IndexPage
