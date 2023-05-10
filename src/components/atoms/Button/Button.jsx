import React from 'react'

import './styles.scss'

export const Button = ({text,action,variant,disabled}) => {
  return (
    <button className={`button ${variant}`} onClick={action} disabled={disabled} >{text}</button>
  )
}
