import React from 'react'

export const ListasItem = () => {
    return (
        <div className="Lists__ListaItem">

            <div className="Lists__info_content">
                <div className="content-img">
                    <img src="https://pbs.twimg.com/profile_images/1278376724900786182/zXbHm9d-_x96.jpg" atl="img"/>
                </div>

                <div className="Lists__nombres">
                    <h1>Noticias</h1>
                    <span className="Lists__user">Nombre</span> <span className="lighter">@nombre</span>
                </div>
            </div>

            <button className="btn_primary">
                Seguir
            </button>
        </div>
    )
}
