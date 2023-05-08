import React, { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';

function Checkout(props) {
  const { total } = props;

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    // Perform checkout logic here
    setTimeout(() => {
      setLoading(false);
     
    }, 2000);
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" name="address" value={formData.address} onChange={handleInputChange} required />
        </Form.Group>
        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" name="city" value={formData.city} onChange={handleInputChange} required />
        </Form.Group>
        <Form.Group controlId="state">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" name="state" value={formData.state} onChange={handleInputChange} required />
        </Form.Group>
        <Form.Group controlId="zip">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" name="zip" value={formData.zip} onChange={handleInputChange} required />
        </Form.Group>
        <Form.Group controlId="total">
          <Form.Label>Total</Form.Label>
          <Form.Control type="text" name="total" value={total} readOnly />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button type="submit" variant="success" disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" /> : 'Place Order'}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Checkout;
