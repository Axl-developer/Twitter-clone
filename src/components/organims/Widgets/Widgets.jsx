import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getWidgets } from '../../../services/widgets.services'

import { Form } from '../../molecules'
import { SingleWidget } from '../SingleWidget/SingleWidget'

import './styles.scss'

export const Widgets = () => {
    const dispatch = useDispatch()

    const trends = useSelector((state) => state.trends)
    const whoToFollow = useSelector((state) => state.whoToFollow)

    const [isLoading, setIsLoading] = useState(!trends.length && true);

    useEffect(() => {
        let monuted = true;
        
        (monuted & isLoading) && getWidgets(dispatch,setIsLoading)
  
        return () => monuted = false
    }, [dispatch,isLoading])

    return (
        <div className="widgets-content">
            <Form />

            <div style={{position:'sticky'}}>
                <SingleWidget title={'Tendencias'} items={trends} isLoading={isLoading}/>

                <SingleWidget title={'A quién seguir'} items={whoToFollow} isLoading={isLoading}/>
            </div>
        </div>
    )
}
