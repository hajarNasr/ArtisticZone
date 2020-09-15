import React from 'react';
import { Link } from 'react-router-dom';
import '../css/layout/sidebar.css';

const Sidebar = ()=>{
    return(
        <aside className="aside-wrapper">
            <Link to="/">
               <div className="logo">
                    <span className="artistic">Artistic </span> 
                    <span className="zone">Zone</span> 
               </div>
            </Link>
        </aside>
    )
}
export default Sidebar;

