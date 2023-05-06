import React from 'react';
import { Button, Table, Alert } from 'react-bootstrap';

function Cart(props) {
  const { cartItems, totalBill, clearCart, incrQuan, decrQuan, handleCheckout,removeItem } = props;
  

  const renderCartContent = () => {
    if (cartItems.length === 0) {
      return (
        <Alert variant="info">
          Your cart is empty. <a href="/">Shop now</a>
        </Alert>
      );
    }

    return (
      <>
        <Table striped bordered hover>
          <thead>
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
                <td>{item.price}</td>
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
                  <Button onClick={() => removeItem(item)} variant="danger">
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3">
                <Button onClick={clearCart} variant="warning">
                  Clear Cart
                </Button>
              </td>
              <td colSpan="3" className="text-right">
                Total: {totalBill}
              </td>
            </tr>
          </tfoot>
        </Table>
        <div className="d-flex justify-content-end">
          <Button onClick={handleCheckout} variant="success">
            Checkout
          </Button>
        </div>
      </>
    );
  };

  return <div className="cart">{renderCartContent()}</div>;
}

export default Cart;
