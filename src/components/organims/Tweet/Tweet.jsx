import React from 'react'
import { BodyTweet } from '../../molecules'

import './styles.scss'


export const Tweet = ({info}) => {

    return (
        <>
            {
                info?.response && <BodyTweet info={{...info.response}} actions={true} variant="is-response" />
            }
            <BodyTweet info={{...info}} actions={true}/>

        </>
    )
}
