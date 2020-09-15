import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '../components/Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/actions/authActions';
import { isAuthenticated, isAdmin, getCartCount } from '../helpers';
import { FaShoppingCart, LogoutIcon, PlusIcon } from '../components/FaIcons';
import '../css/components/header-auth.css'

const HeaderAuth = ({loginBtn, signupBtn})=>{
    const history = useHistory();
    const dispatch = useDispatch();
    let { cartItemsCount } = useSelector(state=>state.dbItemsReducer);
    return(
        <div className="header-auth">
            {!isAuthenticated()?
                <div className=" header-auth-btns">
                    {loginBtn &&
                    <Link
                        to="/login/"
                        >
                    <Button
                        btnText="Login"
                        className="header__login"
                        />
                    </Link>
                    }
                    {signupBtn &&
                        <Link
                            className="txt-d-none"
                            to="/signup/">
                            <div className="header__signup">
                                <div>Sign</div>
                                <div>up</div>
                            </div>
                        </Link> 
                    }
                </div>
                :
                <div className="header-auth-shopping-cart-wrapper">
                  <Link to="/shopping-cart/" style={{position:"relative"}}>
                   <span className="items-count">
                   <strong>
                   {cartItemsCount || getCartCount()}
                   </strong></span>
                      <FaShoppingCart/> 
                  </Link>
                  {isAdmin() &&
                   <Link to="/admin/add/items/" 
                     title="Add new items">
                      <PlusIcon/>
                   </Link>
                  }
                  <button
                     onClick={()=>dispatch(logout(history))}
                     className="logout-btn"
                   >
                      Log out <LogoutIcon/>
                  </button>
                 
                </div>
                }
        </div> 
    )
}
export default HeaderAuth;