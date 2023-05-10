import React from 'react'
import Icons from '../../icons';
import './styles.scss';
import { useSelector } from 'react-redux';
import { Button } from '../Button/Button';


export const Modal = ({children,close}) => {
  
  const {value} = useSelector((state) => state.modal)

  return (
    value &&
    <div className='modal'>
        <div className="modal-card">
            <div className="modal-head">
                <div className="modal-content-svg" onClick={close}>
                  <Icons.iconClose />
                </div>
                <Button text="Responder" variant="is-primary modal-button" disabled={true} />
            </div>
            <div className="modal-body">
              {children}
            </div>
        </div>
        <div className="modal-background" onClick={close}></div>
    </div>
  )
}
