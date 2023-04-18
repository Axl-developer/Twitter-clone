import React, { useEffect, useState } from 'react'

import { IsMobile } from '../../helpers/IsMobile'

import { Header } from '../../components/Headers/Header'
import {NewTweet} from '../../components/organims'
import { ContentTweet } from '../../components/organims'


export const Home = () => {

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
        <div>
            <Header title={'Inicio'} destacados={true}/>
            {
                (!Mobile) && <NewTweet variant='is-home' />
            }

            <ContentTweet />
        </div>
    )
}
