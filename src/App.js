import React from 'react';
import './App.css';
import Route from './route';

function App() {
    console.log(process.env.REACT_APP_AA);
    return <Route />;
}

export default App;
