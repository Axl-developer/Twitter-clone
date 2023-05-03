import React from 'react'
import { ItemNotification } from '../Item-notification/ItemNotification'


export const ListNotifications = ({items}) => {

    return (
        <div>
            {
                items.map( notification => <ItemNotification key={notification.id} {...notification} />)
            }
        </div>
    )
}
