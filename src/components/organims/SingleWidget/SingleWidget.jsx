import React from 'react'
import { WidgetList } from '../WidgetList/WidgetList'
import { Loader } from '../../atoms'


export const SingleWidget = ({title,items,isLoading}) => {
    return (
        <div className="widgets-SingleContent">
            {
                isLoading
                ?<Loader/>
                :<>
                    <h1>{title}</h1>
                    <WidgetList items={items}/>
                </>
            }
        </div>
    )
}
