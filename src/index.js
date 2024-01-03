// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import NoOfFollow from './NoOfFollow';
// import { BrowserRouter } from 'react-router-dom';
// const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(

// <BrowserRouter>
// <App />
// <BrowserRouter/>
// )

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Routes, Route, useNavigate } from 'react-router-dom'
import NoOfFollow from './NoOfFollow';
ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path='/home' element={<NoOfFollow />} />
            <Route path='/' element={<App />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
