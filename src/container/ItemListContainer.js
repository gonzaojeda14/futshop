import React, { useEffect, useState } from "react"; 
import ItemList from '../components/ItemList.js'
import listOfProducts from '../products/products.js';


const ItemListContainer = () => {
  const [products,setProducts] = useState([]);

  useEffect(() => {
    const promise = new Promise ((resolve, reject) => {
     setTimeout(() => {
       resolve(listOfProducts)
     }, 2000)
     });
  
     promise.then((listOfProducts) => {
       setProducts(listOfProducts)
     })
    },
     []
     );
  
  return (
    <>
  <ItemList products={products}/>

   </>
  )}


export default ItemListContainer;