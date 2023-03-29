import React from 'react'
import { Span } from '../../atoms'
import { WidgetItem } from '../../molecules'

export const WidgetList = ({items}) => {

    return (
        <div className="Widgets__WidgetList">
            {
                items.map( item => <WidgetItem key={item.id} info={item} />)
            }
            <div className="widgets-item">
                <Span variant={'blue xs'} text="Mostrar más"/>
            </div>
        </div>
    )
}
