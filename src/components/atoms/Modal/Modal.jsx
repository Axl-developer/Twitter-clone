import React from 'react'
import Icons from '../../icons';
import './styles.scss';


const Modal = ({children,close}) => {

  return (
    <div className='modal'>
        <div className="modal-card">
            <div className="modal-head">
                <div className="modal-content-svg" onClick={close}>
                  <Icons.iconClose />
                </div>
            </div>
            <div className="modal-body">
              {children}
            </div>
        </div>
    </div>
  )
}

export default Modal
