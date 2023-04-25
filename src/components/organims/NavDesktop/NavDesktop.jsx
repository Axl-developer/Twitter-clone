import React from 'react'

import Icons from '../../icons'
import { Iconlink, ItemPerson } from '../../molecules'
import { Title } from '../../atoms'

import './styles.scss'

export const NavDesktop = ({activeModal}) => {
  return (
    <nav className="navDesktop-nav">
        <div className="navDesktop-content-ul">
            <div className="tweet-content">
                <Icons.IconTweet />
            </div>

            <Iconlink path="home" text="Inicio">
                <Icons.IconHome />
            </Iconlink>

            <Iconlink path="explore" text="Explorar">
                <Icons.IconSchear />
            </Iconlink>

            <Iconlink path="notifications" text="Notifications">
                <Icons.IconNotification />
            </Iconlink>

            <Iconlink path="messages" text="Mensajes">
                <Icons.IconMessage />
            </Iconlink>

            <Iconlink path="bookmarks" text="Guardados">
                <Icons.IconBookmarks />
            </Iconlink>

            <Iconlink path="list" text="Listas">
                <Icons.IconList />
            </Iconlink>

            <Iconlink path="user" text="Perfil">
                <Icons.IconPerson />
            </Iconlink>

            <Iconlink path="" text="Más opciones">
                <Icons.IconCircleOptions />
            </Iconlink>
            
            <div className="navDesktop-fixed-btn" onClick={activeModal}>
                <Icons.IconNewTweet />
                <Title text="Twittear" variant="fz17 bold"/>
            </div>
        </div>
        
        <ItemPerson />

    </nav>
  )
}