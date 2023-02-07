import React from "react"
import { useInput } from "../../hooks/useInput"
import Button from "../UI/Button"
import styled from "styled-components"

const Input = () => {
  const email = useInput("", "email")
  const password = useInput("", "password")
  const date = useInput("", "date")

  const onValid = {
    email: email.validate,
    password: password.validate,
    date: date.validate,
  }
  return (
    <div>
      <div>
        <input
          type="email"
          value={email.value}
          onChange={email.handleChange}
          onBlur={onValid.email}
        />
        <Button onClick={onValid.email}>examination</Button>
        {email.error && <ExaminationError>{email.error}</ExaminationError>}
      </div>
      <div>
        <input
          type="password"
          value={password.value}
          onChange={password.handleChange}
          onBlur={onValid.password}
        />
        <Button onClick={onValid.password}>examination</Button>
        {password.error && (
          <ExaminationError>{password.error}</ExaminationError>
        )}
      </div>
      <div>
        <input
          type="date"
          value={date.value}
          onChange={date.handleChange}
          onBlur={onValid.date}
        />
        <Button onClick={onValid.date}>examination</Button>
        {date.error && <ExaminationError>{date.error}</ExaminationError>}
      </div>
    </div>
  )
}

export default Input

const ExaminationError = styled.span`
  color: red;
`
