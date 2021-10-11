import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

(window as { [key: string]: any }).renderLogin = (containerId: string, history: any) => {
  ReactDOM.render(
    // @ts-ignore
    <App history={history} />,
    document.getElementById(containerId),
  );
}

(window as { [key: string]: any}).unmountLogin = (containerId: string) => {
  console.log(containerId, 'containerId')
  if (document.getElementById(containerId)) {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId) as any);
  }
};

if (!document.getElementById('Login-container')) {
  ReactDOM.render(<App />, document.getElementById('root'));
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
