import React from 'react';
import Navbar_ from '../components/Navbar.jsx';
import ItemListContainer from '../container/ItemListContainer.js';

function Home ()  {
    
    return (
        <>
       <Navbar_ />
       <div className = 'shop'>
       <ItemListContainer />
       </div>
       </>
    )
}

export default Home;
