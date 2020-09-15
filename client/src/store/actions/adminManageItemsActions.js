import { config, isAdmin } from '../../helpers'; 
import { ADMIN_DELETE_ITEM } from './actionsTypes';
import axios from 'axios';

export const adminAddNewItem = (itemInfo)=>{
    return dispatch=>{
        if(isAdmin()){
            axios.post(
                "/api/items/admin/add/item/",
                JSON.stringify(itemInfo),
                config
            )
                .then(res=>{
                    console.log(res)
                    window.location.reload();
                })
                .catch(err=>{
                    console.log(err)
                })
        }
    }
}


const adminDeleteItemAction = (itemId, category)=>({
    type: ADMIN_DELETE_ITEM,
    itemId: itemId,
    [category]:category
})
export const adminDeleteItem = (itemId, category)=>{
    return dispatch=>{
        if(isAdmin()){
            axios.delete(`/api/items/admin/remove/item/${itemId}/`,
            config
            )
            .then(res=>{
                dispatch(adminDeleteItemAction(itemId, category))
                console.log(res);
            })
            .catch(err=>{
                console.log(err.response);
            })
        }
    }
}

export const adminEditItem = (itemInfo)=>{
    return dispatch=>{
        axios.post(
            "/api/items/admin/edit/item/",
            JSON.stringify(itemInfo),
            config
        )
             .then(res=>{
                 console.log(res)
             })
             .catch(err=>{
                 console.log(err)
             })
    }
}