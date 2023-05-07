import React from 'react';
import { Button, Table } from 'react-bootstrap';
import Alert from '@mui/material/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


function Cart(props) {
  const { cartItems, totalBill, clearCart, incrQuan, decrQuan, handleCheckout, removeItem } = props;

  const renderCartContent = () => {
    if (cartItems.length === 0) {
      return (

        <Alert severity="info">
          Your cart is empty.
        </Alert>
      );
    }

    return (
      <div className='cart'>

        <Table striped bordered hover>

          <thead>
            <td><h2 style={{ color: 'black', justifyContent: 'center' }}>Cart</h2></td>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{`${item.price}`}</td>
                <td>
                  <Button onClick={() => decrQuan(item)} variant="primary" disabled={item.quantity === 1}>
                    -
                  </Button>
                  &nbsp;{item.quantity}&nbsp;
                  <Button onClick={() => incrQuan(item)} variant="primary">
                    +
                  </Button>
                </td>
                <td>{item.price * item.quantity}</td>
                <td>
                <FontAwesomeIcon onClick={()=> removeItem(item)} icon={faTrashAlt} size="2xl" style={{cursor:'pointer',backgroundColor:'rbg(30,48,80)'}}/>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2">
                <Button onClick={clearCart} variant="warning">
                  Clear Cart
                </Button>
              </td>
              <td colSpan="4" className="text-right">
                Total: {totalBill}
              </td>
            </tr>
          </tfoot>
        </Table>
        <div className="d-flex justify-content-center">
          <Button onClick={handleCheckout} variant="success">
            Checkout
          </Button>
        </div>

      </div>
    );
  };

  return <div className="cart">{renderCartContent()}</div>;
}

export default Cart;
