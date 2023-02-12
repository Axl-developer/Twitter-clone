import React, { useEffect, useState } from 'react'
import {NavLink} from "react-router-dom";

import Atoms from '../components/UI/Atoms';
import Icons from '../components/icons';
import {IsMobile} from '../helpers/IsMobile';

//Selector de Menu
export const MenuSelector = () => {
    const [Mobile, setIsMobile] = useState(true)


    useEffect(() => {
        const isMobile = IsMobile();
        
        setIsMobile(isMobile)

    }, [])

    window.addEventListener("resize", function(){
        
        const isMobile = IsMobile();
        
        setIsMobile(isMobile) 
        
    });

  

    return (
       <header className="UI__header">
           {
                (Mobile)
                ? <MenuMobile />
                : <MenuDesktop />
           }
       </header>
    )
}

//---------MenuMoble

export const MenuMobile = () => {
    return (
        <div className="UI__MenuMobile">
            <NavLink to="/tweet"  >
                <div className="UI__fixed_btn">
                    <Icons.IconNewTweet />
                </div>
            </NavLink>
            <nav className="UI__nav">
                <ul>
                    <Atoms.Navlink path="home" >
                        <Icons.IconHome />
                    </Atoms.Navlink>

                    <Atoms.Navlink path="explore">
                        <Icons.IconSchear />
                    </Atoms.Navlink>

                    <Atoms.Navlink path="notifications">
                        <Icons.IconNotification />
                    </Atoms.Navlink>
                    
                    <Atoms.Navlink path="messages">
                        <Icons.IconMessage />
                    </Atoms.Navlink>
                </ul>
            </nav>
        </div>
    )
}



//---------MenuDesktop

export const MenuDesktop = () => {
    return (
        <div className="UI_subHeader">
            <div className="UI_MenuDesktop">
            
                <nav className="UI__nav">
                    
                    <div className="UI__content_ul">

                        <ul>
                            <div className="tweet-content">
                                <Icons.IconTweet />
                            </div>

                            {
                                <>
                                    <Atoms.Navlink path="home" text="Inicio">
                                        <Icons.IconHome />
                                    </Atoms.Navlink>

                                    <Atoms.Navlink path="explore" text="Explorar">
                                        <Icons.IconSchear />
                                    </Atoms.Navlink>

                                    <Atoms.Navlink path="notifications" text="Notifications">
                                        <Icons.IconNotification />
                                    </Atoms.Navlink>

                                    <Atoms.Navlink path="messages" text="Mensajes">
                                        <Icons.IconMessage />
                                    </Atoms.Navlink>

                                    <Atoms.Navlink path="bookmarks" text="Guardados">
                                        <Icons.IconBookmarks />
                                    </Atoms.Navlink>

                                    <Atoms.Navlink path="lists" text="Listas">
                                        <Icons.IconList />
                                    </Atoms.Navlink>

                                    <Atoms.Navlink path="user" text="Perfil">
                                        <Icons.IconPerson />
                                    </Atoms.Navlink>
                                </>
                            }

                            <li>
                                <div>
                                    <div>
                                        <div className="UI__iconContainer">
                                            <Icons.IconCircleOptions />
                                            <h1 className="bold names">Más opciones</h1>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        
                        <div className="UI__fixed_btn">
                            <a href="#NewTweet">
                                <Icons.IconNewTweet />
                            </a>
                            
                        </div>

                    </div>
                    

                    <div>
                        <div className="content-img">
                            <img src={process.env.PUBLIC_URL + "/assets/perfil/pexels-ekrulila-4040433.jpg"} alt="perfil"/>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
