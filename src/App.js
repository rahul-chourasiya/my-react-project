import './App.css';
import Header from '../src/Component/Header/Header'
import Home from './Pages/Home';
import Footer from '../src/Component/Footer/Footer'
import { Routes, Route } from 'react-router'
import { Box } from '@mui/material';
import Productspage from './Pages/Productspage';
import ProductDetailspage from './Pages/ProductDetailspage';
import ShoppingCart from './Pages/ShoppingCart';
import About from './Pages/About';

function App() {
  return (
    <Box component="div">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/productspage" element={<Productspage />} />
        <Route path="/productdetailspage" element={<ProductDetailspage />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        {/* <Route path="/About" element={<About />} /> */}
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
