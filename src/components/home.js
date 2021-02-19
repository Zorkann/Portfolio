import React from "react"
import { navigate } from "gatsby"
import * as Styles from "./home.styles"

const {
  GreetingText,
  NameText,
  DescriptionText,
  ButtonsContainer,
  Button,
} = Styles

const Greeting = <GreetingText>Hello, I'm</GreetingText>
const Name = <NameText>Marcin</NameText>
const Surname = <NameText>Skowyra</NameText>
const Description = (
  <DescriptionText>
    A Frontend Developer interested in mobile and web apps
  </DescriptionText>
)

const Buttons = (
  <ButtonsContainer>
    <Button onClick={() => navigate("/contact")}>Hire Me</Button>
    <Button onClick={() => navigate("/skills")}>Check my skills</Button>
  </ButtonsContainer>
)

const HomeDescription = [Greeting, Name, Surname, Description, Buttons]

export default HomeDescription
