import React from 'react'
import { Icons }from '../../icons'

import './styles.scss'

export const Options = ({open}) => {
  return (
    <div className='options' onClick={open}>
      <Icons.IconOptions />
    </div>
  )
}
