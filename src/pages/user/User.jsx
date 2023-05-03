import React, { useState } from 'react'
import { Header } from '../../components/molecules/Header/Header'
import { Perfil } from '../../components/organims/Perfil/Perfil'
import { Tab } from '../../components/molecules'

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

        </div>
    )
}
