import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAzmIgMkka-BkMc0TMAyhMSdL_mjTIQmgw",
    authDomain: "shortify-cut.firebaseapp.com",
    projectId: "shortify-cut",
    storageBucket: "shortify-cut.appspot.com",
    messagingSenderId: "115568063759",
    appId: "1:115568063759:web:8f914ffd09852bdec33a7a"
  };


const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Router>
        <App />
    </Router>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
