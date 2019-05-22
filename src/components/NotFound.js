import React from 'react';
import './Header.css'

const NotFound = () => {

return(
    <div className="NF">
    <div><p className="NF-head"><strong>Sorry, this page isn't available.</strong></p></div>
    <div><p className="NF-body">The link you followed may be broken, or the page may have been removed. <a href="/login">Try Login</a></p></div>
    
    </div>
);

}

export default NotFound;