import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About'
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        
      </Routes>
     <Footer/>
    </div>
  );
}

export default App;
