import React from 'react'
import { NavLink } from 'react-router-dom'
import Icons from '../icons'
import { Header } from './Header'

export const Sidebar = ({setSidebar}) => {

    return (
        <div className="Sidebar__content">
            <aside>
                <Header title={'Informacion'} img={false}/>
                <div className="Sidebar__menu">
                    <div className="header__img_content">
                        <img src={ process.env.PUBLIC_URL +  "/assets/perfil/pexels-ekrulila-4040433.jpg"} alt="img"/>    
                    </div>
                    <div className="Sidebar__name">
                        <h1 className="bold">User</h1>
                        <span className="lighter">@user</span>
                    </div>

                    <div className="Sidebar__userInfo">
                        <span className="lighter"> <span className="bold">17</span> Siguiendo</span>
                        <span className="lighter"> <span className="bold">2</span> Seguidores</span>
                    </div>

                    <div className="Sidebar__list_content">
                        <ul>
                            <li>
                                <div>
                                    <NavLink to="/user" activeClassName="active">
                                        <div className="UI__iconContainer">
                                            <Icons.IconPerson />
                                            <h1 className="bold names">Perfil</h1>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <NavLink to="/lists" activeClassName="active">
                                        <div className="UI__iconContainer">
                                            <Icons.IconList />
                                            <h1 className="bold names">Listas</h1>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>
                            <li className="UI__MenuComplete_item" >
                                <div>
                                    <NavLink to="/bookmarks" activeClassName="active">
                                        <div className="UI__iconContainer">
                                            <Icons.IconBookmarks />
                                            <h1 className="bold names">Guardados</h1>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <NavLink to="/explore" activeClassName="active">
                                        <div className="UI__iconContainer">
                                            <Icons.IconSchear />
                                            <h1 className="bold names">Explorar</h1>
                                        </div>
                                    </NavLink>
                                </div>
                                
                            </li>
                            <li>
                                <div>
                                    <NavLink to="/notifications" activeClassName="active">
                                        <div className="UI__iconContainer">
                                            <Icons.IconNotification />
                                            <h1 className="bold names">Notifications</h1>
                                        </div>
                                    </NavLink>
                                </div>
                                
                            </li>
                            <li>
                                <div>
                                    <NavLink to="/home" activeClassName="active">
                                        <div className="UI__iconContainer">
                                            <Icons.IconHome />
                                            <h1 className="bold names">Inicio</h1>
                                        </div>
                                    </NavLink>
                                </div>
                                
                            </li>
                        </ul>
                    </div>
                </div>

            </aside>
            <div className="after" onClick={() => {setSidebar(false)}}></div>
        </div>
    )
}
