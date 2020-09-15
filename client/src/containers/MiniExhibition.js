import React from 'react';
import { Link } from 'react-router-dom';
import Exhibition from './Exhibition';
import '../css/containers/mini-exhibition.css';

const MiniExhibition = ({category, className, id})=>{
    return(
        <div style={{position:"relative"}}>
             <Exhibition
                category= {category}
                limit={8}
                id={id}
                className={"home-section"}
            /> 
            <div className={`see-all ${id}-link`}>
                <Link to={`/${id}/`} className="underline-on-hover">
                    All {id}
                </Link>
                
            </div>
        </div> 
    )
}
 export default MiniExhibition;