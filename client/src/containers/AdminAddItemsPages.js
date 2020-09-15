import React from 'react';
import { Button } from '../components/Buttons';
import Header from '../layout/Header';
import FormInput from '../components/FromInput';
import { getFormElements } from '../helpers';
import { useDispatch } from 'react-redux';
import { adminAddNewItem } from '../store/actions/adminManageItemsActions';
import '../css/containers/admin-add-items-page.css';

const AdminAddItemsPage = ()=>{
    const dispatch = useDispatch();

    const hanldeAddCartItems = (e)=>{
        e.preventDefault();
        const itemInfo = getFormElements(e.target, 4);
        dispatch(adminAddNewItem(itemInfo));                        
    }
    return(
        <div className="login-page-wrapper">
        <Header
            login={true}
            signup={true}
            title = "Add new Items"
        />
        {localStorage.getItem("isAdmin")?
        <div className="auth-form-wrapper">
            <form className="signup-form" 
                  onSubmit={hanldeAddCartItems}>
                  <FormInput
                    label = "Image link"
                    type = "text"
                    id = "imgLink"
                    placeholder = "Image link"
                    className = ""
                  />
                  <FormInput
                    label = "Source link"
                    type = "text"
                    id = "source"
                    placeholder = "Source link"
                    className = ""
                  />
                  <FormInput
                    label = "Price"
                    type="number"
                    id = "price"
                    placeholder = "Price"
                    className = ""
                  />
                  <label htmlFor="type"></label>
                  <select name="type" id="type" className="select-options">
                       <option value="">--Please choose an option--</option>
                       <option value="paints">paints</option>
                       <option value="photos">photos</option>
                       <option value="tapestry">tapestry</option>
                       <option value="Embroidery">embroidery</option>
                  </select>     
                  <Button
                      btnText="Add"
                      type="submit"
                      className= "login-submit-btn"
                  />
            </form>
        </div>
        :
        <div>
        You are not authorizied to access this page! Sorry.
        </div>
        }
        </div>
    )
}

export default AdminAddItemsPage;