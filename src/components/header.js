import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HomeIcon from "@material-ui/icons/Home"
import CodeIcon from "@material-ui/icons/Code"
import ContactIcon from "@material-ui/icons/MailOutline"
import GitHubIcon from "@material-ui/icons/GitHub"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import * as Styles from "./header.styles"
import { Theme } from "./layout"

const { Container, HeaderTitle, LanguageOptions, Nav, ContactIcons } = Styles

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

const Header = ({ siteTitle }) => {
  return (
    <Container>
      <HeaderTitle>{siteTitle}</HeaderTitle>
      <LanguageOptions>
        <span>EN</span>
        <span>PL</span>
      </LanguageOptions>
      <Nav>
        {navigationConfig.map(({ to, Icon }, index) => (
          <Link
            to={to}
            key={index}
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
      </ContactIcons>
    </Container>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
