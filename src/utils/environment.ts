/**
 * Email address used for the email icon.
 */
export const EmailAddress: string = process.env[ 'REACT_APP_EMAIL' ] || '';

/**
 * URL used for the Facebook profile icon.
 */
export const FacebookProfileUrl: string = process.env[ 'REACT_APP_FACEBOOK_URL' ] || '';

/**
 * API key used to call read-only Github API endpoints.
 */
export const GithubApiKey: string = process.env[ 'REACT_APP_GITHUB_API_KEY' ] || '';

/**
 * URL used for the Github profile icon.
 */
export const GithubProfileUrl: string = process.env[ 'REACT_APP_GITHUB_URL' ] || '';

/**
 * Google Analytics tracking ID as found in the dotenv file.
 */
export const GoogleTrackingId: string = process.env[ 'REACT_APP_GA_TRACKING_ID' ] || '';

/**
 * Whether Google Analytics functionality is running in non-persistent debug mode.
 */
 export const IsGoogleTrackingDebug: boolean = ( process.env[ 'REACT_APP_GA_DEBUG' ] === 'true' );

 /**
  * Whether redux debugging is enabled.
  */
 export const IsReduxDebug: boolean = ( process.env[ 'REACT_APP_REDUX_DEBUG' ] === 'true' );