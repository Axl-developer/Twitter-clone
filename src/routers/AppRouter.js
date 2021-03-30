import React, { useLayoutEffect, useRef } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { MenuSelector } from '../UI/MenuSelector';
import { DashboardRouter } from './DashboardRouter';

export const AppRouter = () => {

    return (
        <Router>
            <div style={{display:'flex'}}>
                
                <MenuSelector />

                <DashboardRouter />
            </div>
        </Router>
    )
}
