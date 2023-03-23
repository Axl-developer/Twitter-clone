import React from 'react'
import Icons from '../../../components/icons'
export const Trends = ({single}) => {
    return (
        <div className="Explore__content_item">
            <div>
                <span className="lighter min-size">Tendencias en Perú</span>
                <Icons.IconOptions />
            </div>

            <span className="bold">{single.nombre}</span>

            <div className="lighter min-size">{single.answers}</div>
        </div>
    )
}
