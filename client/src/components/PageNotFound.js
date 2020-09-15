import React from 'react';
import Header from '../layout/Header';
import "../css/components/page-not-found.css";

const PageNotFound = ()=>{
    return(
        <div className="page-not-found">
             <Header
                signupBtn={true}
                loginBtn={true}
                title="404 Error"
             />
             <div className="class404">
                <div>404 ERROR</div>
                <div>Page Not Found</div>
             </div>
        </div>
    )
}

export default PageNotFound;