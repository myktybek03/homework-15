import { useEffect, useState } from "react"

export const useTimer = (initialState) => {
  const [timer, setTimer] = useState(initialState * 60)
  const [startTimer, setStartTimer] = useState(false)

  const resetTimer = () => {
    setTimer(initialState * 60)
  }

  const startHandler = () => {
    setStartTimer(true)
  }

  const stopHandler = () => {
    setStartTimer(false)
  }

  useEffect(() => {
    if (!startTimer) return

    if (timer <= 0) return

    const id = setInterval(() => {
      setTimer(timer - 1)
    }, 1000)
    return () => {
      clearInterval(id)
    }
  }, [timer, startTimer])

  return { timer, startHandler, stopHandler, resetTimer }
}
