import React from 'react';
import { useDispatch } from 'react-redux';
import { clearToasterAction } from '../store/actions/dbItemsActions';
import '../css/components/toaster.css';

const Toaster = ({msg})=>{
    const dispacth = useDispatch();
    setTimeout(()=>{
       dispacth(clearToasterAction())
    },2100) 
    return(
        <div className="toaster-wrapper">
           {msg}
        </div>
    )
}
export default Toaster;