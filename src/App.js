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
import Checkout from './Pages/Checkout/Checkout';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Addservices from './Pages/Addservices/Addservices';
import ManageServices from './Pages/ManageServices/ManageServices';
import { ToastContainer } from 'react-toastify';
import Orders from './Pages/Orders/Orders';

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
        <Route path='/checkout/:serviceId' element={
          <RequireAuth>
            <Checkout/>
          </RequireAuth>
        }/>
        <Route path='/addservice' element={
          <RequireAuth>
            <Addservices/>
          </RequireAuth>
        }/>
        <Route path='/manageservice' element={
          <RequireAuth>
            <ManageServices/>
          </RequireAuth>
        }/>
        <Route path='/orders' element={
          <RequireAuth>
            <Orders/>
          </RequireAuth>
        }/>
        <Route path='*' element={<NotFound/>}/>
        
      </Routes>
     <Footer/>
     <ToastContainer />
    </div>
  );
}

export default App;
