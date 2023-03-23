import React from 'react'
import { useSelector } from 'react-redux'
import { Header } from '../../components/Headers/Header'
import { ListItem } from '../../components/molecules/List-item/ListItem'

export const Explore = () => {

    const trends = useSelector((state) => state.trends)

    return (
        <div>
            <Header search={true} config={true}/>
            <div className="Explore__content-head">
                <div>
                    <span className="lighter">COVID-19 EN DIRECTO</span>
                    <h1>COVID-19 actualizaciones para EE.UU.</h1>
                </div>
            </div>
            <ListItem title={'Tendencias para ti'}  Trend={true} Items={trends}/>



        </div>
    )
}
