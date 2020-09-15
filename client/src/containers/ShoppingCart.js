import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useModal, useScrollToTop } from '../custom-hooks/CustomHooks';
import ConfirmDeleteModal from '../components/ConfirmDeleteModal';
import { FaShoppingCart } from '../components/FaIcons';
import Header from '../layout/Header';
import { getUserCartItems, clearCart } from '../store/actions/dbItemsActions';
import CartItem from '../components/CartItem';
import { getUserId } from '../helpers';
import Spinner from '../components/Spinner';
import Toaster from '../components/Toaster';
import '../css/containers/shopping-cart.css'

const ShoppingCart = ()=>{
    const dispatch = useDispatch();
    useScrollToTop();
    let {loading, cartItems, clearCartDone} = useSelector(state=>
                                                          state.dbItemsReducer);

    let [isShowModal, showModal, hideModal, modalDispatch ] = useModal();

    const deleteItem =()=>{
        modalDispatch(clearCart());
        hideModal()
    }
                                                                
    useEffect(()=>{
        dispatch(getUserCartItems(getUserId()))
    }, [dispatch]);

    return(
        <div className="m-left-10 shopping-cart-page">
            <Header
                login = {true}
                logout = {true}
                title = "Shopping Cart"
            />
            {loading? 
                <Spinner/>
                :
                cartItems && 
                  cartItems.length?
                    <div className="outer-div">
                        <div className="clear-cart">
                            <button onClick = {showModal}>
                                <b>Empty</b> <FaShoppingCart/>
                            </button>
                        </div>
                        <div className="items-list-wrapper"> 
                            {cartItems.map(item=>
                                <CartItem
                                    key = {item._id}
                                    item={item}
                                />
                            )
                            }
                        </div> 
                        {isShowModal &&
                            <ConfirmDeleteModal
                                msg="You sure you want to clear your cart?"
                                confirmDelete= {deleteItem}
                                showModal={showModal}
                                hideModal={hideModal}
                            />
                        }
                    
                    </div>  
                    :
                    <div className="no-items-in-cart">
                       You don't have any items in your cart!
                       {clearCartDone && 
                           <Toaster
                               msg="Successfully removed."
                           />
                        }
                    </div> 
                    }   
        </div>
    )
}

export default ShoppingCart;