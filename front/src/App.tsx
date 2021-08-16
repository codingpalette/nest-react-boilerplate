import React from 'react';
import loadable from '@loadable/component';
import { Route, Switch } from 'react-router-dom';

const HomePage = loadable(() => import('./pages/HomePage'));

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </>
  );
}

export default App;
