import React, { Children, cloneElement } from 'react'
import './styles.scss'

export const Dropdown = ({close,children}) => {
  return (
    <>
      <div className='dropdown-close' onClick={close}></div>
      <div className='dropdown'>{
        Children.map(children, child =>
          cloneElement(child)
        )}
      </div>
    </>
  )
}