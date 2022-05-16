// import './App.css';
import NavBar from './Pages/Shared/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/LogIn/Login';
import Apoointment from './Pages/Apoointment/Apoointment';
import SignUp from './Pages/LogIn/SignUp';
import RequreAuth from './Pages/LogIn/RequreAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DhasBoard from './Pages/DhasBoard/DhasBoard';
import MyApoointment from './Pages/DhasBoard/MyApoointment';
import Myreview from './Pages/DhasBoard/Myreview';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/apoointment' element={
          <RequreAuth>
            <Apoointment></Apoointment>
          </RequreAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequreAuth>
            <DhasBoard></DhasBoard>
          </RequreAuth>
          
        }>
          <Route index element={<MyApoointment></MyApoointment>}></Route>
          <Route path="myreview" element={<Myreview></Myreview>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <ToastContainer />

    </div>
  );
}

export default App;
