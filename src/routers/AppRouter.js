import React, { useLayoutEffect, useRef } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { MenuSelector } from '../UI/MenuSelector';
import { DashboardRouter } from './DashboardRouter';

export const AppRouter = () => {
    window.addEventListener("resize", function(){
        
        console.log(window.screen.width)
    });

    

    return (
        <Router>
            <div>
                
                <MenuSelector />

                <DashboardRouter />
            </div>
        </Router>
    )
}
