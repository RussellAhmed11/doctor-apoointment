// import './App.css';
import NavBar from './Pages/Shared/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/LogIn/Login';
import Apoointment from './Pages/Apoointment/Apoointment';
import SignUp from './Pages/LogIn/SignUp';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
   <NavBar></NavBar>
   <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/about' element={<About></About>}></Route>
     <Route path='/login' element={<Login></Login>}></Route>
     <Route path='/signup' element={<SignUp></SignUp>}></Route>
     <Route path='/apoointment' element={<Apoointment></Apoointment>}></Route>
     <Route path='*' element={<NotFound></NotFound>}></Route>

   </Routes>
   </div>
  );
}

export default App;
