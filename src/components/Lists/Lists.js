import React from 'react'
import { ListasItem } from './ListasItem'

export const Lists = ({title,listas,mensaje}) => {
    return (
        <div className="Lists__content">
            <div> 
                <h1>{title}</h1>
            </div>

            <div>
                {
                    (listas.length > 1)
                        ?<div className="Lists__mapListas">
                            {
                                listas.map(lista => <ListasItem key={lista}/>)
                            }
                        </div>
                        
                        : 
                        <div className="Lists__mensaje_content">
                            <span className="lighter">
                                {mensaje}
                            </span>
                         </div>
                }
            </div>
        </div>
    )
}
