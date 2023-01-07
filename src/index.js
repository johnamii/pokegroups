import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import { HomePage, PokemonGO, Community, About, Account, Contribute } from './HomePage';
import ScarletViolet from './ScarletViolet';
import AppHeader from './AppHeader';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <BrowserRouter>

        <AppHeader/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/sv" element={<ScarletViolet/>}/>
          <Route path="/pogo" element={<PokemonGO/>}/>
          <Route path="/community" element={<Community/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/contribute" element={<Contribute/>}/>
        </Routes>

      </BrowserRouter>
  </React.StrictMode>
);