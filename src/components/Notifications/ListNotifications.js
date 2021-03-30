import React from 'react'
import { IemNotification } from './IemNotification'

export const ListNotifications = () => {

    const Notifications = [1,2,3,4,5]
    return (
        <div>
            {
                Notifications.map( Notifications => <IemNotification key={Notifications} />)
            }
        </div>
    )
}
