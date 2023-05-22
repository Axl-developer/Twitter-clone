import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icons }from '../../icons'

import './styles.scss'
import { Iconlink } from '../Iconlink/Iconlink'

export const Navmenu = ({activeModal}) => {
  return (
    <div className="navmenu">
        <NavLink to="/tweet"  >
            <div className="navmenu-fixed-btn" onClick={activeModal}>
                <Icons.IconNewTweet />
            </div>
        </NavLink>
        <nav className="navmenu-nav">
            <ul>
                <Iconlink path="home" >
                    <Icons.IconHome />
                </Iconlink>

                <Iconlink path="explore">
                    <Icons.IconSchear />
                </Iconlink>

                <Iconlink path="notifications">
                    <Icons.IconNotification />
                </Iconlink>
                
                <Iconlink path="messages">
                    <Icons.IconMessage />
                </Iconlink>
            </ul>
        </nav>
    </div>
  )
}
