import React from 'react'
import Icons from '../../icons'

import './styles.scss'

export const Form = () => {
  return (
    <form className='form'>
        <div>
            <Icons.IconSchear />
        </div>
        <input type="text" placeholder="Buscar en Twitter" />
    </form>
  )
}
