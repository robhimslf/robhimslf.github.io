import { ISettingsState } from './settings';

/**
 * Defines the composite properties required of the global store within redux.
 */
export interface IGlobalState {
    settings: ISettingsState;
};