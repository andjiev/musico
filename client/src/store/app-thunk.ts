import { Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import ApplicationState from './application-state';

export type AppThunk = ThunkAction<void, ApplicationState, null, Action<string>>;
