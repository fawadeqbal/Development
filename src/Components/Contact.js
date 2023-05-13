import React, { useState } from "react";
import { Button, Container, TextField, Typography, CircularProgress, Grid } from "@mui/material";
import './css/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    // Call your API or do some other logic here...
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 2000);
  };

  return (
    <Container className="contact">
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>
        Have a question or comment? We'd love to hear from you!
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <form onSubmit={handleSubmit}>
            <TextField
              id="name"
              name="name"
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <TextField
              id="email"
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <TextField
              id="message"
              name="message"
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              margin="normal"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
            <div className="submit">
              <Button variant="contained" color="primary" type="submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <CircularProgress size={24} /> Sending...
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </div>
            {isSubmitted && (
              <div className="mt-3">
                <Typography variant="body1" align="center" className="text-success">
                  Thanks for your message!
                </Typography>
              </div>
            )}
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
