import React from "react";
import { SocialIcon } from 'react-social-icons';
import "./footerNav.css"

export class FooterNav extends React.Component{
    render(){
        return(
            <React.Fragment >
                <section className = "footerNav">
                    <h1 >
                        FOLLOW US ON SOCIAL MEDIA
                    </h1>

                    <div className = "socialButtonsContainer">
                        
                        <SocialIcon className ="socialMediaButton"  url="http://twitter.com" />
                        <SocialIcon className ="socialMediaButton" url ="https://www.facebook.com/brookiescafe/"/>
                        <SocialIcon className ="socialMediaButton" url ="https://www.instagram.com/brookiescafe/"/>
                    </div>
                    <h3>
                        &#169; 2019 BROOKIES CAFE. Built by MiBase, LLP
                    </h3>

                </section> 
            </React.Fragment>
        );
    }
}
export  default FooterNav;