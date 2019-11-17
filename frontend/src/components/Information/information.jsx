import React from 'react';
import './information.css';
import storeFront from '../../static/media/brookiesStorefront.jpeg';


export class Information extends React.Component{
    render(){
        return(
            <React.Fragment>
                <section className = "infoContainer ">
                    <section className = "location  flexBox">
                        <div class="circular-sb  ">
                                            Where are we Located?
                            <div class="circle1 "></div>
                            <div class="circle2 "></div>
                        </div>
                        <div class="bMaps ">
                            <h3> 1785 Washtenaw Ave Ypsilanti, MI 48197</h3>
                            <p> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2953.455297479031!2d-83.6436115846269!3d42.24744867919465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883ca8fa0dd5b5ad%3A0x286555e53ef65568!2sBrookie&#39;s%20Cafe!5e0!3m2!1sen!2sus!4v1567703711327!5m2!1sen!2sus "
                                    allowfullscreen=" "></iframe></p>
                        </div>
                    </section>

                    <section className = "moreInfo flexBox"> 
                        <div className = "serviceHours ">
                            <table>
                                <tr>
                                    <th colspan="2 "> Hours of operation</th>
                                </tr>
                                <tr>
                                    <td> Sunday </td>
                                    <td> 12-5 pm</td>
                                </tr>
                                <tr>
                                    <td> Monday </td>
                                    <td> 11am - 9pm </td>
                                </tr>
                                <tr>
                                    <td> Tuesday </td>
                                    <td> 11am - 9pm </td>
                                </tr>
                                <tr>
                                    <td>Wednesday</td>
                                    <td> 11am - 9pm </td>
                                </tr>
                                <tr>
                                    <td> Thursday </td>
                                    <td> 11am - 9pm </td>
                                </tr>
                                <tr>
                                    <td> Friday </td>
                                    <td> 11am - 10pm </td>
                                </tr>
                                <tr>
                                    <td> Saturday </td>
                                    <td> 11am - 10pm </td>
                                </tr>
                            </table>
                        </div>
                        <div className = "newLoco"> 
                            <h2>Detroit Location Coming soon !</h2>
                            <img src ={storeFront}/>
                        </div>
        
                    </section>
                </section>
            </React.Fragment>
        );
    }
}
export default Information;