import { action } from 'typesafe-actions';
import { SettingsAction, ThemeType } from './types';
import { applyTheme, setStoredTheme } from './utils';

/**
 * Persists the selected color theme to browser storage, applies the theme to
 * the DOM, and returns the dispatched action.
 * 
 * @param {ThemeType} theme 
 * @returns {action<SettingsAction,ThemeType>}
 */
export const setTheme = ( theme: ThemeType ) => {
    setStoredTheme( theme );
    applyTheme( theme );

    return action( SettingsAction.SetTheme, theme );
};