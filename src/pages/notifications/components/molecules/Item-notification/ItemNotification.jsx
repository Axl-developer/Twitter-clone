import React from 'react'
import { Icons }from '../../../../../components/icons'

import './styles.scss'

export const ItemNotification = ({text}) => {
    return (
        <div className="ItemNotification">
            <div className="ItemNotification-content-svg">
                <Icons.IconTweet />
            </div>
            <div className="lighter">
                {text}
            </div>
        </div>
    )
}
