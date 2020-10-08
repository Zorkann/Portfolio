import React from "react"
import styled from "styled-components"

const Card = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: #0c002b;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    bottom: 2px;
    width: 50%;
    background: rgba(255, 255, 255, 0.1);
  }

  span {
    transition: 0.5s;
    opacity: 0;
  }

  h2 {
    position: absolute;
    right: 3rem;
    font-size: 4rem;
    font-weight: 800;
    color: #1779ff;
    z-index: 1;
    opacity: 0.1;
    transition: 0.5s;
  }

  &:hover {
    h2 {
      opacity: 1;
      transform: translateY(-70px);
    }

    span {
      opacity: 1;
    }
  }

  span:nth-child(1) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(to right, transparent, #1779ff);
    animation: animate1 2s linear infinite;
  }

  @keyframes animate1 {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  span:nth-child(2) {
    position: absolute;
    top: 0;
    right: 0;
    width: 3px;
    height: 100%;
    background: linear-gradient(to bottom, transparent, #1779ff);
    animation: animate2 2s linear infinite;
    animation-delay: 1s;
  }

  @keyframes animate2 {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
  }

  span:nth-child(3) {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(to left, transparent, #1779ff);
    animation: animate3 2s linear infinite;
  }

  @keyframes animate3 {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  span:nth-child(4) {
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background: linear-gradient(to top, transparent, #1779ff);
    animation: animate4 2s linear infinite;
    animation-delay: 1s;
  }

  @keyframes animate4 {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(-100%);
    }
  }
`

const SnakeBorderCard = ({ children, title }) => (
  <Card>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <h2>{title}</h2>
    {children}
  </Card>
)

export default SnakeBorderCard
