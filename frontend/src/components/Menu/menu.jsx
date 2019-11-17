import React from 'react';
import menu from '../../static/media/menu1.jpg'
import './menu.css';
import {Link} from 'react-router-dom';
export class Menu extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className = "menuHeader">
                    <Link  to = "/menuJumbo">   <h2> Download our menu here or scroll below </h2> </Link >
                </div>
                <div className = "brookiesMenu">
                    <div className = "secondLoc">
                    </div>

                    <div>
                        <img src = {menu} alt = "brookies menu"/>
                    </div>
                        
                    <div className = "applePay">

                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Menu;