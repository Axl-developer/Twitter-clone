import React, { useEffect, useState } from 'react'
import { AppRouter } from './routers/AppRouter';
import { LoadTweet } from './components/atoms';

export const App = () => {

    const [Loagind, setLoagind] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoagind(false)
        }, 2000);
    }, [])

    return (
        (Loagind)
            ?  <LoadTweet />
            : <AppRouter />
    )
}
