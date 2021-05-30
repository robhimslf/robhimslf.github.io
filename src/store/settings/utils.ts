import { ThemeType, ThemeTypes } from './types';

/**
 * Default color theme.
 */
const DefaultTheme: ThemeType = 'dark';

/**
 * Name of the cookie for storing the color theme.
 */
const ThemeKey = 'rh.theme';

/**
 * Fetches the previously stored color theme from browser storage. If no previous
 * value is found, stores the default theme and returns it.
 * 
 * @returns {ThemeType}
 */
export const getStoredTheme = (): ThemeType => {
    let theme: string|null = window.localStorage.getItem( ThemeKey );
    if ( theme === null ) {
        theme = DefaultTheme;
        setStoredTheme( theme as ThemeType );
    }

    return theme as ThemeType;
};

/**
 * Persists the provided color theme to browser storage.
 * 
 * @param {ThemeType} theme 
 */
export const setStoredTheme = ( theme: ThemeType ): void => {
    if ( ThemeTypes.includes( theme ))
        window.localStorage.setItem( ThemeKey, theme );
};

/**
 * Applies the theme by setting it as the value of the "data-theme" attribute
 * on the DOM.
 * 
 * @param {ThemeType} theme 
 */
export const applyTheme = ( theme: ThemeType ): void => {
    document.documentElement.setAttribute( 'data-theme', theme.toLowerCase() );
};