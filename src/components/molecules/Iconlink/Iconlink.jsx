import React from 'react'

import './styles.scss'
import { NavLink } from 'react-router-dom'

export const Iconlink = ({path,text,children}) => {
  return (
        <div className='navlink'>
            <NavLink to={`/${path}`} activeClassName="active">
                <div className="navlink-body">
                    {children}
                    {text && <h1 className="bold names">{text}</h1>}
                </div>
            </NavLink>
        </div>
  )
}