import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TheApp from './componets/TheApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <TheApp />
      </React.StrictMode>
);
// const app=ReactDOM.createRoot(document.getElementById('app'));
// app.render(
//   <React.StrictMode>
//     <t
//   </React.StrictMode>

// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
