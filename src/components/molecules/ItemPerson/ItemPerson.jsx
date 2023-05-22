import React from 'react'

import './styles.scss'
import { Title } from '../../atoms'
import { Icons }from '../../icons'

export const ItemPerson = () => {
  return (
    <div className='item-person'>
        <div className='item-person-data'>
            <div className="content-img">
                <img src={process.env.PUBLIC_URL + "/assets/perfil/pexels-ekrulila-4040433.jpg"} alt="perfil"/>
            </div>
            <div className='item-person-names'>
                <Title text="Axl" variant="fz17 bold"/>
                <Title text="@Axl" variant="fz15 grey"/>
            </div>
        </div>
        <div className='item-person-options'>
            <Icons.IconOptions />
        </div>
    </div>
  )
}
