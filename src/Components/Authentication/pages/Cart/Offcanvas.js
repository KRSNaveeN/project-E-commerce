import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Cart from './Cart';
import Context from '../../../Store/Context';

function Example() {
  const [show, setShow] = useState(false);

  let ctx= useContext(Context);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Cart {ctx.cartTotal}
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart Items</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Cart/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;