import React from 'react'
import './styles.scss'

export const Span = ({text,variant}) => {
  return (
    <span className={`span ${variant}`}>{text}</span>
  )
}
