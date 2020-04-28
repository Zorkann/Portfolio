import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import Burger from "../components/burger"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  grid-column: 2/12;
  grid-row: 1/2;
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: flex-end;
  padding: 0 2.5rem 1.5rem 2.5rem;
  :hover {
    background: linear-gradient(rgb(180, 13, 56), rgb(130, 8, 22));
  }
  @media (max-width: 768px) {
    padding: 1.5rem 2.5rem 1.5rem 2.5rem;
  }
`

const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 3.5rem;
  align-self: center;
`

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  height: 100%;
  grid-column: 6/12;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    background-color: rgb(25, 13, 26);
    width: ${({ isOpen }) => (isOpen ? "50%" : "0%")};
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    position: fixed;
    padding-top: 10vh;
    right: 0;
    top: 0;
    z-index: 1;
    transition: 0.3s ease-in-out;
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

const Header = ({ siteTitle }) => {
  const [isOpen, setOpen] = useState(false)
  console.log(isOpen)
  return (
    <Container>
      <HeaderTitle>{siteTitle}</HeaderTitle>
      <Burger setOpen={() => setOpen(!isOpen)} />
      <Nav isOpen={isOpen}>
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
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
