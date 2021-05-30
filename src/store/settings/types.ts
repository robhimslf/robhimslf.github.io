/**
 * Defines the recognized color themes of the site initialized as a
 * string array for easy validation in the utils.
 */
export const ThemeTypes = [
    'light',
    'dark'
] as const;

/**
 * Defines the recognized color themes of the site for type-checking.
 */
export type ThemeType = ( typeof ThemeTypes )[ number ];

/**
 * Defines the properties required of the settings store within redux.
 */
export interface ISettingsState {
    readonly theme: ThemeType;
};

/**
 * Defines the action keys for modifying the settings state.
 */
export enum SettingsAction {
    SetTheme = '@@settings/SetTheme'
};