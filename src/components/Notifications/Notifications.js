import React, { useState } from 'react'
import { Header } from '../Headers/Header'
import { ListNotifications } from './ListNotifications'
import {Mentions} from './Mentions'

export const Notifications = () => {

    const [Todo, setTodo] = useState(true)
    return (
        <div>
            <Header title={'Notificaciones'} config={true}/>

            <div className="Notifications__contentTab">

                <div 
                    className={(Todo) ?'active' : ''}
                    onClick={() => setTodo(!Todo)}
                >
                    Todo
                </div>

                <div
                    className={(!Todo)?'active' : ''}
                    onClick={() => setTodo(!Todo)}
                >
                    Menciones
                </div>

            </div>
            {
                (Todo)
                ?<ListNotifications />
                :<Mentions />
            }

        </div>
    )
}
