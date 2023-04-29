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

    const [tabSelected, setTabSelected] = useState(1);
    const tabs = {
        items:[{text:'Para ti',id:1},{text:'Siguiendo',id:2}],
        select:tabSelected,
        action:(id)=>{setTabSelected(id)}
    }

    return (
        <div>
            <Header title={'Inicio'} tweetIcon={true} destacados={true} tabs={tabs}/>
            <div>
                {(!Mobile) && <NewTweet variant='is-home' />}
                <ContentTweet />
            </div>
        </div>
    )
}
