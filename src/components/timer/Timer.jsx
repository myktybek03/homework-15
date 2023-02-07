import Button from "../UI/Button"
import styled from "styled-components"
import { useTimer } from "../../hooks/useTimer"

const Timer = () => {
  const { startHandler, stopHandler, resetTimer, timer } = useTimer(2)

  return (
    <Container>
      <h1>{timer}</h1>
      <Button onClick={stopHandler}>Stop</Button>
      <Button onClick={startHandler}>Start</Button>
      <Button onClick={resetTimer}>Reset</Button>
    </Container>
  )
}

export default Timer

const Container = styled.div`
  border: 5px solid aqua;
  border-radius: 10px;
`
