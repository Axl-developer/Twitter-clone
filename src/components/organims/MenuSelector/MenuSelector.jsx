import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { IsMobile } from '../../../helpers/IsMobile';
import { toogleModal } from '../../../redux/slices/modalSlice';
import { Navmenu } from '../../molecules';
import { NavDesktop } from '../NavDesktop/NavDesktop';

import './styles.scss'

//Selector de Menu
export const MenuSelector = () => {
    const [Mobile, setIsMobile] = useState(true)

    const dispatch = useDispatch();

    const activeModal = () =>{
        dispatch(toogleModal(true))
    }

    useEffect(() => {
        const isMobile = IsMobile();
        setIsMobile(isMobile)
    }, [])

    window.addEventListener("resize", function(){
        const isMobile = IsMobile();
        setIsMobile(isMobile) 
    });

    return (
       <header className="menu">
           {
                (Mobile)
                ? <Navmenu activeModal={activeModal}/>
                : <NavDesktop activeModal={activeModal}/>
           }
       </header>
    )
}