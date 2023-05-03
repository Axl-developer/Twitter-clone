import React from 'react'
import { Title } from '../../../../../components/atoms'

import './styles.scss'

export const FixList = ({lista}) => {

    return (
        <div className="fixList">
            <div className="content-img">
                <img src={process.env.PUBLIC_URL + lista.url} alt="img"/>
            </div>
            <Title text={lista.nombre_lista}/>
        </div>
    )
}
