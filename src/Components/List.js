import React from 'react';
import Dummydata from './Cart/dummydata';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useContext, useEffect, useState } from 'react';
import Context from './Store/Context';

let array = [{

    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
    count : 0
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 2,
    count: 0
    
    },{

        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity: 2,
        count : 0
        
        },
        
        {
        
        title: 'Blue Color',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        quantity: 2,
        count : 0
        
        }
        
        ]

function List() {

let ctx = useContext(Context);

 return (
    <Container >
        <Row  >
        {Dummydata.map((item)=>{
        return <Col key={Math.random()} xs={{ span: 4, offset: 2}} style={{ marginBottom: '35px' }}>
           <h5>{item.title}</h5>
           <div><img style={{width:'170px', marginBottom: '15px' }} src={item.imageUrl} alt=""/></div>
           <div>
           <Row >
           <Col xs={3}>${item.price}</Col>
           <Col > <Button xs={6} onClick={()=> ctx.addtoCart(item)}>Add to Cart</Button></Col>
          
           </Row>
           </div>
         
        </Col>
      })}
        </Row>
     
     <Button style={{margin:'auto', display:'flex'}}>See the Cart</Button>
    </Container>
  );
}

export default React.memo(List);