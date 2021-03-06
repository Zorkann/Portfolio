import React from "react"
import HomeIcon from "@material-ui/icons/Home"
import CodeIcon from "@material-ui/icons/Code"
import ContactIcon from "@material-ui/icons/MailOutline"
import GitHubIcon from "@material-ui/icons/GitHub"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import * as Styles from "./header.styles"
import { Theme } from "../Layout"
import { Link, useI18next } from "gatsby-plugin-react-i18next"

const {
  Container,
  HeaderTitle,
  LanguageOptions,
  Nav,
  ContactIcons,
  LogoWrapper,
} = Styles

const navigationConfig = [
  {
    to: "/",
    title: "Home",
    Icon: <HomeIcon />,
  },
  {
    to: "/skills",
    title: "Skills",
    Icon: <CodeIcon />,
  },
  {
    to: "/contact",
    title: "Contact",
    Icon: <ContactIcon />,
  },
]

const contactConfig = [
  {
    href: "https://github.com/Zorkann",
    Icon: <GitHubIcon />,
  },
  {
    href: "https://www.facebook.com/marcin.skowyra.9",
    Icon: <FacebookIcon />,
  },
  {
    href: "https://www.instagram.com/zoorkann/",
    Icon: <InstagramIcon />,
  },
  {
    href: "https://www.linkedin.com/in/marcin-skowyra-5524b7150/",
    Icon: <LinkedInIcon />,
  },
]

const Header = () => {
  const { languages, originalPath, language } = useI18next()

  return (
    <Container>
      <LogoWrapper>
        <HeaderTitle>Portfolio</HeaderTitle>
        <LanguageOptions>
          {languages.map((lng) => (
            <li key={lng}>
              <Link
                to={originalPath}
                language={lng}
                aria-current={language === lng}
              >
                {lng.toUpperCase()}
              </Link>
            </li>
          ))}
        </LanguageOptions>
      </LogoWrapper>
      <Nav>
        {navigationConfig.map(({ to, Icon }, index) => (
          <Link
            to={to}
            key={to}
            activeStyle={{
              color: Theme.primary,
              opacity: "1",
            }}
          >
            {Icon}
          </Link>
        ))}
      </Nav>
      <ContactIcons>
        {contactConfig.map(({ href, Icon }) => (
          <a key={href} href={href}>
            {Icon}
          </a>
        ))}
      </ContactIcons>
    </Container>
  )
}

export default Header
