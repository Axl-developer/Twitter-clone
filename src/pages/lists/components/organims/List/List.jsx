import React from 'react'

import './styles.scss'
import { Title } from '../../../../../components/atoms'

export const List = ({title,listas,mensaje,setList,Component,btn,variant = ''}) => {
    return (
        <div className="lists-content">
            <Title text={title} variant="fz21 bold lists-h1"/>
            
            {
                (listas.length)
                    ?<div className={`lists-mapListas ${variant}`}>
                        {
                            listas.map(lista => <Component key={lista.id} lista={lista} setList={setList} btn={btn} />)
                        }
                    </div>
                    
                    : 
                    <div className="lists-mensaje-content">
                        <Title text={mensaje} variant="grey fz15 lists-span" />
                    </div>
            }
        </div>
    )
}
