import React from 'react'
import Item from './Item.js'

const ItemList = ({data}) => {

    return (
      <>
    {data?.map((producto) => 
    <Item id={producto.id} 
          category={producto.category} 
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