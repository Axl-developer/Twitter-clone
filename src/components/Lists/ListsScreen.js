import React from 'react'
import { useState } from 'react'
import { Header } from '../Headers/Header'
import { Tweets } from './Listas'
import { Lists } from './Lists'
import { ListasItem } from './ListasItem'
import { FixList } from './FixList'
import { MyList } from './MyList'

export const ListsScreen = () => {

    const [fijadas, setFijadas] = useState([])

    const [Tus_listas, setTus_listas] = useState([])

    return (
        <div>
            <Header title={'Listas'}/>

            <Lists Component={FixList} title={'Listas fijadas'} listas={fijadas} mensaje={'Aún no hay nada para ver aquí. Fija tus Listas favoritas para acceder a ellas rápidamente.'}/>

            <Lists Component={ListasItem} title={'Descubre Listas Nuevas'} listas={Tweets} mensaje={''} setList={setTus_listas}/>
            
            <Lists Component={MyList} title={'Tus Listas'} listas={Tus_listas} setList={setFijadas} mensaje={'No creaste ni sigues ninguna Lista. Cuando lo hagas, aparecerán aquí.'}/>
        </div>
    )
}
