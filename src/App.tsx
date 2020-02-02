import React from 'react';
import { Route } from 'react-router';

import { ROUTES } from './consts';
import Explore from './pages/explore';

const App: React.FC = () => {
  return (
    <Route exact path={ROUTES.EXPLORE} component={Explore}></Route>
  )
};

export default App;
