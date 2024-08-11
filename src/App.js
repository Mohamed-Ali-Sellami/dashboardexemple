import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';

import { useDispatch, useSelector } from 'react-redux';
import { addclient, deleteclient, getclient,updateclient } from './Redux/ClientSlice';
import { useEffect, useState } from 'react';
import GestionClient from './Components/GestionClient';
import GestionProduct from './Components/GestionProduct';
import Navbar from './Components/Navbar';
import {Routes,Route} from 'react-router-dom'
import { getproduct } from './Redux/ProductSlice';

function App() {

  const [showFirst, setshowFirst] = useState(false);
  const [showSecond, setshowSecond] = useState(false);
  const [ping, setping] = useState(false)

  const dispatch=useDispatch()

  useEffect(() => {
 dispatch(getclient());
 dispatch(getproduct())
  }, [ping])

  return (
    <div className="App">
      <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/client' element={<GestionClient setping={setping} ping={ping}/>}></Route>
            <Route path='/produit' element={<GestionProduct setping={setping} ping={ping}/>}></Route>
            </Routes>  
          
    </div>
  );
}

export default App;
