import React from 'react';
import Navbar_ from '../components/Navbar.jsx';
import ItemListContainer from '../container/ItemListContainer.js';

function Home ()  {
    return (
        <>
       <Navbar_ />
       <ItemListContainer 
        image="https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/6d85036726614f5a9b69ab7d014920bf_9366/Camiseta_Titular_Seleccion_Argentina_Blanco_FS6565_01_laydown.jpg"
        title="Camiseta titular Selección Argentina" 
        description="LA CAMISETA ARGENTINA INSPIRADA EN LA UNIÓN Y LA PASIÓN POR EL FÚTBOL, CON TECNOLOGÍA AEROREADY."
        price="$8999"
        />
        
       </>
    )
}

export default Home;
