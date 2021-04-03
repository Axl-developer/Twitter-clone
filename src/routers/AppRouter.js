import React, { useEffect, useState} from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { Widgets } from '../components/Widgets/Widgets';
import { MenuSelector } from '../UI/MenuSelector';
import { DashboardRouter } from './DashboardRouter';

export const AppRouter = () => {
    const [IsMobile, setIsMobile] = useState(true)

    useEffect(() => {
        if(window.screen.width >= 1005){
            setIsMobile(false)
        }else{
            setIsMobile(true)
            console.log('mobile')
        }
    }, [])


    window.addEventListener("resize", function(){
        
        if(window.screen.width >= 1005){
            setIsMobile(false)
        }else{
            setIsMobile(true)
            console.log('mobile')
        }
    });

    return (
        <Router>
            <div style={{display:'flex'}} className="container">
                
                <MenuSelector />

                <DashboardRouter />

                {(!IsMobile)&&<Widgets />}
            </div>
        </Router>
    )
}
