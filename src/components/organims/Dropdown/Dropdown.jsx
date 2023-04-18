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
        <div>
          <Button action={close} variant="button-mobile" text={'Cancelar'} />
        </div>
      </div>
    </div>
  )
}