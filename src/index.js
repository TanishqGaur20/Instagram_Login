
// import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { Routes, Route, useNavigate } from 'react-router-dom'
// import NoOfFollow from './NoOfFollow';
// ReactDOM.render(
//     <BrowserRouter>
//         <Routes>
//             <Route path='/home' element={<NoOfFollow />} />
//             <Route path='/' element={<App />} />
//         </Routes>
//     </BrowserRouter>,
//     document.getElementById('root')
// );
import React from 'react';
import { Routes, Route, Outlet, HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NoOfFollow from './NoOfFollow';

const Root = () => (
    <HashRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<NoOfFollow />} />
        </Routes>
    </HashRouter>
);

ReactDOM.render(<Root />, document.getElementById('root'));