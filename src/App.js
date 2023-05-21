import './CSS/App.css';
import About from './Components/About';
import Products from './Components/Products'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Contact from './Components/Contact'
import SignIn from './Components/SignIn';
import SignUp from './Components/SingUp';
import data from './data/products.json'
import { useState, useMemo, useEffect } from 'react';
import Search from './Components/Search';
import Cart from './Components/Cart';
import ForgotPassword from './Components/ForgotPassword';
import Checkout from './Components/Checkout';
import AddProduct from './Components/AddProduct'



function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, [])

  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);
    if (existingItemIndex >= 0) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
      setTotal(total + product.price);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      setTotal(total + product.price);
    }
  };

  const incrQuan = (item) => {
    const updatedCart = cart.map((product) =>
      product.id === item.id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setCart(updatedCart);
    setTotal(total + item.price);
  };

  const decrQuan = (item) => {
    const updatedCart = cart.map((product) =>
      product.id === item.id && product.quantity > 0
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    setCart(updatedCart);
    if (item.quantity > 0) {
      setTotal(total - item.price);
    }
  };

  const removeItem = (item) => {
    const updatedCart = cart.filter((product) => product.id !== item.id);
    setCart(updatedCart);
    setTotal(total - item.price * item.quantity)
  };

  const clearCart = () => {
    setCart([]);
    setTotal(0);
  };

  const handleCheckout = () => {
    alert("Thank you for your purchase!");
    clearCart();
  };
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
  }, [products, searchTerm])

  return (
    <div className="App">
      <Header cart={cart} />
      <main >
        <Routes>
          <Route path='/Web-app' element={<Products
            products={products}
            addToCart={addToCart}
          />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout total={total}/>} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/addproduct" element={
            <AddProduct
              products={products}
              setProducts={setProducts}
            />}
          />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/search" element={<Search
            filteredProducts={filteredProducts}
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
            addToCart={addToCart}
          />} />
          <Route path="/cart" element={<Cart
            cartItems={cart}
            totalBill={total}
            clearCart={clearCart}
            incrQuan={incrQuan}
            decrQuan={decrQuan}
            removeItem={removeItem}
            handleCheckout={handleCheckout}
          />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
