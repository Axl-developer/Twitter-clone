import React from 'react'
import { WidgetListItem } from './WidgetList_Item'

export const WidgetList = ({items}) => {

    return (
        <div className="Widgets__WidgetList">
            {
                items.map( item => <WidgetListItem key={item.id} info={item} />)
            }
            <div className="Widgets__WidgetList_Item">
                <button className="Widgets__more">Mostrar más</button>
            </div>
        </div>
    )
}
