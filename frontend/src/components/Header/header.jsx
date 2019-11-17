import React from 'react';
import './header.css';
export class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <section className = "homePageHeader">
                    <div  className ="flex-item">
                        <h3> We Deliver ! </h3>
                        <a href="https://www.grubhub.com/restaurant/brookies-cafe-1785-washtenaw-ave-ypsilanti/362863?utm_source=google&utm_medium=organic&utm_campaign=place-action-link" target="blank"> Grubhub</a>
                        <br/>
                        <a href="https://www.doordash.com/store/brookie-s-cafe-ypsilanti-238484/?utm_campaign=gpa" target="blank"> Doordash</a>

                    </div>

                    <div className ="title">
                        <h1> Brookies Cafe </h1>
                        <h3>Call us to order today : (734) 773-7070</h3>
                        <h2> A Community Restaurant</h2>
                    </div>

                    <div className ="flex-item">
                        <h4>Fresh HomeMade Pudding </h4>
                        <h4>Baked Macaroni and Cheese : Made fresh every day! </h4>
                        <h4>Black Owned </h4>
                        <h4> House Lemonade </h4>
                        <h4> Lamb Chops </h4>
                        <h4> Sea Food Dinners and Much MORE </h4>
                    </div>


                </section>
            </React.Fragment>
        );

    }

}