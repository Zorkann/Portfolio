import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import Header from "../Header"
import "./layout.css"
import "normalize.css"
import styled from "styled-components"
import Stars from "../stars"
import "../../i18n"

const App = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 7rem 20rem 1fr;
  @media (max-width: 768px) {
    grid-template-rows: 8rem 4rem 1fr;
  }
`

export const Theme = {
  primary: "#1779ff",
  glowing_shadow: "0 2px 15px #1779ff",
}

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <Stars />
      <App>
        <Header />
        {children}
      </App>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
