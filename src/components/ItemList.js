import React from 'react'
import products from '../products/products.js';
import {Card,
  Button} 
from 'react-bootstrap';


const ItemList = () => {
    return (
      <>
    {products?.map((products) => 

     <div className="id" key={products.id}>
     <Card className="card" style={{ width: '18rem' }} border="info">
    <Card.Img variant="top" src={products.image} />
    <Card.Header><p className="cardTitle">{products.title}</p></Card.Header>
    <Card.Body>
    <Card.Text>
         <p className="cardBrand">{products.brand}</p>
         </Card.Text>
     <Card.Text>
      <p className="cardDesc">{products.description}</p>
      </Card.Text>
     <Button variant="info">Ver más</Button>
     <Card.Text className="price">
      {products.price}
      </Card.Text>
      </Card.Body>
      </Card> 
    </div>
    )}

      </>
    )
}

export default ItemList;