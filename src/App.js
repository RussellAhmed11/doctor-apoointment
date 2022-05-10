// import './App.css';
import NavBar from './Pages/Shared/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/LogIn/Login';

function App() {
  return (
    <div>
   <NavBar></NavBar>
   <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/about' element={<About></About>}></Route>
     <Route path='/login' element={<Login></Login>}></Route>
     <Route path='*' element={<NotFound></NotFound>}></Route>

   </Routes>
   </div>
  );
}

export default App;
