import React from 'react'
import { Header } from '../Headers/Header'
import { NothingInfo } from '../NothingInfo/NothingInfo'

export const Bookmarks = () => {
    return (
        <div>
            <Header title={'Guardados'}/>
            <NothingInfo title={'Todavía no agregaste ningún Tweet a tus Elementos guardados'} text={'Cuando lo hagas, aparecerán aquí.'}/>
        </div>
    )
}
