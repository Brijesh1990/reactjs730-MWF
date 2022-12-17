import React from 'react';
import ReactDOM  from 'react-dom/client';
import Hello from './components/Hello';
import reportWebVitals  from './reportWebVitals';
const root=ReactDOM.createRoot(document.getElementById("demo-app"));
root.render(
 
    <React.Fragment>
        <Hello />
    </React.Fragment>  
);
reportWebVitals();
