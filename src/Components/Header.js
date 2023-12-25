import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import Example from './Cart/Offcanvas';

const Header = ()=>{
    console.log("header");
    function clickHandler(){

    }
    return <>
    <Container >
    <Row style={{backgroundColor:'black', color:'white' }}>
        <Col xs={4}>
          
        </Col>
        <Col xs={4}>
            <Row>
            <Col>HOME</Col>
            <Col>STORE</Col>
            <Col>ABOUT</Col>
            </Row>
            
        </Col>
        <Col onClick={clickHandler} xs={{ span: 1, offset: 3}}>
            <Example  placement="top" name = "end"/>
        </Col>
    </Row>
    </Container>

     
    </>
}
export default Header;