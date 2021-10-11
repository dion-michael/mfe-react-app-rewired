import React from 'react';
import logo from './logo.svg';
import './App.css';
import MicroFrontend from './MicroFrontend';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Header from './components/Header';
import Blogs from './components/Blogs';
import BlogDetail from './components/BlogDetail';
import { loginHost } from './configs/hosts';
import PrivateRoute from './PrivateRoute';
import Login from './components/Login';

const defaultHistory = createBrowserHistory();

interface Props {
  history?: any;
}

const Home: React.FC = () => (
  <div className="container">
    <Header/>
    <Blogs/>
    <Link to="/about">go to about</Link>
  </div>
)

const About: React.FC = () => (
  <div>ini about</div>
)



function App() {
  return (
      <BrowserRouter>
        <>
          <Switch>
            <Route path="/login" component={Login}/>
            <PrivateRoute path="/about" component={About}/>
            <Route path="/" component={Home}/>
          </Switch>
          <Link to="/login">go to login</Link>
        </>
      </BrowserRouter>
  );
}

export default App;
