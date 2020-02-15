import * as ExploreStore from './explore-store';
import * as FavouritesStore from './favourites-store';

const reducers = {
  exploreStore: ExploreStore.reducer,
  favouritesStore: FavouritesStore.reducer
};

export { reducers };
