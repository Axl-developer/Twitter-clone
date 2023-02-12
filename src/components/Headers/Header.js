import React, { useState } from 'react'
import { IsMobile } from '../../helpers/IsMobile'
import Icons from '../icons'
import {Sidebar} from './Sidebar'

export const Header = ({img= true,search = false, title = false, config=false, destacados=false}) => {

    const mobile = IsMobile()
    
    const [IsSidebar, setSidebar] = useState(false)

    return (
        <header className="header__content">
            {
                (img) && <div className="header__img_content" onClick={(!!mobile)?() => {setSidebar(!IsSidebar)}:null}>
                            <img src={ process.env.PUBLIC_URL +  "/assets/perfil/pexels-ekrulila-4040433.jpg"} alt="img"/>    
                        </div>
            }
            {
                (title) && <h1>{title}</h1>
            }
            
            {
                (search)
                    &&<form>
                        <div>
                            <Icons.IconSchear />
                        </div>
                        <input type="text" placeholder="Buscar en Twitter" />
                    </form>
            }

            {
                (config) && <Icons.IconConfigure/>
            }

            {
                (destacados) && <Icons.IconDiamon />
            }

            {
                (!!IsSidebar) ?<Sidebar setSidebar={setSidebar}/>:null
            }
        </header>
    )
}
