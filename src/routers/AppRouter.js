import React, { useEffect, useState} from 'react'
import { BrowserRouter as Router } from "react-router-dom";

import { DashboardRouter } from './DashboardRouter';
import { MenuSelector } from '../UI/MenuSelector';
import { Widgets } from '../components/Widgets/Widgets';
import {Modal} from '../components/atoms';
import {NewTweet} from '../components/organims';
import { useDispatch, useSelector } from 'react-redux';
import { toogleModal } from '../features/modal/modalSlice';
import { cleanResponse } from '../features/response/responseSlice';

export const AppRouter = () => {

    const {value} = useSelector((state) => state.modal)
    const dispatch = useDispatch()

    const [IsMobile, setIsMobile] = useState(true)
    useEffect(() => {
        if(window.screen.width >= 1005){
            setIsMobile(false)
        }else{
            setIsMobile(true)
        }
    }, [])


    window.addEventListener("resize", function(){
        
        if(window.screen.width >= 1005){
            setIsMobile(false)
        }else{
            setIsMobile(true)
        }
    });

    const closeModal = () => {
        dispatch(toogleModal(false))
        dispatch(cleanResponse())
    }

    return (
        <Router>
            <div style={{display:'flex'}} className="container">
                <MenuSelector />

                <DashboardRouter />

                {(!IsMobile)&&<Widgets />}
            </div>
            {value && 
                    <Modal close={closeModal}>
                        <NewTweet isModalTweet={true}/>
                    </Modal>
                }
        </Router>
    )
}
