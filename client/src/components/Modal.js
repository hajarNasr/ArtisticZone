import React from 'react';
import '../css/components/modal.css';

const Modal = ({hideModal, showModal, children})=>{
    const toggleModal = showModal? "modal display-block" : "modal display-none";  

    return (
        <div className={toggleModal}
             id="modal">
             <div>
                <button onClick={hideModal} 
                            className="modal-close-btn">
                    &times;
                </button>
                {children}
             </div>
        </div>
    )
}

export default Modal;