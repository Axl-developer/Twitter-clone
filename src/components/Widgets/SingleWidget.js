import React from 'react'
import { WidgetList } from '../organims'


export const SingleWidget = ({title,items}) => {
    return (
        <div className="Widgets__SingleContent">
            <h1>{title}</h1>
            <WidgetList items={items}/>
        </div>
    )
}
