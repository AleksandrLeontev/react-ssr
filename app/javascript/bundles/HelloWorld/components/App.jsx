import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HelloWorld from "./HelloWorld";

const AppClient = () => {
  return (
    <Switch>
      <Route exec path='/hello1' component={HelloWorld}/>
      <Route exec path='/hello2' component={HelloWorld}/>
    </Switch>
  );
}

export default props => <AppClient {...props}/>