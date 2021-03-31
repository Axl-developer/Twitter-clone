import React from 'react'

export const NothingInfo = ({title,text}) => {
    return (
        <div className="Nothing__info">
            <h1 className="bold">{title}</h1>
            <span className="lighter">{text}</span>
        </div>
    )
}
