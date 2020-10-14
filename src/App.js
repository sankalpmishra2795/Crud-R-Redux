import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
