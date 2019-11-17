import React from 'react';
import { Link } from "react-router-dom";
import './navbar.css'

export class Navbar extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className = "navBar">
                    <div className = "navBarLogo">
                        <p> Brookies Cafe</p>

                    </div>

                <ul>
                    <Link className = "link" to = "/menu" >    <li> Menu    </li>  </Link >           
                    <Link  className = "link" to = "/gallery">  <li> Gallery </li>  </Link >
                    <Link  className = "link" to = "/" >        <li> HOME    </li>  </Link >
                
                </ul>
                </div>
                
            </React.Fragment>
        );
    }
}
export default Navbar;