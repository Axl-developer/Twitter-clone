import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from '../components/Headers/Header';
import { MenuSelector } from '../UI/MenuSelector';
import { DashboardRouter } from './DashboardRouter';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Header/>
                
                <MenuSelector />

                <DashboardRouter />
            </div>
        </Router>
    )
}
