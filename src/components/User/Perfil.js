import React from 'react'

export const Perfil = () => {
    return (
        <div className="User__content_perfil">
            <div className="portada">
                <img src="https://i.pinimg.com/originals/51/e8/a1/51e8a11013b54deab9f1b0b7e9cf475b.png" alt="img"/>
            </div>
            <div className="User__Perfil">
                <div className="content-img">
                    <img src={ process.env.PUBLIC_URL +  "/assets/perfil/pexels-ekrulila-4040433.jpg"} alt="img"/>
                </div>
                <div className="btn btn_primary">
                    Editar perfil
                </div>
            </div>
            
            <div className="User__data">
                <h1>Usuario Name</h1>
                <span className="lighter">@usuario <span>user</span></span>
                <span className="lighter">Se unío en marzo 2014</span>
                <span className="lighter"> <span className="bold">17</span> Siguiendo</span>
                <span className="lighter"> <span className="bold">2</span> Seguidores</span>
            </div>
        </div>
    )
}
