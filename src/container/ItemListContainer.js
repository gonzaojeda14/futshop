import React, { useEffect, useState } from "react"; 
import ItemList from '../components/ItemList.js'
//import products from '../products/products.js';


const ItemListContainer = (id,image,title,brand,description,price) => {
  const [products,setProducts] = useState();
  useEffect(() => {
    const promise = new Promise ((resolve, reject) => {
     setTimeout(() => {
       resolve(products)
     }, 2000)
     });
  
     promise.then((result) => {
       setProducts(result)
     })
    },
     []
     );
  
  return (
    <>
  <ItemList
        id={id}
        image={image}
        title={title} 
        brand={brand}
        description={description}
        price={price}
   />

   </>
  )}


export default ItemListContainer;