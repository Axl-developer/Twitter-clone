import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";

import { DashboardRouter } from './DashboardRouter';
import { MenuSelector } from '../UI/MenuSelector';
import { Widgets } from '../components/Widgets/Widgets';
import {NewTweet} from '../components/organims';
import { Modal } from '../components/atoms';
import { toogleModal } from '../redux/slices/modalSlice';
import { cleanResponse } from '../redux/slices/responseSlice';

export const AppRouter = () => {

    const {value} = useSelector((state) => state.modal)
    const dispatch = useDispatch()

    const [IsMobile, setIsMobile] = useState(true)
    useEffect(() => {
        if(window.innerWidth >= 1005){
            setIsMobile(false)
        }else{
            setIsMobile(true)
        }
    }, [])


    window.addEventListener("resize", function(){
        console.log(window)
        if(window.innerWidth >= 1005){
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
