import './CSS/App.css';
import About from './Components/About';
import Products from './Components/Products'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Header from './Components/Header';



function App() {
  return (
    <BrowserRouter>
      <Header/>
      <main className="App">
        <Routes>
          <Route index element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
