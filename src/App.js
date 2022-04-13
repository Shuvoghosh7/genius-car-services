import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About'
import Header from './Pages/Shared/Header/Header';

import ServiceDetails from './Pages/Service Details/ServiceDetails';
import NotFound from './Pages/Shared/Not Found/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/service/:serviceId' element={<ServiceDetails/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='*' element={<NotFound/>}/>
        
      </Routes>
     <Footer/>
    </div>
  );
}

export default App;
