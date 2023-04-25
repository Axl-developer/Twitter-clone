import React from 'react'
import { Header } from '../../components/molecules/Header/Header'
import { Perfil } from '../../components/organims/Perfil/Perfil'
import { Tabs } from '../../components/organims/Tabs/Tabs'

export const User = () => {
    return (
        <div>
            <Header title={'Usuario'} destacados={true}/>
            <Perfil />
            <Tabs />
        </div>
    )
}
