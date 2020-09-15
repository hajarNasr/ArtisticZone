import React from 'react';
import { useDbItems } from '../custom-hooks/CustomHooks';
import { useSelector } from 'react-redux';
import Header from '../layout/Header';
import Item from '../components/Item';
import Spinner from '../components/Spinner';
import '../css/containers/exhibition.css'

const Exhibition = ({category, className, limit, id})=>{
    let itemsList = useDbItems(category, limit);
    let {loading} = useSelector(state=>state.dbItemsReducer)
    return(
        <div className={`m-left-10 ${className}`} id={id}>
          {!limit &&
                <Header
                    signupBtn = {true}
                    loginBtn = {true}
                    title = {id}
                />
            }
            {loading? 
               <Spinner/>
               :
                <div className="items-list-wrapper"> 
                   {console.log(itemsList)}
                   {itemsList &&
                        itemsList.map(item=>
                            <Item
                                key = {item._id} 
                                item={item}
                            />
                        )} 
                </div> 
            }     
        </div>
    )
}

export default Exhibition;