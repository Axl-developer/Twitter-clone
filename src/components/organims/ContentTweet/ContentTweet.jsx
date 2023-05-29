import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Tweet } from '../Tweet/Tweet'
import { Loader } from '../../atoms'

import { getTweets } from '../../../pages/home/services/tweets.services'

import './styles.scss'

const ContentTweet = () => {

  const dispatch = useDispatch()
  const tweets = useSelector((state) => state.tweets)

  const [isLoading, setIsLoading] = useState(!tweets.length && true);

  useEffect(() => {
      let monuted = true;
      
      (monuted & isLoading ) && getTweets(dispatch,setIsLoading)

      return () => monuted = false
  }, [dispatch,isLoading])

  return (
    <>
        {
          isLoading 
            ?<Loader />
            
            :tweets.map( T=> 
                <div className='contentTweet' key={T.id}>
                  <Tweet info={T}/>
                </div>
              )
        }
    </>
)}

export default ContentTweet