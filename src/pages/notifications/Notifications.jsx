import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { Header } from '../../components/Headers/Header'
import { ListNotifications } from '../../components/molecules/List-notifications/ListNotifications'
import { NothingInfo } from '../../components/NothingInfo/NothingInfo'

export const Notifications = () => {

    const [Todo, setTodo] = useState('notification')

    const {all,mentios} = useSelector((state) => state.notifications)

    return (
        <div>
            <Header title={'Notificaciones'} config={true}/>

            <div className="Notifications__contentTab">

                <div 
                    className={(Todo === 'notification') ?'active' : ''}
                    onClick={() => setTodo('notification')}
                >
                    Todo
                </div>

                <div
                    className={(Todo === 'mentions')?'active' : ''}
                    onClick={() => setTodo('mentions')}
                >
                    Menciones
                </div>

            </div>
            {
                // crear un solo list para simplificar ambas listas
                (Todo === 'notification')
                    ?<ListNotifications items={all}/>
                    :<NothingInfo title={'No hay nada que ver aquí. Por ahora.'} text={'Cuando alguien te mencione. lo encontrarás aquí.'}/>
            }

        </div>
    )
}
