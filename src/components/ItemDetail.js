import React from 'react';
import {Container,Row,Col} from 'reactstrap';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import features from '../features/features.js';


export const ItemDetail = ({id, image, image_2, title, brand, title_2, background, description, information, price, price_2}) => {
  
  const feature = features.filter(feature => feature.code === id);

  const featureDesc = feature.map((list) => 
        {return (list.description)});

  const featureDesc2 = feature.map((list) => 
        {return (list.description_2)});

  const featureDesc3 = feature.map((list) => 
        {return (list.description_3)});

  const featureDesc4 = feature.map((list) => 
        {return (list.description_4)});

  const featureDesc5 = feature.map((list) => 
        {return (list.description_5)});

  const featureDesc6 = feature.map((list) => 
        {return (list.description_6)});

   return (
      <Container key={id}>
        <Row >
          <Col className="flex flex-row justify-start">
          <p className="sm:text-base mt-10 mb-0">{brand}</p>
          </Col>
        </Row>
      <Container className="flex flex-col pb-4 bg-gray-100 rounded-sm" fluid>
        <Row>
        <Col>
      <div className="mt-4">
        <img className="rounded" src={image} alt={image}/></div>
        </Col>
        <Col className="sm:flex flex-wrap md:block">
        <Row className="md: mb-8 pt-8">
        <div><h1 className=" sm:text-base md:text-2xl tituloDet">
        {title}
        </h1> 
        </div>
        </Row>
         <Row className="pt-6 flex flex-nowrap w-16">
           <span className="mr-2"> <h2 className="text-2xl sm:text-base md:text-2xl precioDet">${price}</h2></span>
        <span><h3 className="mt-1 mb-0 text-gray-500 line-through sm:text-xs md:text-base" >${(price*1.2).toFixed(0)}</h3> </span>
      </Row>
      <Row className="mb-10 pt-0 flex flex-row justify-center flex-nowrap rowOferta">
           <span className="ml-6 bg-red-700 rounded-sm text-white"> <p className="text-2xl sm:text-xs md:text-sm precioDet">20% OFF</p></span>
      </Row>
      <Row className="mt-20 border-t-2 border-b-2">
        <div> <p className= "sm:text-base md:text-base "> Talles </p> </div>
      <FormControl component="fieldset">
  <RadioGroup className="ml-2" row aria-label="gender" name="row-radio-buttons-group">
    <FormControlLabel value="S" control={<Radio />} label="S" />
    <FormControlLabel value="M" control={<Radio />} label="M" />
    <FormControlLabel value="L" control={<Radio />} label="L" />
    <FormControlLabel value="XL" control={<Radio />} label="XL" />
    <FormControlLabel value="XXL" control={<Radio />} label="XXL" />
  </RadioGroup>
</FormControl>
</Row>
<Row className="pt-10 flex flex-row justify-center xl:pt-20 ">
      <Button  variant="text" className="bg-black text-white"> Agregar al carrito  
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
</svg></Button>
      </Row>
      </Col>
      </Row>
      </Container>
      <Container >
      <div className="bg-white">
      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{title_2}</h2>
          <p className="mt-4 text-gray-500">
            {information}
          </p>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dd className="mt-2 text-sm text-gray-500">{featureDesc}</dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dd className="mt-2 text-sm text-gray-500">{featureDesc2}</dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dd className="mt-2 text-sm text-gray-500">{featureDesc3}</dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dd className="mt-2 text-sm text-gray-500">{featureDesc4}</dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dd className="mt-2 text-sm text-gray-500">{featureDesc5}</dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dd className="mt-2 text-sm text-gray-500">{featureDesc6}</dd>
              </div>
          </dl>
        </div>
        <div className="grid grid-cols-1 grid-rows-1">
          <img 
            src={image_2}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="bg-gray-100 rounded-lg"
          />
        </div>
      </div>
    </div>
    </Container>
      </Container>
    )
  }

export default ItemDetail;