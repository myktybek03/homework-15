import React from "react"
import styled from "styled-components"

const Button = ({ children, ...props }) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>
}

export default Button

const ButtonStyled = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  margin: 10px 0px;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
`
