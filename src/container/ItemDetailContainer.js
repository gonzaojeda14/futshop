import React, { useEffect, useState } from "react"; 
import ItemDetail from '../components/ItemDetail.js'
import data from '../products/products.js';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item,setItem] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    const promise = new Promise ((resolve, reject) => {
     setTimeout(() => {
       resolve(data)
     }, 1000)
     });
  
     promise.then((res) => {
        setItem(res.find((i) => i.id === id))
     })
    },
     [id]
     );
  
  return (
    <>
      <ItemDetail {...item} />
    </>
  );}


export default ItemDetailContainer;