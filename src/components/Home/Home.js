import React, { useEffect, useState } from 'react'
import { IsMobile } from '../../helpers/IsMobile'
import { Header } from '../Headers/Header'
import { NewTweet } from '../New_Tweet/NewTweet'
import { Tweet } from './Tweet'
import { Tweets } from './Tweets'


export const Home = () => {

    const [Mobile, setIsMobile] = useState(true)

    const [ArrTweets, setArrTweets] = useState(Tweets)

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
                (!Mobile) && <NewTweet setArrTweets={setArrTweets} />
            }

            
            {
                ArrTweets.map( T=> <Tweet key={T.id} info={T}/>)
            }


        </div>
    )
}
