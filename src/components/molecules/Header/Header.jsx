import React, { useState } from 'react'
import { IsMobile } from '../../../helpers/IsMobile'
import Icons from '../../icons'
import { Form } from '../Form/Form'

import './styles.scss'
import { Sidebar } from '../../organims'
import { Tab } from '../Tab/Tab'

export const Header = (props) => {

    const { img=true, tweetIcon = false, search=false, title=false, config=false, tabs = {}} = props

    const mobile = IsMobile()
    
    const [IsSidebar, setSidebar] = useState(false)

    return (
        <header className="header">
            <div className='header-content'>
                {
                    (img) && <div className="header__img_content" onClick={(!!mobile)?() => {setSidebar(!IsSidebar)}:null}>
                                <img src={ process.env.PUBLIC_URL +  "/assets/perfil/pexels-ekrulila-4040433.jpg"} alt="img"/>    
                            </div>
                }
                {
                    (title) && <h1>{title}</h1>
                }
                
                {
                    search && <Form />
                }

                {
                    (config) && <Icons.IconConfigure className="header-icon"/>
                }

                {
                    (false) && <Icons.IconDiamon className="header-icon"/>
                }

                {
                    (tweetIcon) && <Icons.IconTweet className="header-tweet"/>
                }

                {
                    (!!IsSidebar) ?<Sidebar setSidebar={setSidebar}/>:null
                }
            </div>
            {
                (Object.entries(tabs).length > 0) && <Tab tabs={tabs.items} change={tabs.action} select={tabs.select}/>
            }
        </header>
    )
}
