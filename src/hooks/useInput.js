import { useState } from "react"

export const useInput = (initialValue, type, validation) => {
  const [value, setValue] = useState(initialValue)
  const [error, setError] = useState(null)

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const validate = () => {
    switch (type) {
      case "email": {
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
        if (!emailRegex.test(value)) {
          setError("Неверный адрес")
          return false
        }
        break
      }
      case "password": {
        if (value.length < 4) {
          setError("Пароль должен быть не менее 4 символов")
          return false
        }
        break
      }
      case "date": {
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/
        if (!dateRegex.test(value)) {
          setError("Неверный формат даты (Г-М-Д)")
          return false
        }
        break
      }
      default: {
        if (validation && !validation(value)) {
          setError("Неверное значение")
          return false
        }
      }
    }

    setError(null)
    return true
  }

  return {
    value,
    error,
    handleChange,
    validate,
  }
}
