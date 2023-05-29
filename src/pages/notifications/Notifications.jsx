import React, { useState } from 'react'
import { Header, NothingInfo, Tab } from '../../components/molecules'

export const Notifications = () => {

    const [tabSelected, setTabSelected] = useState(1);

    const tabs = {
        items:[
            {text:'Todo',id:1},
            {text:'Menciones',id:2}
        ],
        select:tabSelected,
        action:(id)=>{setTabSelected(id)}
    }

    return (
        <div>
            <Header title={'Notificaciones'} second="is-second" config={true}/>

            <Tab tabs={tabs.items} change={tabs.action} select={tabs.select} variant="flex1"/>
            {
                // crear un solo list para simplificar ambas listas
                (tabs.select === 1)
                    ?<NothingInfo title={'No hay nada que ver aquí. Por ahora.'} text={'Todas tus notificaciones, las verás aquí.'}/>
                    :<NothingInfo title={'No hay nada que ver aquí. Por ahora.'} text={'Me gusta, menciones, Retweets y mucho más: si proviene de una cuenta verificada, lo verás aquí.'}/>
            }

        </div>
    )
}
