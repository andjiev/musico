import React from 'react';
import { Route } from 'react-router';

// css
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ROUTES } from './consts';
import Explore from './pages/explore';
import Sidebar from './components/sidebar';

const App: React.FC = () => {
  return (
    <div className="App">
      <Sidebar />
      <Route exact path={ROUTES.EXPLORE} component={Explore}></Route>
    </div>
  )
};

export default App;
