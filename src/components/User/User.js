import React from 'react'
import { Header } from '../Headers/Header'
import { Perfil } from './Perfil'
import { Tabs } from './Tabs'

export const User = () => {
    return (
        <div>
            <Header title={'Usuario'} destacados={true}/>
            <Perfil />
            <Tabs />
        </div>
    )
}
