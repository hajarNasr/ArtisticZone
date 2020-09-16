import React, { useState } from 'react';
import LazyLoad from 'react-lazy-load';
import ImageSpinner from './ImageSpinner';

const LazyLoadImage = ({imgLink})=>{
    let [loading, setLoading] = useState(true);
    return(
    <div>
        <LazyLoad>
            <img
                loading="lazy"
                src= {imgLink}
                className="item-img"
                onLoad = {()=>setLoading(false)}
            />
        </LazyLoad> 
        <div className="lazy-image-wrapper">
           {loading && <ImageSpinner/>}
        </div>
     </div>
    )
}

export default LazyLoadImage;