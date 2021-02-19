import { animated } from "react-spring"
import styled from "styled-components"

const GreetingText = styled(animated.h2)`
  font-size: 2.5rem;
  margin: 0;
`

const NameText = styled(animated.h1)`
  font-size: 7rem;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 6rem;
  }
`

const DescriptionText = styled(animated.h3)`
  margin: 0;
  padding-bottom: 2rem;
  padding-top: 1rem;
`

const ButtonsContainer = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(2, minmax(10rem, 15rem));
  grid-auto-rows: 6rem;
  align-items: end;
  grid-gap: 1rem;
`

const Button = styled(animated.button)`
  border: 1px solid #1947ff;
  border-radius: 25px;
  background-color: transparent;
  color: white;
  outline: 0;
  box-shadow: 0 1px 5px #1779ff;
  :hover {
    background: rgba(23, 121, 255, 0.8);
    cursor: pointer;
  }
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
`

export { GreetingText, NameText, DescriptionText, ButtonsContainer, Button }
