import React, { Suspense, lazy } from 'react'
import { LoadTweet } from './components/atoms';

const LazyRoter = lazy(() => import(/* webpackChunkName: "LazyLayout" */'./routers/AppRouter'))

export const App = () => {

    return (
        <Suspense fallback={<LoadTweet />}>
            <LazyRoter />
        </Suspense>
    )
}
