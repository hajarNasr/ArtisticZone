import React from 'react';
import { useModal } from '../custom-hooks/CustomHooks';
import ConfirmDeleteModal from './ConfirmDeleteModal';
import { adminDeleteItem } from '../store/actions/adminManageItemsActions';

const ItemSettings = ({itemId, category})=>{
   let [isShowModal, showModal, hideModal, dispatch ] = useModal();

    const deleteItem =()=>{
        dispatch(adminDeleteItem(itemId, category));
        hideModal();
    }
    return(
        <div>
            <img onClick = {showModal}
                 className="trash-icon"
                 alt="delete item icon" 
                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAe0lEQVRIiWNgGOqAkRhFIXJyDf8ZGOrRhDvXPnpUQbIFwXJy/4l0HFaw9tEjFDOZKDGMbBAsJ/efFJ/gU09zHxBlAboLSfHh4PDBqAWjFoxaQBlgIUYRehGMzscHBswHTxkYGKRJrHyeYhPE6oP///9n4dKAy3ConmEIAOxPJ4hAoMEiAAAAAElFTkSuQmCC"/>
            {isShowModal &&
                <ConfirmDeleteModal
                    msg="You sure you want to delete this?"
                    confirmDelete= {deleteItem}
                    showModal={showModal}
                    hideModal={hideModal}
                />
            }
        </div>
    )
}
export default ItemSettings;