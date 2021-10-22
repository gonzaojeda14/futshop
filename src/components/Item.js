import React from 'react';
import {Card,
    Button} 
from 'react-bootstrap';

const Item = ({id, image, title, brand, description, price}) => {
    return (
        <div className="id" key={id}>
        <Card className="card" style={{ width: '18rem' }} border="info">
       <Card.Img variant="top" src={image} />
       <Card.Header className="divTitle"><p className="cardTitle">{title}</p></Card.Header>
       <Card.Body>
       <Card.Text >
         <p className="cardBrand">{brand}</p>
         </Card.Text>
        <Card.Text>
         <p className="cardDesc">{description}</p>
         </Card.Text>
        <Button variant="info">Ver más</Button>
        <Card.Text className="price">
         {price}
         </Card.Text>
         </Card.Body>
         </Card> 
       </div>
        
    )
}

export default Item;
