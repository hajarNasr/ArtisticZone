import React from 'react';
import Modal from './Modal';
import ConfirmDelete from './ConfirmDelete';

const ConfirmDeleteModal = ({showModal, hideModal, msg, confirmDelete})=>{
    return(
        <Modal
           showModal={showModal}
           hideModal={hideModal}
        > 
           <ConfirmDelete
              msg={msg}
              hideModal = {hideModal}
              confirmDelete ={confirmDelete}
             />
        </Modal>
    )
}

export default ConfirmDeleteModal;