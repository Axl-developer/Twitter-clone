import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Header, NothingInfo, Tab } from '../../components/molecules'
import { ListNotifications } from './components/molecules'

export const Notifications = () => {

    const {all} = useSelector((state) => state.notifications)

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
                    ?<ListNotifications items={all}/>
                    :<NothingInfo title={'No hay nada que ver aquí. Por ahora.'} text={'Cuando alguien te mencione. lo encontrarás aquí.'}/>
            }

        </div>
    )
}
