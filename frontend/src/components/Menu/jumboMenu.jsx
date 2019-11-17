import React from 'react';
import menu from '../../static/media/menu1.jpg';
import './menu.css';

export class JumboMenu extends React.Component{
    render(){
        return(
            <React.Fragment>
                    <div>
                        <img src = {menu} alt = "brookies menu"/>
                    </div>
            </React.Fragment>
        );
    }
}
export default JumboMenu;