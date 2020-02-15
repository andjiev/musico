import { RouterState } from 'connected-react-router';

import * as ExploreStore from './explore-store';
import *  as FavouritesStore from './favourites-store';

export default interface ApplicationState {
  router?: RouterState;

  exploreStore: ExploreStore.ExploreStore;
  favouritesStore: FavouritesStore.FavouritesStore;
}
