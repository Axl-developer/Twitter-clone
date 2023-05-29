import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Header } from '../../components/molecules/Header/Header'
import { WidgetList } from '../../components/organims'
import { Loader, Title } from '../../components/atoms'
import ContentTweet from '../../components/organims/ContentTweet/ContentTweet'
import { getWidgets } from '../../services/widgets.services'

export const Explore = () => {

    const dispatch = useDispatch()
    const trends = useSelector((state) => state.trends)

    const [isLoading, setIsLoading] = useState(!trends.length && true);

    useEffect(() => {
        let monuted = true;
        
        (monuted & isLoading) && getWidgets(dispatch,setIsLoading)
  
        return () => monuted = false
    }, [dispatch, isLoading])


    return (
        <div>
            <Header search={true} config={true}/>
            <Title text='Tendencias para ti' variant='h1 fz20 bold exporre-h1'/>
            {
                isLoading
                ?<Loader/>
                :<WidgetList items={trends} variant="is-explore"/>
            }
            <ContentTweet/>
        </div>
    )
}
