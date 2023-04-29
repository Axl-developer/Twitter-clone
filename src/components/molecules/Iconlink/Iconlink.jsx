import React from 'react'

import './styles.scss'
import { NavLink } from 'react-router-dom'
import { Title } from '../../atoms'

export const Iconlink = ({path,text,children}) => {
  return (
        <div className='navlink'>
            <NavLink to={`/${path}`} activeClassName="active">
                <div className="navlink-body">
                    {children}
                    {text && <Title text={text} className="bold names" />}
                </div>
            </NavLink>
        </div>
  )
}