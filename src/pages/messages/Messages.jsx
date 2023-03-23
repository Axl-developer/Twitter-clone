import React from 'react'
import { useSelector } from 'react-redux'
import { Header } from '../../components/Headers/Header'

import { NothingInfo } from '../../components/NothingInfo/NothingInfo'

export const Messages = () => {

    const messages = useSelector((state) => state.messages)

    return (
        <div>
            <Header title={'Mensajes'} config={true}/>
            {
                (messages.length)
                ?'messages'
                :<NothingInfo title={'Envía un mensaje, recibe un mensaje'} text={'Los Mensajes Directos son conversaciones privadas entre tú y otras personas en Twitter. Puedes compartir Tweets, contenido multimedia y mucho más.'}/>
            }
        </div>
    )
}
