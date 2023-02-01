import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import env_config from './env_config.json';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
if(env_config.environment!=='production'){
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}else{
  root.render(
    <App />
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
