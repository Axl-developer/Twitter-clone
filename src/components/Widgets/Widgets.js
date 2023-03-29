import React from 'react'
import { useSelector } from 'react-redux'
import Icons from '../icons'
import { Form } from '../molecules'
import { SingleWidget } from './SingleWidget'

export const Widgets = () => {

    const trends = useSelector((state) => state.trends)
    const whoToFollow = useSelector((state) => state.whoToFollow)

    return (
        <div className="Widgets__content">
            <Form />

            <div style={{position:'relative'}}>
                <SingleWidget title={'Tendencias'} items={trends}/>

                <SingleWidget title={'A quién seguir'} items={whoToFollow}/>
            </div>
        </div>
    )
}
