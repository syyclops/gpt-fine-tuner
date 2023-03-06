import React from 'react'
import styled from 'styled-components'

function Description() {
  return (
    <Container>
      <DescriptionContainer>
        <Title>GPT Fine Tuner</Title>
      </DescriptionContainer>
    </Container>
  )
}

export default Description

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`

const DescriptionContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 600 !important;
  color: white;
  font-size: 2rem;
`
