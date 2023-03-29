import React from 'react'

import './styles.scss'

export const Button = ({text,action,variant}) => {
  return (
    <div className={`button ${variant}`} onClick={action} >{text}</div>
  )
}
