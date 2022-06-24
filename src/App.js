import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Login} from './components/LoginComponent/Login.tsx';
import { Logout } from './components/LoginComponent/Logout.tsx';
import { Apicomp } from './components/ApiCardsComponent/Apicomp.tsx';
import Accordion from './components/AccordionComponent/Accordion';
import { AnimatedSlider } from './components/AnimatedSliderComponent/AnimatedSlider.tsx';
import Counter from './components/CounterComponent/Counter';
import List from './components/ListComponent/List';
import Questionnaire from './components/QuestionnaireComponent/questionnaire';
import Searchfilter from './components/SearchComponent/searchfilter';
import Navbar from './components/NavbarComponent/Navbar';

function App() {

  
  const [userData, setUserData] = useState({name:"", email:""})

  const addUserData = (name, email) => {
    setUserData({name, email});
  }

  return (
    <>
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Apicomp/>}/>
            <Route path='/accordion' element={<Accordion/>}/>
            <Route path='/animatedslider' element={<AnimatedSlider/>}/>
            <Route path='/counter' element={<Counter/>}/>
            <Route path='/list' element={<List/>}/>
            <Route path='/login' element={<Login addUserData={addUserData}/>}/>
            <Route path='/logout' element={<Logout userData={userData}/>}/>
            <Route path="/questionnaire" element={<Questionnaire/>}/>
            <Route path="searchField" element={<Searchfilter/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
