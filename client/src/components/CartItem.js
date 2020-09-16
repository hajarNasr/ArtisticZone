import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart, reduceItemQuantity } from '../store/actions/dbItemsActions';
import { isAuthenticated } from '../helpers';
import { AddToCartIcon, RemoveFromCartIcon } from './CartIcons';
import { UpCaretIcon, DownCaretIcon, ExternalLinkIcon} from './FaIcons';
import LazyLoadImage from './LazyLoadImage';
import '../css/components/item.css';

const CartItem = ({item})=>{
    const dispatch = useDispatch();
    const [ quantity, setQuantity ] = useState(item.quantity);
    
    const addItemToCart = ()=>{
        dispatch(addToCart(item._id))
        setQuantity(quantity+1);
    }

    const reduceItemFromCart = ()=>{
        dispatch(reduceItemQuantity(item._id));
        setQuantity(quantity-1);
    }
    return(
        <div className="item">
        <LazyLoadImage
             imgLink = {item.imgLink}
       />
       <div className="item-price">
            {item.price}$
        </div>
        <div className="img-source-src">
                Src
            </div>
            <div className="img-source-link">
                <a href={`${item.source}`} 
                    target="blank">
                    Image source <ExternalLinkIcon/>
               </a> 
        </div>   
        <div className="item-quantity">
            <UpCaretIcon
                onClick = {addItemToCart}

            />
                <span className="quantity" title="Quantity">
                    {quantity}
                </span>
            <button
              disabled = {quantity >= 2? false: true}
              className="quantity-btn"
              onClick = {reduceItemFromCart}
            >
                <DownCaretIcon/>
            </button>
        </div>

       <div className="item-bottom">
           {isAuthenticated() &&
               <div className="cartitem-bottom-inner">
                   <AddToCartIcon
                        onClick={addItemToCart} 
                    />
                    <RemoveFromCartIcon
                       onClick={()=>dispatch(removeFromCart(item._id))} 
                    />
                    
               </div>
           }
       </div>
     </div>
    )
}

export default CartItem;