import React from 'react'

import { Title } from '../../atoms'
import './styles.scss'

export const NothingInfo = ({title,text}) => {
    return (
        <div className="Nothing-info">
            <Title text={title} variant="bold fz31 Nothing-title" />
            <Title text={text} variant="grey fz15" />
        </div>
    )
}
