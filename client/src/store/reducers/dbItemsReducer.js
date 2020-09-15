import { updateState } from './updateState';
import {START_FETCHING,
        ALL_CATEGORY_ITEMS, 
        USER_CART_ITEMS,
        ADMIN_DELETE_ITEM,
        DELETE_CART_ITEM,
        CLEAR_STATE,
        CLREAR_CART,
        CLREAR_TOASTER,
        ADD_CART_ITEM_TO_TOASTER,
        CUSTOM_CATEGORY } from '../actions/actionsTypes';

let initialState = {
    itemsList: [],
    loading:true
}

const startFetchingReducer = (state, action)=>(
    updateState(state,{
        loading:true
    })
)
const getAllItemsReducers = (state, action)=>(
    updateState(state, {
        itemsList: action.itemsList,
        loading:false
    })
)
const userCartItemsReducer = (state, action)=>(
    updateState(state, {
        cartItems: action.cartItems,
        loading:false
    })
)

const deleteCartItemReducer = (state, action)=>(
    updateState(state, {
        cartItems: state.cartItems.filter(item=> item._id != action.cartItemId),
        cartItemsCount: action.cartItemsCount
    })
)

const adminDeleteItemReducer = (state, action)=>{
    let [category, value] = getCategory(action);

    if(!state[category]){
        category= "itemsList"
    }

    return updateState(state, {
        [category]: state[category].filter(item=> item._id != action.itemId)
    }) 
}

const getFirst8ItemsReducer = (state, action)=>{
    let [category, value] = getCategory(action);
    return updateState(state, {
        [category]: value,
        loading:false
    })
}

const getCategory = (action)=>{
    for (const key in action){
        if(key !== "type" && key !=="itemId"){
            return [key, action[key]]
        }
    }
}

const clearStateReducer = (state, action)=>(
    updateState(state,{
        itemsList: [],
        paints: [],
        photos:[],
        tapestry:[],
        Embroidery:[],
        loading:true
    })
);

const clearCartReducer = (state, action)=>(
    updateState(state,{
        cartItems: [],
        clearCartDone: true,
        cartItemsCount: action.cartItemsCount
    })
);

const clearToasterReducer = (state, action)=>(
    updateState(state,{
        clearCartDone: false,
        addedToCart: false
    })
)

const addItemCartToasterReducer = (state, action)=>(
    updateState(state,{
        addedToCart: true,
        cartItemsCount: action.cartItemsCount
    })
);
const dbItemsReducer = (state=initialState, action)=>{
     switch(action.type){
         case START_FETCHING:    return startFetchingReducer  (state, action);  
         case ALL_CATEGORY_ITEMS:return getAllItemsReducers   (state, action);
         case USER_CART_ITEMS:   return userCartItemsReducer  (state, action);
         case ADMIN_DELETE_ITEM: return adminDeleteItemReducer(state, action); 
         case DELETE_CART_ITEM:  return deleteCartItemReducer (state, action);
         case CUSTOM_CATEGORY :  return getFirst8ItemsReducer (state, action);
         case CLEAR_STATE:       return clearStateReducer     (state, action);
         case CLREAR_CART:       return clearCartReducer      (state, action);
         case CLREAR_TOASTER:    return clearToasterReducer   (state, action);
         case ADD_CART_ITEM_TO_TOASTER: return addItemCartToasterReducer(state, action); 
         default: return state;    
     }
}

export default dbItemsReducer;