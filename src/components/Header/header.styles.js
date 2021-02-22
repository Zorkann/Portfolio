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
  box-shadow: ${({ theme }) => theme.glowing_shadow};

  a {
    display: inline-block;
    opacity: 0.4;
    :hover {
      cursor: pointer;
      opacity: 1;
    }

    svg {
      height: 100%;
      width: 100%;
    }
`

const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 3.5rem;
  align-self: center;
`

const LanguageOptions = styled.div`
  margin-left: 20px;

  button {
    font-weight: bold;
    background: transparent;
    border: none;
    color: white;
    cursor: pointer;
    &[aria-current="true"] {
      color: ${({ theme }) => theme.primary};
      text-shadow: ${({ theme }) => theme.glowing_shadow};
    }
  }
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  grid-column: 1/3;
`

const Nav = styled.nav`
  a {
    margin-left: 40px;
    width: 3.6rem;
    height: auto;
  }
`

const ContactIcons = styled(animated.div)`
  justify-self: end;

  a {
    margin-left: 20px;
    width: 2.5rem;
    height: auto;
  }
`

export {
  Container,
  HeaderTitle,
  LanguageOptions,
  Nav,
  ContactIcons,
  LogoWrapper,
}
