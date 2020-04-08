import React from "react"
import { animated } from "react-spring"
import GitHubIcon from "@material-ui/icons/GitHub"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import styled from "styled-components"
import { navigate } from "gatsby"

const GreetingText = styled(animated.h2)`
  font-size: 2.5rem;
  margin: 0;
`

const NameText = styled(animated.h1)`
  font-size: 7rem;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 6rem;
  }
`

const DescriptionText = styled(animated.h3)`
  margin: 0;
  padding-bottom: 2rem;
  padding-top: 1rem;
`

const IconContainer = styled(animated.div)`
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

const ButtonsContainer = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(2, 15rem);
  grid-auto-rows: 7rem;
  align-items: end;
  grid-gap: 1rem;
`

const Button = styled(animated.button)`
  border: 1px solid white;
  border-radius: 25px;
  background-color: transparent;
  color: white;
  outline: 0;
  :hover {
    background: linear-gradient(rgb(180, 13, 56), rgb(130, 8, 22));
    border-color: rgb(130, 8, 22);
    cursor: pointer;
  }
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
`

const Greeting = <GreetingText>Hello, I'm</GreetingText>
const Name = <NameText>Marcin</NameText>
const Surname = <NameText>Skowyra</NameText>
const Description = (
  <DescriptionText>
    A Frontend Developer interested in mobile and web apps
  </DescriptionText>
)
const FindMe = (
  <animated.div style={{ marginBottom: "0.5rem" }}>Fine Me on</animated.div>
)

const Icons = (
  <IconContainer>
    <a href="https://github.com/Zorkann">
      <GitHubIcon />
    </a>
    <a href="https://www.facebook.com/marcin.skowyra.9">
      <FacebookIcon />
    </a>
    <a href="https://www.instagram.com/zoorkann/">
      <InstagramIcon />
    </a>
    <a href="https://www.linkedin.com/in/marcin-skowyra-5524b7150/">
      <LinkedInIcon />
    </a>
  </IconContainer>
)
const Buttons = (
  <ButtonsContainer>
    <Button onClick={() => navigate("/contact")}>Hire Me</Button>
    <Button onClick={() => navigate("/skills")}>Check my skills</Button>
  </ButtonsContainer>
)

const HomeDescription = [
  Greeting,
  Name,
  Surname,
  Description,
  FindMe,
  Icons,
  Buttons,
]

export default HomeDescription
