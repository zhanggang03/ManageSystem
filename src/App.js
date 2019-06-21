import React from 'react';
import logo from './logo.svg';
import './App.css';
import Route from './app/home';

function App() {
    console.log(process.env.REACT_APP_AA);
    return <Route />;
}

export default App;
