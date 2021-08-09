import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import { Home, Browse, Signin, Signup  } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListner } from './hooks';


export default function App() {

  const {user} = useAuthListner(); 
  

  return (
    <Router>
      <Switch>
      <IsUserRedirect user = {user} loggedInPath = {ROUTES.BROWSE} path = {ROUTES.SIGN_IN} exact>
        <Signin/>
      </IsUserRedirect>
      <IsUserRedirect user = {user} loggedInPath = {ROUTES.BROWSE} path = {ROUTES.SIGN_UP} exact>
        <Signup/>
      </IsUserRedirect>
      <ProtectedRoute user = {user} path = '/browse' exact>
        <Browse/>
      </ProtectedRoute> 
      <IsUserRedirect exact user = {user} loggedInPath = {ROUTES.BROWSE} path = {ROUTES.HOME}>
        <Home/>
      </IsUserRedirect>
      </Switch>
    </Router>
  );
}


