import React from "react"

import Layout from "../components/Layout"
import HomeDescription from "../components/Home"
import styled from "styled-components"
import { useTrail, animated } from "react-spring"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 8rem;
  grid-row: 3/4;
  grid-column: 1/3;
  height: 35rem;

  @media (max-width: 768px) {
    grid-column: 2/12;
    grid-row: 3/8;
  }
`

const config = {
  mass: 5,
  tension: 1000,
  friction: 200,
}

const IndexPage = () => {
  const trail = useTrail(HomeDescription.length, {
    config,
    opacity: 1,
    x: 0,
    from: { opacity: 0, x: 20 },
  })

  return (
    <Layout>
      <Container>
        {trail.map(({ x, ...rest }, index) => {
          const Component = HomeDescription[index]
          return (
            <animated.div key={index} style={rest}>
              <Component />
            </animated.div>
          )
        })}
      </Container>
    </Layout>
  )
}

export default IndexPage
