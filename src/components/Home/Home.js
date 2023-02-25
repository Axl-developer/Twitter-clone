import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { IsMobile } from '../../helpers/IsMobile'
import { Header } from '../Headers/Header'
import { NewTweet } from '../New_Tweet/NewTweet'
import { Tweet } from './Tweet'


export const Home = () => {

    const [Mobile, setIsMobile] = useState(true)

    const tweets = useSelector((state) => state.tweets)

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
                (!Mobile) && <NewTweet setArrTweets={tweets} />
            }

            
            {
                tweets.map( T=> <Tweet key={T.id} info={T}/>)
            }

        </div>
    )
}
