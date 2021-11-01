import React, { useEffect, useState } from "react"; 
import ItemList from '../components/ItemList.js'
import listOfProducts from '../products/products.js';
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products,setProducts] = useState([]);
  const {catId} = useParams();

  useEffect(() => {
    const promise = new Promise ((resolve, reject) => {
     setTimeout(() => {
       resolve(listOfProducts)
     }, 2000)
     });
  
     promise.then((listOfProducts) => {
      catId ? setProducts(listOfProducts.filter(i => i.category === catId)) :
      setProducts(listOfProducts)
     })
    },
     [catId]
     );
  
  return (
    <>
      <ItemList products={products} />
    </>
  );}


export default ItemListContainer;