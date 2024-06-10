import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import Footer from './components/Footer'
import Products from './Pages/Products';
function App() {
  return (
    <div >
     <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/products' element={<Products/>}/>
      </Routes>
      <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
