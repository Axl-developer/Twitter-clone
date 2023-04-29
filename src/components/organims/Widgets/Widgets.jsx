import React from 'react'
import { useSelector } from 'react-redux'
import { SingleWidget } from '../SingleWidget/SingleWidget'
import { Form } from '../../molecules'

import './styles.scss'

export const Widgets = () => {

    const trends = useSelector((state) => state.trends)
    const whoToFollow = useSelector((state) => state.whoToFollow)

    return (
        <div className="widgets-content">
            <Form />

            <div style={{position:'sticky'}}>
                <SingleWidget title={'Tendencias'} items={trends}/>

                <SingleWidget title={'A quién seguir'} items={whoToFollow}/>
            </div>
        </div>
    )
}
