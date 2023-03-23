import React from 'react'
import './styles.scss'

const resize = ({target}) => {
    target.style.height = 'auto'
    const scrollHeight = target.scrollHeight;
    target.style.height = `${scrollHeight}px`
}

export const TextArea = ({onChange,value}) => {
  return (
    <textarea
        type="text"
        id="textarea"
        value={value}
        name="tweet"
        maxLength="200"
        onChange={onChange}
        onKeyDown={(e)=>resize(e)}
        placeholder="¿Qué está pasando?"
    />
  )
}