import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { MenuSelector } from '../UI/MenuSelector';
import { DashboardRouter } from './DashboardRouter';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <MenuSelector />

                <DashboardRouter />
            </div>
        </Router>
    )
}
