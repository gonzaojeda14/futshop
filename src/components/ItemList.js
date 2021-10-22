import React from 'react'
import Item from './Item.js'

const ItemList = ({products}) => {
    return (
      <>
    {products?.map((producto) => 
 
    <Item key={producto.id} 
          image={producto.image}
          title={producto.title} 
          brand={producto.brand} 
          description={producto.description} 
          price={producto.price} />
    )}

      </>
    )
}

export default ItemList;