import React from 'react'

import './styles.scss'
import { Title } from '../../atoms'

export const NothingInfo = ({title,text}) => {
    return (
        <div className="Nothing-info">
            <Title text={title} variant="bold fz20 Nothing-title" />
            <Title text={text} variant="grey fz15" />
        </div>
    )
}
