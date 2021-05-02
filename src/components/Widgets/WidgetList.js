import React from 'react'
import { WidgetList_Item } from './WidgetList_Item'

export const WidgetList = ({items}) => {

    return (
        <div className="Widgets__WidgetList">
            {
                items.map( item => <WidgetList_Item key={item.id} info={item} />)
            }
            <div className="Widgets__WidgetList_Item">
                <a className="Widgets__more">Mostrar más</a>
            </div>
        </div>
    )
}
