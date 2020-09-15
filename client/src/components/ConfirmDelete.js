import React from 'react';

const ConfirmDelete = ({msg, hideModal, confirmDelete})=>{
     return(
         <div className="confirm-delete">
             <span>{msg}</span>
             <div className="confirm-delete-btns">
                 <button
                   onClick={confirmDelete}
                 >Yes</button>
                 <button
                   onClick={hideModal}
                 >No</button>
             </div>
         </div>
     )
}

export default ConfirmDelete;