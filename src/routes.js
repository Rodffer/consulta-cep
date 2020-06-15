import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import City from './pages/City';
import Main from './pages/Main';

export default function Routes() {
  return (
    <BrowserRouter basename='consulta-cep'>
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/city" component={City}/>
      </Switch>
    </BrowserRouter>
  )
}