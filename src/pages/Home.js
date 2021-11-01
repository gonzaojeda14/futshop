import React from 'react';
import Navbar_ from '../components/Navbar.jsx';
import ItemListContainer from '../container/ItemListContainer.js';
import ItemDetailContainer from '../container/ItemDetailContainer.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Nosotros from './Nosotros.js';
import Banner from '../components/Banner.js';

function Home ()  {
    
    return (
        <>
        <BrowserRouter>
       <Navbar_ />
       <Switch>
       <Route path="/camisetas/:catId/:id" component={ItemDetailContainer} />
        <Route exact path="/camisetas/:catId">
       <div className = 'shop'>
       <ItemListContainer />
       </div>
       </Route>
       <Route path="/camisetas">
       <div className = 'shop'>
       <ItemListContainer />
       </div>
       </Route>
       <Route path="/">
       <Banner />
       <Nosotros />
        </Route>
       </Switch>
       </BrowserRouter>
       </>
    )
}

export default Home;
