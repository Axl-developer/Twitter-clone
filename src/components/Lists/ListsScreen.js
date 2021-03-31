import React from 'react'
import { Header } from '../Headers/Header'
import { Lists } from './Lists'

export const ListsScreen = () => {

    const fijadas = []

    const Nuevas = [1,2,3]

    const Tus_Listas = []

    return (
        <div>
            <Header title={'Listas'}/>

            <Lists title={'Listas fijadas'} listas={fijadas} mensaje={'Aún no hay nada para ver aquí. Fija tus Listas favoritas para acceder a ellas rápidamente.'}/>

            <Lists title={'Descubre Listas Nuevas'} listas={Nuevas} mensaje={''}/>
            
            <Lists title={'Tus Listas'} listas={Tus_Listas} mensaje={'No creaste ni sigues ninguna Lista. Cuando lo hagas, aparecerán aquí.'}/>
        </div>
    )
}
