import React from 'react';
import {Card,
        Button} 
  from 'react-bootstrap';

const ItemListContainer = ({image,title,description,price}) => {
    return (
        <div>
           <Card className="card" style={{ width: '18rem' }} border="info">
          <Card.Img variant="top" src={image} />
          <Card.Header><p className="cardTitle">{title}</p></Card.Header>
          <Card.Body>
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

export default ItemListContainer;