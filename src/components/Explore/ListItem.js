import React from 'react'
import { Topicality } from './Topicality'
import {Trends} from './Trends'

export const ListItem = ({Trend = false,title}) => {


    const Items = [1,2,3]

    return (
        <div className="Explore__ListItem">
            <h1 className="bold">{title}</h1>
            {
                Items.map( single => (Trend) ? <Trends key={single}/> : <Topicality  key={single}/>)
            }
        </div>
    )
}
