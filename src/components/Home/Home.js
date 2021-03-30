import React from 'react'
import { Header } from '../Headers/Header'
import { Tweet } from './Tweet'

export const Home = () => {
    return (
        <div>
            <Header title={'Inicio'} destacados={true}/>

            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
        </div>
    )
}
