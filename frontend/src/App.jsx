import styled from 'styled-components'
import Description from './components/Description'
import InputField from './components/InputField'
import './index.css'

function App() {
  return (
    <Container>
      <Description />

      <InputField />
    </Container>
  )
}

export default App

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`
