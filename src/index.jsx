import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Index from './components';
import NewExpense from './pages/newExpense';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Index/>}/>
          <Route path='new' element={<NewExpense/>}/>
          <Route path='expenses' element={<NewExpense/>}/>
          <Route path='statistics' element={<NewExpense/>}/>
        </Route>
      </Routes>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

