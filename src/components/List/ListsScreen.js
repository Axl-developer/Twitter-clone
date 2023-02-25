import React from 'react'
import { useState } from 'react'
import { Header } from '../Headers/Header'
import { List } from './List'
import { ListasItem } from './ListasItem'
import { FixList } from './FixList'
import { MyList } from './MyList'
import { useSelector } from 'react-redux'

export const ListScreen = () => {
    
    const {news,yourList,fixed} = useSelector((state) => state.list)//crear dipatch para quitar los state

    const [fijadas, setFijadas] = useState([...fixed])

    const [Tus_listas, setTus_listas] = useState([...yourList])


    return (
        <div>
            <Header title={'Listas'}/>

            <List Component={FixList} title={'Listas fijadas'} listas={fijadas} mensaje={'Aún no hay nada para ver aquí. Fija tus Listas favoritas para acceder a ellas rápidamente.'}/>

            <List Component={ListasItem} title={'Descubre Listas Nuevas'} listas={news} mensaje={''} setList={setTus_listas}/>
            
            <List Component={MyList} title={'Tus Listas'} listas={Tus_listas} setList={setFijadas} mensaje={'No creaste ni sigues ninguna Lista. Cuando lo hagas, aparecerán aquí.'}/>
        </div>
    )
}
