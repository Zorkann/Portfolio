import React from "react"
import styled from "styled-components"

const Card = styled.div`
  position: relative;
  display: flex;
  height: 1px;
  align-items: center;
  border: 1px solid #1779ff;
  border-radius: 4px;
  box-shadow: 0 2px 15px #1779ff;
  opacity: ${({ shouldBeDisplayed }) => (shouldBeDisplayed ? 1 : 0)};
  visibility: ${({ shouldBeDisplayed }) =>
    shouldBeDisplayed ? "visible" : "hidden"};
  background-color: transparent;
  overflow: hidden;
  cursor: pointer;
  animation: growInWidth 0.8s ease, growInHeight 0.8s ease 0.8s;
  animation-fill-mode: forwards;
  transition: opacity 0.3s;

  @keyframes growInWidth {
    0% {
      width: 1px;
    }

    100% {
      width: 100%;
    }
  }

  @keyframes growInHeight {
    0% {
      height: 1px;
    }

    100% {
      height: 100%;
    }
  }

  h2 {
    position: absolute;
    right: 3rem;
    font-size: 4rem;
    font-weight: 800;
    color: #1779ff;
    z-index: 1;
    opacity: 0.2;
    transition: 0.5s;
  }

  &:hover {
    h2 {
      opacity: 1;
      transform: translateY(-70px);
    }
  }
`

const SnakeBorderCard = ({
  children,
  title,
  onCardClick,
  isSelected,
  isAnySelected,
}) => {
  const handleCardClick = () => {
    onCardClick(title)
  }
  return (
    <Card
      onClick={handleCardClick}
      shouldBeDisplayed={!isAnySelected || (isAnySelected && isSelected)}
    >
      <h2>{title}</h2>
      {children}
    </Card>
  )
}

export default SnakeBorderCard
