import React, { useEffect, useState } from "react"; 
import ItemList from '../components/ItemList.js'
import data from '../products/products.js';
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products,setProducts] = useState([]);
  const [loader,setLoader] = useState(true);
  const { catId } = useParams();

  useEffect(() => {
    setLoader(true);
    const promise = new Promise ((resolve, reject) => {
     setTimeout(() => {
       resolve(data)
     }, 2000)
     });
  
     promise.then((res) => {
      catId ? setProducts(res.filter(i => i.category === catId)) :
      setProducts(data)
     })
     .finally(() => setLoader(false));
    },
     [catId]
     );
  
  return ( loader ? (
   <body className="bodyLoading">
    <div className="mt-40 py-2 px-2 bg-black rounded-sm divLoading">
      <p text-3xl  className="mt-2 text-white text-xl"> Cargando página... </p>
     </div>
     </body>
  ) :  (
  



    <>
      <ItemList data={products} />
    </>
  ));}


export default ItemListContainer;