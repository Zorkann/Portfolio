import React from "react"

import styled from "styled-components"

export const StyledBurger = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  grid-column: 12/13;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 2;
  top: 3rem;
  right: 3rem;
  position: fixed;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: white;
    border-radius: 10px;
    position: relative;
    transform-origin: 1px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`

const Burger = ({ setOpen }) => {
  return (
    <StyledBurger onClick={setOpen}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger
