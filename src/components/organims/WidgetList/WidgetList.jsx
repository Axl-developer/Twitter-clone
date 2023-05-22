import React from 'react'
import { Title } from '../../atoms'
import { WidgetItem } from '../../molecules'

export const WidgetList = ({items}) => {

    return (
        <div className="Widgets__WidgetList">
            {
                items.map( item => <WidgetItem key={item.id} info={item} />)
            }
            <div className="widgets-item">
                <Title variant={'blue fz15'} text="Mostrar más"/>
            </div>
        </div>
    )
}
