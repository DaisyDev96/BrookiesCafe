import React from 'react';
import './gallery.css';
import {Link} from 'react-router-dom';
import pic1  from '../../../static/media/6.JPG';
import pic3 from '../../../static/media/4.jpg';
import pic4 from '../../../static/media/3.jpg';
import pic5 from '../../../static/media/5.JPG';
import pic6 from '../../../static/media/1.jpg';
import pic2 from '../../../static/media/2.jpg';
import pic7 from '../../../static/media/7.JPG';
import pic8 from '../../../static/media/8.PNG';
import pic9 from '../../../static/media/10.JPG';

import pic10 from '../../../static/media/11.JPG';
import pic11 from '../../../static/media/14.JPG';
import pic12 from '../../../static/media/15.JPG';

import pic13 from '../../../static/media/16.JPG';
import pic14 from '../../../static/media/17.JPG';
import pic15 from '../../../static/media/18.JPG';
import pic16 from '../../../static/media/32.JPG';
import pic17 from '../../../static/media/29.JPG';
import pic18 from '../../../static/media/27.JPG';
import pic19 from '../../../static/media/3.jpg';




export class Gallery extends React.Component{
    render(){
        return(
            <React.Fragment>

                <section className = "jumboHeader">
                    <h3> Contact us for your Catering Needs</h3>
                    <Link  to = "/menu">   Click Here to view our Menu  </Link >
                </section>
                <section className = "jumboGallery">
                        <section className ="galleyPics">
                        <img src = {pic1}  className ="galleryFlex" alt = "lamb loaded potatoes baked macaroni and cheese shrimp alfredo egg roles house lemonade double battered tenders black owned 2 location coming soon steak hamburgers  "/>
                        <img src = {pic2}  className ="galleryFlex" alt = "lamb loaded potatoes baked macaroni and cheese shrimp alfredo egg roles house lemonade double battered tenders black owned 2 location coming soon steak hamburgers  "/>
                        <img src = {pic3}  className ="galleryFlex" alt = "lamb loaded potatoes baked macaroni and cheese shrimp alfredo egg roles house lemonade double battered tenders black owned 2 location coming soon steak hamburgers  "/>
                        <img src = {pic6}  className ="galleryFlex" alt = "lamb loaded potatoes baked macaroni and cheese shrimp alfredo egg roles house lemonade double battered tenders black owned 2 location coming soon steak hamburgers  "/>
                        <img src = {pic4}  className ="galleryFlex" alt = "lamb loaded potatoes baked macaroni and cheese shrimp alfredo egg roles house lemonade double battered tenders black owned 2 location coming soon steak hamburgers  "/>
                        <img src = {pic5}  className ="galleryFlex" alt = "lamb loaded potatoes baked macaroni and cheese shrimp alfredo egg roles house lemonade double battered tenders black owned 2 location coming soon steak hamburgers  "/>
                        <img src = {pic7} className ="galleryFlex"/>
                        <img src = {pic8} className ="galleryFlex"/>
                        <img src = {pic9} className ="galleryFlex"/>
                        <img src = {pic10} className ="galleryFlex"/>
                        <img src = {pic11} className ="galleryFlex"/>
                        <img src = {pic12} className ="galleryFlex"/>
                        <img src ={pic13} className ="galleryFlex"/>
                        <img src = {pic14} className ="galleryFlex"/>
                        <img src ={pic15} className ="galleryFlex"/>
                        <img src ={pic16} className ="galleryFlex"/>
                        <img src = {pic12} className ="galleryFlex"/>
                        <img src ={pic17} className ="galleryFlex"/>
                        <img src ={pic18} className ="galleryFlex"/>
                        <img src = {pic19} className ="galleryFlex"/>
                    </section>
                </section>
            </React.Fragment>
        );
    }
}
export default Gallery;