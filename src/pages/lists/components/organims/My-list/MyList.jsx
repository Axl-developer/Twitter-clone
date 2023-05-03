import React, { useState } from 'react'
import { Title } from '../../../../../components/atoms'
import Icons from '../../../../../components/icons'

import './styles.scss'

export const MyList = ({lista,setList,btn = false}) => {

    const [isActive, setIsActive] = useState(false)

    const setItem = () => {
        setList(c => [lista,...c])
        setIsActive(!isActive)
    }

    return (
        <div className="lists-ListaItem">

            <div className="lists-info-content">
                <div className="content-img">
                    <img src={process.env.PUBLIC_URL + lista.url} alt="img"/>
                </div>

                <div className="lists-nombres">
                    <Title text={lista.nombre_lista} variant="fz17 bold lists-name"/>
                    <div className='lists-sub-names'>
                        <Title text={lista.nombre} />
                        <Title text={lista.tweet_nom} variant="grey span" />
                    </div>
                </div>
            </div>
            {
                (btn)
                ?<button className={ (!isActive)?"btn btn_primary":"btn btn_secondary"} onClick={(!isActive)?setItem:null}>
                    {(!isActive)?"Seguir":"Siguiendo"}
                    </button>
                :
                <div onClick={setItem}>
                    {
                    (!isActive)
                        ?<Icons.IconPin />
                        :<Icons.IconPinFull />
                    }
                </div>
            }
        </div>
    )
}