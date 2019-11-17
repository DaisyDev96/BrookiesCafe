import React from 'react';
import './miniGallery.css';
import pic1 from  "../../../static/media/10.JPG";
import pic2 from  "../../../static/media/7.JPG";
import pic3 from  "../../../static/media/19.jpg";
import pic4 from  "../../../static/media/3.jpg";
import { Link } from "react-router-dom";
export class MiniGallery extends React.Component{
    render(){
        return(
            <React.Fragment>
                    <section className = "miniGallery">
                        <h3> A few of the Fan Favs </h3>
                        <h3> Contact us for your Catering Needs</h3>
                        <Link  to = "/gallery">   Click Here to view our Gallery   </Link >
                        <div className = "imgCarousel">
                            <img  className = "flexPiccMini" src = {pic1}  alt = " brocoli,  mac and cheese, lambchops "/>
                            <img  className = "flexPiccMini" src = {pic2} alt = "loaded potatoes" />
                            <img  className = "flexPiccMini" src = {pic3}  alt ="salmon"/>
                            <img  className = "flexPiccMini" src = {pic4}  alt = " sea food alfedo"/>
                        </div> 
                    </section>
            </React.Fragment>
        );

    }

}

export default MiniGallery;