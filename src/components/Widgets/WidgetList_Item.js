import React from 'react'

export const WidgetList_Item = ({info}) => {
    return (
        <div className="Widgets__WidgetList_Item">
            <div><span className="lighter">Tendencias en Perú</span> <svg viewBox="0 0 24 24"><g><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg></div>
            <span className="bold">{info.nombre}</span>
            <span className="lighter">{info.answers}</span>
        </div>
    )
}
