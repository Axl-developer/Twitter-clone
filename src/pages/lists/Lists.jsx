import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Header } from '../../components/molecules/Header/Header'
import { List, FixList, MyList } from './components/organims'
import {  modifyListFixed, modifyListYourList } from '../../redux/slices/listSlice'

import { getList } from './services/list.services'


export const Lists = () => {
    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        let monuted = true
        
        monuted && getList(dispatch,setIsLoading)

        return () => monuted = false
    }, [dispatch])
    

    const {news,yourList,fixed} = useSelector((state) => state.list)

    const setFixedList = (list) => {
        dispatch(modifyListFixed(list))
    }

    const setYourList = (list) => {
        dispatch(modifyListYourList(list))
    }

    return (
        <div>
            <Header title={'Listas'} second="is-second"/>

            <List Component={FixList} isLoading={isLoading} title={'Listas fijadas'} listas={fixed} mensaje={'Aún no hay nada para ver aquí. Fija tus Listas favoritas para acceder a ellas rápidamente.'} variant='isFixed'/>
            <List Component={MyList} isLoading={isLoading} title={'Descubre Listas Nuevas'} listas={news} mensaje={''} setList={setYourList} btn={true}/>
            <List Component={MyList} isLoading={isLoading} title={'Tus Listas'} listas={yourList} setList={setFixedList} mensaje={'No creaste ni sigues ninguna Lista. Cuando lo hagas, aparecerán aquí.'}/>
        </div>
    )
}
