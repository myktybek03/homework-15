import { useState } from "react"

const useCounter = (initialState) => {
  const [count, setCount] = useState(0)

  const incrementHandler = () => {
    setCount((prevState) => prevState + initialState)
  }
  const decrementHandler = () => {
    setCount((prevState) => {
      if (prevState > 0) {
        return prevState - initialState
      }
      return prevState
    })
  }
  const reset = () => {
    setCount(0)
  }

  return [count, incrementHandler, decrementHandler, reset]
}

export default useCounter
