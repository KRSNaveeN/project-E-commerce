import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import Example from '../Components/Authentication/Cart/Offcanvas';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css'

const Header = ()=>{
    console.log("header");
    
    return <>
    <Container >
    <Row style={{backgroundColor:'black', color:'white' }}>
        <Col xs={3}>
          
        </Col>
        <Col xs={5}>
            <Row>
            <Col><NavLink to='/auth/store/home'>HOME</NavLink></Col>
            <Col><NavLink to ="/auth" >STORE</NavLink></Col>
            <Col><NavLink to='/auth/store/about' >ABOUT</NavLink></Col>
            <Col><NavLink to ='/auth/store/contact'>CONTACT</NavLink></Col>
            </Row>
            
        </Col>
        <Col  xs={{ span: 1, offset: 3}}>
            <Example  placement="top" name = "end"/>
        </Col>
    </Row>
    <Row>
        THE GENERICS
    </Row>
    </Container>

     
    </>
}
export default Header;