import React from 'react';
import {Header} from '../Header/header';
import {MiniGallery } from '../Gallery/miniGallery/miniGallery';
import {Information} from "../Information/information";

export class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Header/>
                <MiniGallery/>
                <Information/>
            </React.Fragment>
        );

    }

}
export default Home;