import { RouterState } from 'connected-react-router';

import * as ExploreStore from './explore-store';

export default interface ApplicationState {
  router?: RouterState;

  exploreStore: ExploreStore.ExploreStore;
}
