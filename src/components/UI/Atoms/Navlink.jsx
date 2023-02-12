import React from 'react'
import { NavLink } from 'react-router-dom'

const Navlink = ({path,text,children}) => {
  return (
    <li>
        <div>
            <NavLink to={`/${path}`} activeClassName="active">
                <div className="UI__iconContainer">
                    {children}
                    {text && <h1 className="bold names">{text}</h1>}
                </div>
            </NavLink>
        </div>
    </li>
  )
}

export default Navlink