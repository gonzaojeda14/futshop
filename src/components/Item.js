import React from 'react';
import {Card,
    Button} 
from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Item = ({ category, id, image, title, brand, description, price}) => {

    console.log({id});

    return (
        <div className="id mb-20" key={id}>
        <Card className="card" style={{ width: '18rem' }} border="info">
       <Card.Img variant="top" src={image} alt={image}/>
       <Card.Header className="divTitle"><p className="cardTitle">{title}</p></Card.Header>
       <Card.Body>
       <Card.Text >
         <p className="cardBrand">{brand}</p>
         </Card.Text>
        <Card.Text>
         <p className="cardDesc">{description}</p>
         </Card.Text>
        <Button variant="info">
            <Link className="no-underline text-black" to={`/camisetas/${category}/${id}`}>
              Ver más
              </Link>
           </Button>
        <Card.Text className="price">
         ${price}
         </Card.Text>
         </Card.Body>
         </Card> 
       </div>
        
    )
}

export default Item;
