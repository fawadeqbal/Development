import './CSS/App.css';
import About from './Components/About';
import Products from './Components/Products'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header/>
      <main >
        <Routes>
          <Route index element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
