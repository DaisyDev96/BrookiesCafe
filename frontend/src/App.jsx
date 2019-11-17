import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar/navbar';
import {Home} from './components/Home/homePage';
import {Gallery} from './components/Gallery/jumboGallery/gallery';
import {Menu} from './components/Menu/menu';
import { BrowserRouter , Route, Switch } from "react-router-dom";
import {FooterNav } from "./components/FooterNav/footNav";
import {JumboMenu }from "./components/Menu/jumboMenu";


function App() {
  return (
    <React.Fragment>
      <section  >
        <BrowserRouter> 
          <Navbar/>
          <body className = "appBody">
            <Switch>
              <Route path = "/" exact component = { Home }/>
              <Route path = "/gallery" exact component = {Gallery}/>
              <Route path = "/menu" exact component = {Menu}/>
              <Route path = "/menuJumbo" exact component = {JumboMenu}/>
            </Switch>
          </body>
          <footer>
              <FooterNav/>
          </footer>
            
        </BrowserRouter>
        </section>
    </React.Fragment>
  );
}

export default App;

