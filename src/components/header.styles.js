import { animated } from "react-spring"
import styled from "styled-components"

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0 8rem;
  align-items: center;
  grid-column: 1/5;
  grid-row: 1/2;
  background-color: #181818;
  box-shadow: 0 2px 15px #1779ff;

  a {
    opacity: 0.4;
    margin-left: 20px;
    :hover {
      cursor: pointer;
      opacity: 1;
    }
`

const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 3.5rem;
  align-self: center;
`

const LanguageOptions = styled.div`
  font-weight: bold;

  span {
    cursor: pointer;
    :first-child {
      color: ${({ theme }) => theme.primary};
      margin-right: 10px;
    }
  }
`

const Nav = styled.nav`
  svg {
    font-size: 4rem;
  }
`

const ContactIcons = styled(animated.div)`
  justify-self: end;
  svg {
    font-size: 2.5rem;
  }
`

export { Container, HeaderTitle, LanguageOptions, Nav, ContactIcons }
