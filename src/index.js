import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('react')
// );

const javascript = () => {
  document.getElementById('javascript').innerHTML = 
  `<div className="App">
    <div className="date-component">
      ${new Date().toString()}
    </div>
  </div>`;
}

const react = () => {
  ReactDOM.render(<App/>,document.getElementById('react'));
}

// react();

setInterval(()=>{
  react();
  javascript();
},1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
