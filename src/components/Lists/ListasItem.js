import React, { useState } from 'react'

export const ListasItem = ({lista,setList}) => {

    const [Siguiendo, setSiguiendo] = useState(false)

    const Seguir = () => {
        setList(c => [lista,...c])
        setSiguiendo(!Siguiendo)
    }
    

    return (
        <div className="Lists__ListaItem">

            <div className="Lists__info_content">
                <div className="content-img">
                    <img src={process.env.PUBLIC_URL + lista.url} alt="img"/>
                </div>

                <div className="Lists__nombres">
                    <h1>{lista.nombre_lista}</h1>
                    <span className="Lists__user">{lista.nombre}</span> <span className="lighter">{lista.tweet_nom}</span>
                </div>
            </div>

            <button className={ (!Siguiendo)?"btn btn_primary":"btn btn_secondary"} onClick={(!Siguiendo)?Seguir:null}>
                {(!Siguiendo)?"Seguir":"Siguiendo"}
            </button>
        </div>
    )
}
