import React, { useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";

import { DashboardRouter } from './DashboardRouter';
import {MenuSelector, NewTweet, Widgets} from '../components/organims';
import { Modal } from '../components/atoms';
import { toogleModal } from '../redux/slices/modalSlice';
import { cleanResponse } from '../redux/slices/responseSlice';

export const AppRouter = () => {

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
            <div className="container">
                <MenuSelector />

                <main className='main'>
                    <DashboardRouter />
                    {(!IsMobile)&&<Widgets />}
                </main>
            </div>
            {
                <Modal close={closeModal}>
                    <NewTweet isModalTweet={true}/>
                </Modal>
            }
        </Router>
    )
}
