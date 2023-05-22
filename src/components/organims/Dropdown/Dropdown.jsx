import React, { Children, cloneElement } from 'react'
import { Button } from '../../atoms'
import './styles.scss'

export const Dropdown = ({close,children}) => {
  return (
    <div className='dropdown'>
      <div className='dropdown-close' onClick={close}></div>
      <div className='dropdown-items'>{
        Children.map(children, child =>
          cloneElement(child)
        )}
        <div className='dropdown-content-button'>
          <Button action={close} variant="button-mobile is-w100 is-secondary p11" text={'Cancelar'} />
        </div>
      </div>
    </div>
  )
}