import './CSS/App.css';
import About from './Components/About';
import Store from './Components/Store';
import Contact from './Components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
            <Store />
            <Contact />
            <About />
    </div>
  );
}

export default App;
