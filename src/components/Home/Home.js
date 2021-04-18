import React, { useEffect, useState } from 'react'
import { IsMobile } from '../../helpers/IsMobile'
import { Header } from '../Headers/Header'
import { NewTweet } from '../New_Tweet/NewTweet'
import { Tweet } from './Tweet'


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
                (!Mobile) && <NewTweet />
            }

            <Tweet id={1}/>
            <Tweet id={2}/>
            <Tweet id={3}/>
            <Tweet id={4}/>
            <Tweet id={5}/>
            <Tweet id={6}/>
        </div>
    )
}
