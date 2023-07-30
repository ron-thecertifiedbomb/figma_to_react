
import './App.css';
import Home from './page/Home/home';
import NavBar from './components/NavBar/NavBar'
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Form />
     <Home />
     <Footer />
    </div>
  );
}

export default App;
