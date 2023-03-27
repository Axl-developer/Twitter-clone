import React from 'react'
import { ResponseTweet } from '../ResponseTweet/ResponseTweet'

import { BodyTweet, Actions } from '../../molecules'
import './styles.scss'


export const Tweet = ({info}) => {

    return (
        <>
            {//map de responses
                info?.response && <BodyTweet info={{...info.response,actions:true,isHilo:true,isResponse:true}} />
            }
            <BodyTweet info={{...info,actions:true}} />

        </>
    )
}
