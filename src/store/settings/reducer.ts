import { Reducer } from 'redux';
import { ISettingsState, SettingsAction } from './types';
import { getStoredTheme } from './utils';

/**
 * Defines the initial state of the settings store.
 */
const initialState: ISettingsState = {
    theme: getStoredTheme()
};

/**
 * Redux reducer responsible for applying dispatched actions against the state
 * of the settings store.
 * 
 * @param {ISettingsState} state 
 * @param {action<SettingsAction,ThemeType>} action 
 */
export const settingsReducer: Reducer<ISettingsState> = ( state = initialState, action ) => {
    switch ( action.type ) {

        /**
         * Handles a dispatch in which the color theme has been modified.
         */
        case SettingsAction.SetTheme: {
            return {
                ...state,
                theme: action.payload
            };
        }

        default:
            return state;
    }
};