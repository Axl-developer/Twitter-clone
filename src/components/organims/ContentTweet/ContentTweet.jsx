import React from 'react'
import { useSelector } from 'react-redux'
import { Tweet } from '../Tweet/Tweet'

import './styles.scss'

const ContentTweet = () => {
  const tweets = useSelector((state) => state.tweets)

  
  return (
    <>
        {
            tweets.map( T=> 
              <div className='contentTweet' key={T.id}>
                <Tweet info={T}/>
              </div>
            )
        }
    </>
)}

export default ContentTweet