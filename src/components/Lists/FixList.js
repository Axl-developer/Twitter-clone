import React from 'react'

export const FixList = ({lista}) => {

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

            <button className="btn btn btn_secondary">
                Fijado
            </button>
        </div>
    )
}
