import React from 'react'
import './styles.scss'

export const Title = ({text,variant=''}) => {
  return (
    <h1 className={`title ${variant}`}>{text}</h1>
  )
}
