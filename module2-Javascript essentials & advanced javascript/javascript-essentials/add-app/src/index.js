import React from 'react';
import ReactDOM from 'react-dom/client';
// import Add from './Add';
import { Add,Subs,Mult,Dv,md } from './components/Calc';
import reportWebVitals from './reportWebVitals';

const root=ReactDOM.createRoot(document.getElementById("demo-app"));
root.render(
    <React.StrictMode>
        {/* <Add /> */}
        <button type='button' onClick={Add}>Additions</button>
        <button type='button' onClick={Subs}>Substractions</button>
        <button type='button' onClick={Mult}>Multiplications</button>
        <button type='button' onClick={Dv}>Divisions</button>
        <button type='button' onClick={md}>Modulas</button>
    </React.StrictMode>

)
reportWebVitals();