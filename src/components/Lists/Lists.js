import React from 'react'

export const Lists = ({title,listas,mensaje,setList,Component}) => {
    return (
        <div className="Lists__content">
            <div> 
                <h1>{title}</h1>
            </div>

            <div>
                {
                    (listas.length >= 1)
                        ?<div className="Lists__mapListas">
                            {
                                listas.map(lista => <Component key={lista.id} lista={lista} setList={setList}/>)
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
