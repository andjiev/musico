import * as SharedStore from './shared-store';
import * as FavouritesStore from './favourites-store';

const reducers = {
  sharedStore: SharedStore.reducer,
  favouritesStore: FavouritesStore.reducer
};

export { reducers };
