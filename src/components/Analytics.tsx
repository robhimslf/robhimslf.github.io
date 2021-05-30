import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA, { FieldsObject, InitializeOptions } from 'react-ga';
import { GoogleTrackingId, IsGoogleTrackingDebug } from '../utils/environment';
import packageJson from '../../package.json';

/**
 * Defines properties allowed on this component.
 */
interface IProps {
    overrides?: FieldsObject;
}

/**
 * Functional component providing page analytics.
 * 
 * @param {IProps}
 */
const Analytics: FC<IProps> = ({ overrides }) => {
    const { pathname, search } = useLocation();

    /**
     * Sends information about the current page view to Google Analytics.
     * 
     * @param {string} pathname 
     * @param {string|undefined} search 
     */
    const send = ( pathname: string, search: string = '' ) => {
        const { location } = window;
        const page = `${pathname}${search}`;
        const url = `${location.origin}${page}`;

        ReactGA.set({
            page,
            location: url,
            appName: packageJson.name,
            appVersion: packageJson.version,
            ...overrides
        });
    };

    /**
     * On component mount, send the initial page view.
     */
    useEffect(() => {
        send( pathname, search );
    }, [] );

    /**
     * On component update of the pathname or search,
     * send the new page view.
     */
    useEffect(() => {
        send( pathname, search );
    }, [ pathname, search ]);

    return null;
};

/**
 * Initializes Google Analytics for traffic analysis.
 * 
 * @param {InitializeOptions} options 
 */
export const initializeAnalytics = ( options?: InitializeOptions ): void => {
    ReactGA.initialize( GoogleTrackingId, {
        debug: IsGoogleTrackingDebug,
        ...options
    });
};

export default Analytics;