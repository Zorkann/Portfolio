import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: 8rem;
  background: rgb(15, 13, 56);
`

const StyledLink = styled(Link)`
  display: grid;
  align-items: end;
  padding: 0 1.5rem 1.5rem 1.5rem;
  justify-items: center;
  :hover {
    background-color: rgb(244, 8, 22);
  }
`

const HeaderTitle = styled.h1`
  display: grid;
  align-items: center;
  grid-column-start: 2;
  grid-column-end: 9;
  margin: 0;
  font-size: 3.5rem;
`

const Nav = styled.nav`
  display: grid;
  grid-column-start: 9;
  grid-column-end: 11;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
`

const Header = ({ siteTitle }) => (
  <Container>
    <HeaderTitle>{siteTitle}</HeaderTitle>
    <Nav>
      <StyledLink to="/" activeStyle={{ backgroundColor: "rgb(244, 8, 22)" }}>
        About
      </StyledLink>
      <StyledLink
        to="/skills"
        activeStyle={{ backgroundColor: "rgb(244, 8, 22)" }}
      >
        Skills
      </StyledLink>
      <StyledLink
        to="/contact"
        activeStyle={{ backgroundColor: "rgb(244, 8, 22)" }}
      >
        Contact
      </StyledLink>
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
