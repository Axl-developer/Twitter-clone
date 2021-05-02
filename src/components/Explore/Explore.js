import React from 'react'
import { Header } from '../Headers/Header'
import { QueEstaPasando, TendenciasPeru } from '../Widgets/Tendencias'
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
            <ListItem title={'Tendencias para ti'}  Trend={true} Items={TendenciasPeru}/>

            <ListItem title={'¿Qué está pasando?'} Items={QueEstaPasando}/>
        </div>
    )
}
