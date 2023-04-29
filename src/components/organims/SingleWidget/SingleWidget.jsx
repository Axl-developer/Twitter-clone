import React from 'react'
import { WidgetList } from '../WidgetList/WidgetList'


export const SingleWidget = ({title,items}) => {
    return (
        <div className="widgets-SingleContent">
            <h1>{title}</h1>
            <WidgetList items={items}/>
        </div>
    )
}
