import React from 'react'
import { Button, Title } from '../../atoms'
import { Icons }from '../../icons'

import './styles.scss'

export const Perfil = () => {
    return (
        <div className="user-content-perfil">
            <div className="portada">
                <img src="https://i.pinimg.com/originals/51/e8/a1/51e8a11013b54deab9f1b0b7e9cf475b.png" alt="img"/>
            </div>
            <div className="user-perfil">
                <div className="content-img">
                    <img src={ process.env.PUBLIC_URL +  "/assets/perfil/pexels-ekrulila-4040433.jpg"} alt="img"/>
                </div>
                <Button text="Editar perfil" variant="is-secondary p16"/>
            </div>
            
            <div className="user-data">
                <Title text="Usuario Name" variant="fz20 bold" />
                <Title text="@usuario" variant="blue" />
                <div>
                    <Icons.IconCalendar/> <Title text="Se unío en marzo 2014" variant="grey" />
                </div>
                <div>
                    <div className='mr-2'>
                        <Title text="74" variant="bold" />
                        <Title text="Siguiendo" variant="grey" />
                    </div>

                    <div>
                        <Title text="2" variant="bold" />
                        <Title text="Seguidores" variant="grey" />
                    </div>
                </div>
            </div>
        </div>
    )
}
