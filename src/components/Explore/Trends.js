import React from 'react'

export const Trends = ({single}) => {
    return (
        <div className="Explore__content_item">
            <div>
                <span className="lighter min-size">Tendencias en Perú</span>
                <svg viewBox="0 0 24 24"><g><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg>
            </div>

            <span className="bold">{single.nombre}</span>

            <div className="lighter min-size">{single.answers}</div>
        </div>
    )
}
