import React from 'react'
import { useState } from 'react'
import { Header } from '../Headers/Header'
import { Tweets } from './Listas'
import { Lists } from './Lists'

export const ListsScreen = () => {

    const fijadas = []

    const [Tus_listas, setTus_listas] = useState([])
    console.log(Tus_listas)

    return (
        <div>
            <Header title={'Listas'}/>

            <Lists title={'Listas fijadas'} listas={fijadas} mensaje={'Aún no hay nada para ver aquí. Fija tus Listas favoritas para acceder a ellas rápidamente.'}/>

            <Lists title={'Descubre Listas Nuevas'} listas={Tweets} mensaje={''} setList={setTus_listas}/>
            
            <Lists title={'Tus Listas'} listas={Tus_listas} mensaje={'No creaste ni sigues ninguna Lista. Cuando lo hagas, aparecerán aquí.'}/>
        </div>
    )
}
