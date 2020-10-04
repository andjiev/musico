import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

// css
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Sidebar from './components/sidebar';
import Header from './components/header';

import { ROUTES } from './consts';
import Explore from './pages/explore';
import Favourites from './pages/favourites';
import Popular from './pages/popular';
import Albums from './pages/albums';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Header />

        <Route exact path={ROUTES.EXPLORE} component={Explore}></Route>
        <Route exact path={ROUTES.FAVOURITES} component={Favourites}></Route>
        <Route exact path={ROUTES.POPULAR} component={Popular}></Route>
        <Route exact path={ROUTES.ALBUMS} component={Albums}></Route>
      </div>
    </Router>
  )
};

export default App;
