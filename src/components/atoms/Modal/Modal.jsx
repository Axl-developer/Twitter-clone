import React from 'react'
import Icons from '../../icons';
import './styles.scss';


export const Modal = ({children,close}) => {

  return (
    <div className='modal'>
        <div className="modal-card">
            <div className="modal-head">
                <div className="modal-content-svg" onClick={close}>
                  <Icons.iconClose />
                </div>
                <Icons.iconClose />
            </div>
            <div className="modal-body">
              {children}
            </div>
        </div>
        <div className="modal-background" onClick={close}></div>
    </div>
  )
}
