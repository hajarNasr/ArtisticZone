import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/dbItemsActions';
import { isAuthenticated, isAdmin } from '../helpers';
import ItemSettings from './ItemSettings';
import { AddToCartIcon } from './CartIcons';
import { ExternalLinkIcon } from './FaIcons';
import '../css/components/item.css';

const Item = ({item})=>{
    const dispatch = useDispatch();

    return (
        <div style={{ backgroundImage: `url(${item.imgLink})` }}
             className="item"
            >
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
          
            <div className="item-bottom">
                {isAuthenticated() &&
                    <div className="item-bottom-inner">
                        <AddToCartIcon
                            onClick={()=>dispatch(addToCart(item._id))} 
                        />
                        {isAdmin() &&
                            <ItemSettings
                               itemId = {item._id}
                               category= {item.type}
                            />
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default Item;