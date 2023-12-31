import React from 'react';
import Dummydata from './Authentication/Cart/dummydata';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useContext, useEffect, useState } from 'react';
import Context from './Store/Context';
import  {Link } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import Example from './Authentication/Cart/Offcanvas';
import classes from './List.module.css';


function List() {

let ctx = useContext(Context);

 return (
  <div style={{backgroundColor : 'burlywood'}}>
  
  <section className={classes.sec}>
    <div>The Generics

    <div className ={classes.cart}>
    <Example/>
  </div>
    </div>
    
  </section>

  <div className={classes.style}>
  <Container >
        <Row  >
        {Dummydata.map((item)=>{
          let url = `/auth/store/productdetail/${item.title}`;
        return <Col key={Math.random()} xs={{ span: 6}} style={{ marginBottom: '35px' }} className={classes.col}>
          
           <h5>{item.title}</h5>
           <Link to={url}>
           <div><img style={{width:'200px', marginBottom: '15px', borderRadius:'10px' }} src={item.imageUrl} alt=""/></div>
            </Link>
           <div>
           <Row >
           <Col xs={6}> price : ${item.price}</Col>
           <Col > <Button xs={3} onClick={()=> ctx.addtoCart(item)}>Add to Cart</Button></Col>
          
           </Row>
           </div>
          
        </Col>
        
        
      })}
        </Row>
     
     <Button style={{margin:'auto', display:'flex'}}>See the Cart </Button>
    </Container>
  </div>
  <footer className={classes.foot}>
    <div>
      <h4>Get Updates</h4>
       <p>Join the Community</p>
    </div>
    <div>
      <h4>Follow Us</h4>
      <div></div>
    </div>
  </footer>
  
  </div>
   
  );
}

export default React.memo(List);