import React from 'react'
import './styles.scss'

export const DropdownItem = ({children,text,onclick}) => {
  return (
    <div className='dropdownItem' onClick={onclick}>
        {children}
        <span className='dropdownItem-span'>{text}</span>
    </div>
  )
}