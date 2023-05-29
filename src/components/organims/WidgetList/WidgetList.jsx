import React from 'react'
import { Title } from '../../atoms'
import { WidgetItem } from '../../molecules'

import './styles.scss'

export const WidgetList = ({items,variant}) => {

    return (
        <div className={variant}>
            {
                items.map( item => <WidgetItem key={item.id} info={item} />)
            }
            <div className="widgets-item">
                <Title variant={'blue fz15'} text="Mostrar más"/>
            </div>
        </div>
    )
}
