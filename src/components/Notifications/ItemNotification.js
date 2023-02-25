import React from 'react'
import Icons from '../icons'

export const IemNotification = ({text}) => {
    return (
        <div className="Notifications__IemNotification">
            <div className="Notifications__content_svg">
                <Icons.IconTweet />
            </div>
            <div className="lighter">
                {text}
            </div>
        </div>
    )
}
