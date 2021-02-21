import React from "react"
import styled from "styled-components"
import { keyframes } from "styled-components"

const generateShadows = (n) => {
  const rand = () => Math.floor(Math.random() * 2001)
  let value = `${rand()}px ${rand()}px #FFF`
  for (let i = 0; i < n; i++) {
    value = `${value} , ${rand()}px ${rand()}px #FFF`
  }
  return value
}

const animStart = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
`

const StarsContainer = styled.div`
  #stars {
    position: absolute;
    width: 1px;
    height: 1px;
    background: white;
    box-shadow: ${generateShadows(700)};
    animation: 50s ${animStart} linear infinite;

    &:after {
      content: " ";
      position: absolute;
      top: 2000px;
      width: 1px;
      height: 1px;
      background: white;
      box-shadow: ${generateShadows(700)};
    }
  }
`

const Stars = () => {
  return (
    <StarsContainer>
      <div id="stars"></div>
    </StarsContainer>
  )
}

export default Stars
