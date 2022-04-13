import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/Pages/AboutUs/AboutUs';
import ContactUs from './Components/Pages/ContactUs/ContactUs';
import Header from './Components/Pages/Header/Header';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login/Login';
import Register from './Components/Pages/Login/Register/Register';


function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about_us' element={<AboutUs/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
