import React from 'react'
import { useSelector } from 'react-redux'
import { Tweet } from '../Tweet/Tweet'

import './styles.scss'

export const ContentTweet = () => {
  const tweets = useSelector((state) => state.tweets)

  return (
    <>
        {
            tweets.map( T=> 
              <div className='contentTweet' >
                <Tweet key={T.id} info={T}/>
              </div>
            )
        }
    </>
)}
