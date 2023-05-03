import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Header } from '../../components/molecules/Header/Header'
import { List, FixList, MyList } from './components/organims'

export const Lists = () => {
    
    const {news,yourList,fixed} = useSelector((state) => state.list)//crear dipatch para quitar los state

    const [fijadas, setFijadas] = useState([...fixed])

    const [Tus_listas, setTus_listas] = useState([...yourList])


    return (
        <div>
            <Header title={'Listas'} second="is-second"/>

            <List Component={FixList} title={'Listas fijadas'} listas={fijadas} mensaje={'Aún no hay nada para ver aquí. Fija tus Listas favoritas para acceder a ellas rápidamente.'} variant='isFixed'/>

            <List Component={MyList} title={'Descubre Listas Nuevas'} listas={news} mensaje={''} setList={setTus_listas} btn={true}/>
            
            <List Component={MyList} title={'Tus Listas'} listas={Tus_listas} setList={setFijadas} mensaje={'No creaste ni sigues ninguna Lista. Cuando lo hagas, aparecerán aquí.'}/>
        </div>
    )
}
