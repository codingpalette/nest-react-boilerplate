import React from 'react';
import loadable from '@loadable/component';
import { Route, Switch } from 'react-router-dom';

const HomePage = loadable(() => import('./pages/HomePage'));
const LogInPage = loadable(() => import('./pages/LogInPage'));

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LogInPage} />
      </Switch>
    </>
  );
}

export default App;
