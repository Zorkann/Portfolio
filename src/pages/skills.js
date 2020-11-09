import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SnakeBorderCard from "../components/snakeBorderCard"
import styled from "styled-components"

const SkillsContainer = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 40rem;
  grid-column: 3/11;
  grid-row-start: 3;
  grid-gap: 4rem;

  @media (max-width: 1580px) {
    grid-column: 2/12;
  }

  @media (max-width: 1250px) {
    grid-template-columns: 1fr;
    grid-auto-rows: 40rem;
    grid-column: 3/11;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-auto-rows: 40rem;
    grid-column: 2/12;
  }
`

const Test = styled.div`
  position: absolute;
  grid-column: 2/11;
`

const SkillsComponent = () => {
  const [selectedCard, setSelectedCard] = useState(null)

  const onCardClick = selectedValue => {
    if (selectedCard) {
      return setSelectedCard(null)
    }
    return setSelectedCard(selectedValue)
  }

  return (
    <Layout>
      <SEO title="Skills" />
      <SkillsContainer isAnySelected={Boolean(selectedCard)}>
        <SnakeBorderCard
          title={"Programming"}
          onCardClick={onCardClick}
          isSelected={selectedCard === "Programming"}
          isAnySelected={Boolean(selectedCard)}
        />
        {selectedCard === "Programming" ? (
          <Test>
            <p>cxzcz</p>
            <p>cxzcz</p>
            <p>cxzcz</p>
            <p>cxzcz</p>
            <p>cxzcz</p>
            <p>cxzcz</p>
            <p>cxzcz</p>
          </Test>
        ) : null}
        <SnakeBorderCard
          title={"Tests"}
          onCardClick={onCardClick}
          isSelected={selectedCard === "Tests"}
          isAnySelected={Boolean(selectedCard)}
        />
        <SnakeBorderCard
          title={"Others"}
          onCardClick={onCardClick}
          isSelected={selectedCard === "Others"}
          isAnySelected={Boolean(selectedCard)}
        />
      </SkillsContainer>
    </Layout>
  )
}

export default SkillsComponent
