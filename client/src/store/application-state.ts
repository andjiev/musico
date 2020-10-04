import { RouterState } from 'connected-react-router';

import * as SharedStore from './shared-store';
import *  as FavouritesStore from './favourites-store';

export default interface ApplicationState {
  router?: RouterState;

  sharedStore: SharedStore.SharedStore;
  favouritesStore: FavouritesStore.FavouritesStore;
}
