import React from 'react'
import Icons from '../icons'

export const WidgetListItem = ({info}) => {
    return (
        <div className="Widgets__WidgetList_Item">
            <div>
                <span className="lighter">Tendencias en Perú</span>
                <Icons.IconOptions />
            </div>
            <span className="bold">{info.nombre}</span>
            <span className="lighter">{info.answers}</span>
        </div>
    )
}
