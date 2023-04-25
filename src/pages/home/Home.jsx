import React, { useEffect, useState } from 'react'

import { IsMobile } from '../../helpers/IsMobile'

import {NewTweet} from '../../components/organims'
import { ContentTweet } from '../../components/organims'
import { Header } from '../../components/molecules'


export const Home = () => {

    const [Mobile, setIsMobile] = useState(true)

    useEffect(() => {
        const isMobile = IsMobile()
        setIsMobile(isMobile)
    }, [])

    window.addEventListener("resize", function(){
        const isMobile = IsMobile()
        setIsMobile(isMobile) 
    });

    return (
        <div>
            <Header title={'Inicio'} destacados={true}/>
            <div>
                {(!Mobile) && <NewTweet variant='is-home' />}
                <ContentTweet />
            </div>
        </div>
    )
}
