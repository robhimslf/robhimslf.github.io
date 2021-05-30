import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { IsReduxDebug } from '../utils/environment';
import { settingsReducer } from './settings';
import { IGlobalState } from './types';
export * from './settings';
export * from './types';

/**
 * Initializes the global redux reducer, which is just a composite of all
 * store reducers within the site.
 */
export const globalReducer = combineReducers<IGlobalState>({
    settings: settingsReducer
});

/**
 * Initializes the global store, and prepares it for use.
 */
export const store = configureStore({
    reducer: globalReducer,
    middleware: ( defaultMiddleware ) => defaultMiddleware({
        serializableCheck: false,
        immmutableCheck: false
    }),
    devTools: IsReduxDebug
});

/**
 * Exports the global store's dispatch type; useful for our custom useDispatch
 * hook.
 */
export type GlobalDispatch = typeof store.dispatch;