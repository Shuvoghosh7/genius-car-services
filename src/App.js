import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/footer' element={<Footer/>}/>
      </Routes>
    </div>
  );
}

export default App;
