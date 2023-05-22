import React, { Suspense, lazy, useEffect, useState } from 'react'

import { IsMobile } from '../../helpers/IsMobile'

import { NewTweet } from '../../components/organims'
import { Header } from '../../components/molecules'

const ContentTweet = lazy(() => import(/* webpackChunkName: "Home" */'../../components/organims/ContentTweet/ContentTweet'))

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

    const [tabSelected, setTabSelected] = useState(1);
    const tabs = {
        items:[
            {text:'Para ti',id:1},
            {text:'Siguiendo',id:2},
            {text:'Noticias L-P',id:3},
            {text:'Programación',id:4},
        ],
        select:tabSelected,
        action:(id)=>{setTabSelected(id)}
    }

    return (
        <div>
            <Header title={'Inicio'} tweetIcon={true} destacados={true} tabs={tabs}/>
            <div>
                {(!Mobile) && <NewTweet variant='is-home' />}
                <Suspense fallback={<div>Loading...</div>}>
                    <ContentTweet />
                </Suspense>
            </div>
        </div>
    )
}
