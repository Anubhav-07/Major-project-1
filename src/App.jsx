
import './App.css';
import Home from './pages/Home';

import Signup from './pages/Signup';
import Services from './pages/Services';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './pages/Error';
import Login from './pages/Log-in';

function App(){
  return(
      <>
        
        <BrowserRouter>
        <Header title="R-Deal.in"/>
          <Routes>
            <Route index element={<Home />}/>
            <Route exact path="/home" element={<Home/>} />
            <Route exact path='*' element={<Error/>}/>
            <Route exact path="/about us" element={<About/>} />
            <Route exact path="/services" element={<Services/>} />
            <Route exact path="/portfolio" element={<Portfolio/>} />
            <Route exact path="/contact us" element={<Contact/>} />
            <Route exact path='/login' element={<Login/>} />
            <Route exact path='/signup' element={<Signup />}/>
          </Routes>
        </BrowserRouter>
        
        <Footer />
        
      </>
  )
};
export default App;