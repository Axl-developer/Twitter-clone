import React from 'react'
import { useSelector } from 'react-redux'
import { Header, NothingInfo } from '../../components/molecules'

export const Bookmarks = () => {

    const bookmarks = useSelector((state) => state.bookmarks)

    return (
        <div>
            <Header title={'Guardados'} second="is-second"/>
            {
                (bookmarks.length)
                ?'bookmarks'
                :<NothingInfo title={'Todavía no agregaste ningún Tweet a tus Elementos guardados'} text={'Cuando lo hagas, aparecerán aquí.'}/>
            }
        </div>
    )
}
