import React from 'react';
import Dummydata from './Authentication/pages/Cart/dummydata';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useContext, useEffect, useState } from 'react';
import Context from './Store/Context';
import  {Link } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import Example from './Authentication/pages/Cart/Offcanvas';
import classes from './List.module.css';
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
  <>
  <div className ={classes.cart}>
    <Example/>
  </div>
  <Container >
        <Row  >
        {Dummydata.map((item)=>{
          let url = `/auth/store/productdetail/${item.title}`;
        return <Col key={Math.random()} xs={{ span: 4, offset: 2}} style={{ marginBottom: '35px' }}>
          
           <h5>{item.title}</h5>
           <Link to={url}>
           <div><img style={{width:'185px', marginBottom: '15px', borderRadius:'10px' }} src={item.imageUrl} alt=""/></div>
            </Link>
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
  </>
   
  );
}

export default React.memo(List);