import { useState } from "react";
import { Grid, TextField } from "@material-ui/core";
import Button from '@mui/material/Button';

const AddProduct = ({ products, setProducts }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [url, setUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = { name, price, url, id: products.length + 1 };
    setProducts([...products, newProduct]);
    setName("");
    setPrice(0);
    setUrl("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="name"
              label="Name"
              fullWidth
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="price"
              label="Price"
              fullWidth
              type="number"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="url"
              label="Image URL"
              fullWidth
              value={url}
              onChange={(event) => setUrl(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" type="submit" fullWidth size="small">
              Add Product
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddProduct;
