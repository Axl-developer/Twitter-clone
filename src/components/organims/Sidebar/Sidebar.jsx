import React from 'react'
import { NavLink } from 'react-router-dom'

import { Icons }from '../../icons'
import { Title } from '../../atoms'

import './styles.scss'

export const Sidebar = ({setSidebar}) => {

    return (
        <div className="sidebar">
            <aside>
                <div className='sidebar-header'>
                    <Title text="Información de la cuenta" variant="fz17 bold"/>
                    <Icons.IconClose />
                </div>
                <div className="sidebar-menu">
                    <div className='sidebar-data'>
                        <div className='sidebar-data-head'>
                            <div className="sidebar-img-content">
                                <img src={ process.env.PUBLIC_URL +  "/assets/perfil/pexels-ekrulila-4040433.jpg"} alt="img"/>    
                            </div>
                            <div className="sidebar-svg">
                                <Icons.IconCirculePlus/>
                            </div>
                        </div>
                        <div className="sidebar-name">
                            <Title text="User" variant="bold fz20"/>
                            <Title text="@user" variant="grey fz17"/>
                        </div>
                        <div className="sidebar-info">
                            <div>
                                <Title text="17" variant="bold"/> <Title text="Siguiendo" variant="grey"/>
                            </div>
                            <div>
                                <Title text="2" variant="bold"/> <Title text="Seguidores" variant="grey"/>
                            </div>
                        </div>
                    </div>


                    <div className="sidebar-items">
                        <div>
                            <NavLink to="/user" activeClassName="active">
                                <div className="sidebar-item">
                                    <Icons.IconPerson />
                                    <Title variant="bold fz20" text="Perfil" />
                                </div>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/list" activeClassName="active">
                                <div className="sidebar-item">
                                    <Icons.IconList />
                                    <Title variant="bold fz20" text="Listas" />
                                </div>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/bookmarks" activeClassName="active">
                                <div className="sidebar-item">
                                    <Icons.IconBookmarks />
                                    <Title variant="bold fz20" text="Guardados" />
                                </div>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/explore" activeClassName="active">
                                <div className="sidebar-item">
                                    <Icons.IconSchear />
                                    <Title variant="bold fz20" text="Explorar" />
                                </div>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/notifications" activeClassName="active">
                                <div className="sidebar-item">
                                    <Icons.IconNotification />
                                    <Title variant="bold fz20" text="Notifications" />
                                </div>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/home" activeClassName="active">
                                <div className="sidebar-item">
                                    <Icons.IconHome />
                                    <Title variant="bold fz20" text="Inicio" />
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>

            </aside>
            <div className="after" onClick={() => {setSidebar(false)}}></div>
        </div>
    )
}
