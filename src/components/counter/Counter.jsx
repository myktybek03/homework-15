import React from "react"
import styled from "styled-components"
import useCounter from "../../hooks/useCounter"
import Button from "../UI/Button"

const Counter = () => {
  const [count, incrementHandler, decrementHandler, reset] = useCounter(1)

  return (
    <Container>
      <h1>Count: {count}</h1>
      <div>
        <Button onClick={incrementHandler}>Increment</Button>
        <Button onClick={decrementHandler}>Decrement</Button>
      </div>
      <Button onClick={reset}>Reset</Button>
    </Container>
  )
}

export default Counter

const Container = styled.div`
  border: 5px solid aqua;
  border-radius: 10px;
`
