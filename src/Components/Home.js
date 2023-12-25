import Row from "react-bootstrap/esm/Row";
import Dummydata from "./Dummydata";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
const Home = () =>{
    return <>
    {
        Dummydata.map((item)=>{
           return <Container style={{borderBottom: "1px solid black", maxWidth:'600px',margin:'15px auto'}}>
            <Row  >
                <Col>{item.date}</Col>
                <Col>{(item.city).toUpperCase()}</Col>
                <Col>{item.place}</Col>
                <Col><Button size="sm" variant="info">BUY TICKETS</Button></Col>
                
            </Row>
            </Container>
        })
    }
    </>
    
    
}

export default Home;