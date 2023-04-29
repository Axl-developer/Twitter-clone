import React from 'react'
import { useSelector } from 'react-redux'
import { Header } from '../../components/molecules/Header/Header'
import { WidgetList } from '../../components/organims'
import { Title } from '../../components/atoms'

export const Explore = () => {

    const trends = useSelector((state) => state.trends)

    return (
        <div>
            <Header search={true} config={true}/>
            <Title text='Tendencias para ti' variant='h1 fz20 bold exporre-h1'/>
            <WidgetList items={trends}/>
        </div>
    )
}
