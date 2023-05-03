import React, { useState } from 'react'
import { IsMobile } from '../../../helpers/IsMobile'
import Icons from '../../icons'
import { Form } from '../Form/Form'
import { Sidebar } from '../../organims'
import { Tab } from '../Tab/Tab'

import './styles.scss'
import { Title } from '../../atoms'

export const Header = (props) => {

    const { img=true, tweetIcon = false, search=false, title=false, config=false, tabs={}, second='' } = props

    const mobile = IsMobile()
    
    const [IsSidebar, setSidebar] = useState(false)

    return (
        <header className={`header ${second}`}>
            <div className='header-content'>
                {
                    img && <div className="header-img-content" onClick={(!!mobile)?() => {setSidebar(!IsSidebar)}:null}>
                                <img src={ process.env.PUBLIC_URL +  "/assets/perfil/pexels-ekrulila-4040433.jpg"} alt="img"/>    
                            </div>
                }
                {
                    title && <Title text={title} variant='fw7' />
                }
                
                {
                    search && <Form />
                }

                {
                    config && <Icons.IconConfigure className="header-icon"/>
                }

                {
                    tweetIcon && <Icons.IconTweet className="header-tweet"/>
                }

                {
                    (!!IsSidebar) ?<Sidebar setSidebar={setSidebar}/>:null
                }
            </div>
            {
                (Object.entries(tabs).length > 0) && <Tab tabs={tabs.items} change={tabs.action} select={tabs.select} variant="flex1"/>
            }
        </header>
    )
}
