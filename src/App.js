import React, { useState } from 'react'
import { Loading } from './Loading';
import { AppRouter } from './routers/AppRouter';

export const App = () => {

    const [Loagind, setLoagind] = useState(true)

    setTimeout(() => {
        setLoagind(false)
    }, 1500);
    
    return (
        (Loagind)
            ?  <Loading />
            : <AppRouter />
    )
}
