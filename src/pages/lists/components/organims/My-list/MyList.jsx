import React, { useState } from 'react'
import { Button, Title } from '../../../../../components/atoms'
import { Icons }from '../../../../../components/icons'

import './styles.scss'

export const MyList = ({lista,setList,btn = false}) => {

    const [isActive, setIsActive] = useState(false)

    const setItem = () => {
        setList(lista)
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
                ?<Button text={(!isActive)?"Seguir":"Siguiendo"} variant={`p16 ${(!isActive)?"is-textPrimaryInvert":"is-textPrimary"}`} action={(!isActive)?setItem:null}/>
                :
                <div>
                    {
                    (!isActive)
                        ?<Icons.IconPin onClick={setItem} />
                        :<Icons.IconPinFull />
                    }
                </div>
            }
        </div>
    )
}