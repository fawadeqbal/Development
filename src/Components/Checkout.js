import React, { useState } from 'react';
import { Button, TextField, CircularProgress } from '@material-ui/core';

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
      <form onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="City"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="State"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Zip"
          name="zip"
          value={formData.zip}
          onChange={handleInputChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Total"
          name="total"
          value={total}
          InputProps={{
            readOnly: true,
          }}
          fullWidth
          margin="normal"
        />
        <div className="d-flex justify-content-center">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
            startIcon={loading ? <CircularProgress size={20} /> : null}
          >
            {loading ? 'Placing Order' : 'Place Order'}
          </Button>
        </div>
      </form>
      <style jsx>{`
        .checkout {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 24px;
        }
        h2 {
          margin-bottom: 24px;
        }
        form {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 600px;
        }
        .d-flex {
          display: flex;
        }
        .justify-content-center {
          justify-content: center;
        }
      `}</style>
    </div>
  );
}

export default Checkout;
