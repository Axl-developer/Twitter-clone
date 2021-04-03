import React from 'react'
import { WidgetList_Item } from './WidgetList_Item'

export const WidgetList = ({items=[1,2,3,4,5]}) => {



    return (
        <div className="Widgets__WidgetList">
            {
                items.map( item => <WidgetList_Item key={item} />)
            }
            <div className="Widgets__WidgetList_Item">
                <a className="Widgets__more">Mostrar más</a>
            </div>
        </div>
    )
}
