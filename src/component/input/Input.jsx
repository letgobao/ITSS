import React from 'react'
import './Input.css'

const Input = ({placeholder, type}) => {
  return (
    <input type={type} placeholder={placeholder} />
  )
}

export default Input