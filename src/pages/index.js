import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeDescription from "../components/home"
import styled from "styled-components"

import { useTrail, animated } from "react-spring"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-column: 2/6;
  grid-row: 4/9;

  @media (max-width: 768px) {
    grid-column: 2/12;
  }
`

const config = {
  mass: 5,
  tension: 2000,
  friction: 200,
}

const Home = () => {
  const trail = useTrail(HomeDescription.length, {
    config,
    opacity: 1,
    x: 0,
    from: { opacity: 0, x: 20 },
  })

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        {trail.map(({ x, ...rest }, index) => (
          <animated.div
            key={index}
            style={{
              ...rest,
              transform: x.interpolate(x => `translate3d(0,${x}px,0)`),
            }}
          >
            {HomeDescription[index]}
          </animated.div>
        ))}
      </Container>
    </Layout>
  )
}

export default Home
