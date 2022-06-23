import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Login} from './components/Login.tsx'
import { Logout } from './components/Logout.tsx'
import { Apicomp } from './components/Apicomp.tsx'

function App() {

  /*
  const [userData, setUserData] = useState({name:"", email:""})

  const addUserData = (name, email) => {
    setUserData({name, email});
  }

  <Route path='' element={<Login addUserData={addUserData}/>}/>
  <Route path='/logout' element={<Logout userData={userData}/>}/>*/

  return (
    <>
      <Router>
          <Routes>
            <Route path='' element={<Apicomp/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
