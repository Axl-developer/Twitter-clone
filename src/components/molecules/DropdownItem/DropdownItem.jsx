import React from 'react'
import './styles.scss'

const DropdownItem = ({onclick,Icon,text}) => {
  return (
    <div className='DropdownItem' onclick={onclick}>
        <Icon />
        <span>{text}</span>
    </div>
  )
}

export default DropdownItem