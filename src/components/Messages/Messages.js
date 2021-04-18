import React from 'react'
import { Header } from '../Headers/Header'
import { NothingInfo } from '../NothingInfo/NothingInfo'

export const Messages = () => {
    return (
        <div>
            <Header title={'Mensajes'} config={true}/>
            <NothingInfo title={'Envía un mensaje, recibe un mensaje'} text={'Los Mensajes Directos son conversaciones privadas entre tú y otras personas en Twitter. Puedes compartir Tweets, contenido multimedia y mucho más.'}/>
        </div>
    )
}
