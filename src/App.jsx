import {Routes, Route} from 'react-router-dom';

import { useState } from 'react'
import './App.css'
import './index.css';

// components imports
import Navigation from './components/Navigation';
import Header from './components/Header';

// Import pages;
import OverView from './pages/OverView';

function App() {

  return (
    <div className='grid grid-cols-6 grid-row-6 border-2 border-color-red-700 min-h-screen'>
      <Navigation className='col-start-1 col-end-2 row-start-1 row-end-6 border-2 border-red-700'></Navigation>
      <Header className='col-start-2 col-span-5 border-2 '></Header>
      <Routes>
        <Route path='/' element={<OverView className='col-start-2 col-span-5 border-2 row-start-2 row-end-6'></OverView>}>
          
        </Route>
      </Routes>
    </div>
  )
}

export default App
