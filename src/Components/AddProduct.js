import React from 'react'
import { useState } from 'react';
const AddProduct = (props) => {
    const {products,setProducts}=props
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
        <div><form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <label htmlFor="price">Price:</label>
            <input
                type="number"
                id="price"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
            />
            <label htmlFor="url">Image URL:</label>
            <input
                type="text"
                id="url"
                value={url}
                onChange={(event) => setUrl(event.target.value)}
            />
            <button type="submit">Add Product</button>
        </form></div>
    )
}

export default AddProduct