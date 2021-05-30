import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA, { FieldsObject, InitializeOptions } from 'react-ga';
import { GoogleTrackingId, IsGoogleTrackingDebug } from '../utils/environment';
import packageJson from '../../package.json';

/**
 * Defines properties allowed on this component.
 */
interface IProps {
    reportOptions?: FieldsObject;
    initializeOptions?: InitializeOptions;
}

/**
 * Functional component providing page analytics.
 * 
 * @param {IProps}
 */
const Analytics: FC<IProps> = ({ initializeOptions, reportOptions }) => {
    const { pathname, search } = useLocation();

    /**
     * Initializes Google Analytics for traffic analysis.
     */
    const initialize = () => {
        if ( !( window as any ).ga ) {
            ReactGA.initialize( GoogleTrackingId, {
                debug: IsGoogleTrackingDebug,
                ...initializeOptions
            });
        }
    };

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
            ...reportOptions
        });

        ReactGA.pageview( page );
    };

    /**
     * On component mount, send the initial page view.
     */
    useEffect(() => {
        initialize();
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

export default Analytics;