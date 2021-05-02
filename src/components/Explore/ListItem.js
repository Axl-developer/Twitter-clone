import React from 'react'
import { TendenciasPeru } from '../Widgets/Tendencias'
import { Topicality } from './Topicality'
import {Trends} from './Trends'

export const ListItem = ({Trend = false,title,Items}) => {

    return (
        <div className="Explore__ListItem">
            <h1 className="bold">{title}</h1>
            {
                Items.map( single => (Trend) ? <Trends single={single} key={single.id}/> : <Topicality single={single} key={single.id}/>)
            }
        </div>
    )
}
