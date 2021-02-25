import React from "react"
import * as Styles from "./home.styles"
import { useI18next } from "gatsby-plugin-react-i18next"

const {
  GreetingText,
  NameText,
  DescriptionText,
  ButtonsContainer,
  Button,
} = Styles

const Greeting = () => {
  const { t } = useI18next()
  return <GreetingText>{t("Hello, I'm")}</GreetingText>
}
const Name = () => <NameText>Marcin</NameText>
const Surname = () => <NameText>Skowyra</NameText>
const Description = () => {
  const { t } = useI18next()
  return (
    <DescriptionText>
      {t("A Frontend Developer interested in mobile and web apps")}
    </DescriptionText>
  )
}

const Buttons = () => {
  const { t, navigate } = useI18next()
  return (
    <ButtonsContainer>
      <Button onClick={() => navigate("/contact")}>{t("Hire Me")}</Button>
      <Button onClick={() => navigate("/skills")}>
        {t("Check my skills")}
      </Button>
    </ButtonsContainer>
  )
}

const HomeDescription = [Greeting, Name, Surname, Description, Buttons]

export default HomeDescription
