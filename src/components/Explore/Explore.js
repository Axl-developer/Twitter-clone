import React from 'react'
import { Header } from '../Headers/Header'
import { ListItem } from './ListItem'

export const Explore = () => {
    return (
        <div>
            <Header search={true} config={true}/>
            <div className="Explore__content-head">
                <div>
                    <span className="lighter">COVID-19 EN DIRECTO</span>
                    <h1>COVID-19 actualizaciones para EE.UU.</h1>
                </div>
            </div>
            <ListItem title={'Tendencias para ti'}  Trend={true}/>

            <ListItem title={'¿Qué está pasando?'} />
        </div>
    )
}
