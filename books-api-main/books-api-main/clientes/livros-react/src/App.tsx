import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Meu App</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Catálogo</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dados">Novo</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path='/' Component={LivroLista}/>
        <Route path='/dados' Component={LivroDados}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
