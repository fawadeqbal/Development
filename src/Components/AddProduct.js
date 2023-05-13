import { useState } from "react";
import { TextField } from "@material-ui/core";
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
    <div  >
      <div>
        <h1 className="text-center my-5">Add Product</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="name"
          label="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          id="price"
          label="Price"
          type="number"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <TextField
          id="url"
          label="Image URL"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
        />
        <Button variant="contained" type="submit">
          Add Product
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;
