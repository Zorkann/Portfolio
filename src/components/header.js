import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  grid-auto-rows: 8rem;
  grid-column: 1/13;
  grid-row: 1/2;
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: flex-end;
  padding: 0 2.5rem 1.5rem 2.5rem;
  :hover {
    background: linear-gradient(rgb(180, 13, 56), rgb(130, 8, 22));
  }
`

const HeaderTitle = styled.h1`
  grid-column: 2/5;
  margin: 0;
  font-size: 3.5rem;
`

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  height: 100%;
  grid-column: 10/12;

  @media (max-width: 768px) {
    display: none;
  }
`

const navigationConfig = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/skills",
    title: "Skills",
  },
  {
    to: "/about",
    title: "About",
  },
  {
    to: "/contact",
    title: "Contact",
  },
]

const Header = ({ siteTitle }) => (
  <Container>
    <HeaderTitle>{siteTitle}</HeaderTitle>
    <Nav>
      {navigationConfig.map(({ to, title }) => (
        <StyledLink
          to={to}
          activeStyle={{
            background: "linear-gradient(rgb(180, 13, 56), rgb(130, 8, 22))",
          }}
        >
          {title}
        </StyledLink>
      ))}
    </Nav>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
