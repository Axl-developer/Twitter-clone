import React, { useState } from 'react'
import { Header } from '../../components/molecules/Header/Header'
import { Perfil } from '../../components/organims/Perfil/Perfil'
import { NothingInfo, Tab } from '../../components/molecules'

export const User = () => {
    
    const [tabSelected, setTabSelected] = useState(1);

    const tabs = {
        items:[
            {text:'Tweets',id:1},
            {text:'Respuestas',id:2},
            {text:'Fotos y Videos',id:3},
            {text:'Me gusta',id:4},
        ],
        select:tabSelected,
        action:(id)=>{setTabSelected(id)}
    }

    return (
        <div>
            <Header title={'Usuario'} second="is-second" config={true}/>
            <Perfil />
            <Tab tabs={tabs.items} change={tabs.action} select={tabs.select}/>
            
            {tabSelected === 1 && <NothingInfo title={'No hay nada que ver aquí. Por ahora.'} text={'Todos tus Tweets, las verás aquí.'}/>}
            {tabSelected === 2 && <NothingInfo title={'No hay nada que ver aquí. Por ahora.'} text={'Todas tus Respuestas, las verás aquí.'}/>}
            {tabSelected === 3 && <NothingInfo title={'Luz, cámara... ¡adjuntos!'} text={'Cuando envíes Tweets con fotos o videos, se mostrarán aquí'}/>}
            {tabSelected === 4 && <NothingInfo title={'No hay nada que ver aquí. Por ahora.'} text={'Todos tus Me gusta, las verás aquí.'}/>}

        </div>
    )
}
