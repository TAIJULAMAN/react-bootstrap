import React from 'react';

// import Card from '../Card/Card'
import { CardGroup } from 'react-bootstrap';
import Card2 from '../Card/Card';

const Cardgroup = () => {
  const Products =[
    {id:1,name:'laptop',price:1000},
    {id:2,name:'tab',price:2000},
    {id:3,name:'mobile',price:3000},

  ]
  return (
   <CardGroup>
    {Products.map(product=><Card2
     product={product}
     key={product.id}
     ></Card2>)}
   </CardGroup>
  );
};

export default Cardgroup;