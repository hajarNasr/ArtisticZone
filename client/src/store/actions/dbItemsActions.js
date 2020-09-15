import axios from 'axios';
import { config, getUserId, isAuthenticated } from '../../helpers'; 
import {START_FETCHING, 
        ALL_CATEGORY_ITEMS, 
        USER_CART_ITEMS,
        CUSTOM_CATEGORY,
        CLEAR_STATE,
        CLREAR_CART,
        CLREAR_TOASTER,
        ADD_CART_ITEM_TO_TOASTER,
        DELETE_CART_ITEM } from './actionsTypes';


const allCategoryItemsAction = (itemsList)=>({
    type: ALL_CATEGORY_ITEMS,
    itemsList: itemsList,
});

const first8ItemsOf = (category, data)=>({
    type: CUSTOM_CATEGORY,
    [category]: data
})

const startFetchingAction = ()=>({
    type: START_FETCHING
});
export const getAllCategroyItems = (category, limit)=>{
    const route = limit? 
                  `/api/items/all/${category}/${limit}/`
                  :
                  `/api/items/all/${category}/`;
    return dispatch =>{
        axios.get(route, config)
             .then(res=>{
               limit?
               dispatch(first8ItemsOf(category, res.data))
               :
               dispatch(allCategoryItemsAction(res.data));
             })
            .catch(err=>{
               console.log(err.response);
            })
    }
}

const userCartItemsAction = (cartItems)=>({
    type: USER_CART_ITEMS,
    cartItems: cartItems
})
export const getUserCartItems = (userId)=>{
     return dispatch=>{
         if(isAuthenticated()){
            dispatch(startFetchingAction());
            axios.get(`/api/items/all/${userId}/cart/Items/`, config)
                 .then(res=>{
                    dispatch(userCartItemsAction(res.data.cartItems));
                 })
                 .catch(err=>{
                    console.log(err.response)
                 })
         }
     }
}

export const addCartItemToasterAction = (cartItemsCount)=>({
    type: ADD_CART_ITEM_TO_TOASTER,
    cartItemsCount: cartItemsCount
});

export const addToCart = (itemId)=>{
    return dispatch =>{
        axios.post(`/api/items/add/${itemId}/to/${getUserId()}/cart/`,config)
        .then(res=>{
            setCartItemsCount(res.data.cartItemsCount)
            dispatch(addCartItemToasterAction(res.data.cartItemsCount))
            
        })
        .catch(err=>{
            console.log(err.response)
        })

    }
}

const removeCartItemAction = (cartItemId, cartItemsCount)=>({
    type: DELETE_CART_ITEM,
    cartItemId: cartItemId,
    cartItemsCount: cartItemsCount
})
export const removeFromCart = (itemId)=>{
    return dispatch =>{
        axios.post(`/api/items/remove/${itemId}/from/${getUserId()}/cart/`, config)
             .then(res=>{
                setCartItemsCount(res.data.cartItemsCount)
                dispatch(removeCartItemAction(itemId, res.data.cartItemsCount));
             })
             .catch(err=>{
                 console.log(err)
             })
    }
}

export const reduceItemQuantity = (itemId)=>{
    return dispatch=>{
        axios.post(`/api/items/reduce/quantity/${itemId}/from/${getUserId()}/cart/`, config)
        .then(res=>{
            //dispatch(removeCartItemAction(itemId));
            console.log(res);
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

const clrearStateAction = ()=>({
    type: CLEAR_STATE
})
export const clearState = ()=>{
    return dispatch=>{
        dispatch(clrearStateAction())
    }
}

const clearCartAction = (cartItemsCount)=>({
   type:CLREAR_CART,
   cartItemsCount: cartItemsCount
});

export const clearToasterAction = ()=>({
    type:CLREAR_TOASTER
});

export const clearCart = ()=>{
    return dispatch=>{
        axios.post(`/api/items/clear/cart/${getUserId()}/`, config)
             .then(res=>{
                setCartItemsCount(res.data.cartItemsCount)
                dispatch(clearCartAction(res.data.cartItemsCount))
             })
             .catch(err=>{
                 console.log(err)
             })
    }
}

const setCartItemsCount = (cartItemsCount)=>{
    localStorage.setItem("cartItemsCount", parseInt(cartItemsCount));
}