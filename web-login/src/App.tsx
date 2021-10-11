import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Paper, TextField } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';

function App({ history }: { history?: any }) {
  return <Login history={history}/>
}

export default App;
