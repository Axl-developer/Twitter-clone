import React from 'react'
import { IemNotification } from './ItemNotification'

export const ListNotifications = ({items}) => {

    return (
        <div>
            {
                items.map( notification => <IemNotification key={notification.id} {...notification} />)
            }
        </div>
    )
}
