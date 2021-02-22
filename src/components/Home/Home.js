import React from "react"
import { navigate } from "gatsby"
import * as Styles from "./home.styles"
import { useTranslation } from "react-i18next"

const {
  GreetingText,
  NameText,
  DescriptionText,
  ButtonsContainer,
  Button,
} = Styles

const Greeting = () => {
  const { t } = useTranslation()
  return <GreetingText>{t("Hello, I'm")}</GreetingText>
}
const Name = () => <NameText>Marcin</NameText>
const Surname = () => <NameText>Skowyra</NameText>
const Description = () => {
  const { t } = useTranslation()
  return (
    <DescriptionText>
      {t("A Frontend Developer interested in mobile and web apps")}
    </DescriptionText>
  )
}

const Buttons = () => {
  const { t } = useTranslation()
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
