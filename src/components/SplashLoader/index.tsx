import { FC, Fragment, ComponentPropsWithoutRef, useEffect, useRef, useState } from 'react';
import { withRouter } from 'react-router';
import { useLocation } from 'react-router-dom';
import { Spring, Transition } from 'react-spring';
import { animationFrameTimeout, getContextPaths, preloadImage } from '../../utils/helpers';
import AnimatedDiv from '../AnimatedDiv';
import BackgroundAnimator from '../Background/BackgroundAnimator';
import './index.scss';

/**
 * Defines load states used by the splash loader to determine the current
 * state of dynamic asset loading.
 */
type LoadState = 'loading'|'loaded'|'ok';

/**
 * Base site images.
 */
const SiteImages = require.context( '../../../public/img', false, /.*\.png$|jpg$|jpeg$/ );

/**
 * Site background images.
 */
const SiteBackgroundImages = require.context( '../../../public/img/bg', false, /.*\.png$|jpg$|jpeg$/ );

/**
 * Functional component providing a splash page that overlays the rest of the
 * window until all assets/views are fully loaded.
 * 
 * @param {ComponentPropsWithoutRef<any>} props 
 */
const SplashLoader: FC<ComponentPropsWithoutRef<any>> = ({ children }) => {
    const { pathname } = useLocation();
    const totalItems = useRef<number>( 0 );
    const loadedItems = useRef<number>( 0 );
    
    const [ showBackground, setShowBackground ] = useState<boolean>( true );
    const [ loadPercent, setLoadPercent ] = useState<number>( 0 );
    const [ loadState, setLoadState ] = useState<LoadState>( 'loading' );

    /**
     * Increments the non-stateful number of items that have fully loaded.
     */
    const incrementLoaded = () => {
        loadedItems.current = loadedItems.current + 1;
    };

    /**
     * Handles completion of dynamic item loading, optionally accepting a
     * flag for immediately doing so.
     * 
     * @param {boolean} showImmediate 
     */
    const complete = ( showImmediate?: boolean ) => {        
        // Background images should be loaded without impacting the splash loader
        // progress.
        const images: HTMLImageElement[] = [];
        const contextImages = getContextPaths( SiteBackgroundImages );
        contextImages.map( src => (
            images.push( preloadImage( src ))
        ));

        if ( showImmediate ) {
            setLoadState( 'ok' );
            setShowBackground( false );
            return;
        }

        if ( loadPercent !== 100 )
            setLoadPercent( 100 );

        setLoadState( 'loaded' );

        // We briefly delay in order to prevent immediate display of content.
        animationFrameTimeout(() => {
            setLoadState( 'ok' );

            animationFrameTimeout(() => {
                setShowBackground( false );
            }, 400 );
        }, 500 );
    };

    /**
     * Evaluates the current load progress every 400-600 milliseconds, and updates
     * load percentage until complete.
     */
    const evaluateProgress = () => {
        const isLast = ( totalItems.current - loadedItems.current <= 1 );
        const updateDelayMs = ( isLast ) ? 600 : 400;

        animationFrameTimeout(() => {

            // For the last 2%, we manually increment the loaded item count to
            // ensure a smooth and seamless animation.
            if ( isLast )
                incrementLoaded();

            setLoadPercent( Math.trunc(( loadedItems.current / totalItems.current ) * 100 ));

            // If we're done, halt and complete the splash loader.
            if ( loadedItems.current >= totalItems.current )
                complete();

            // Otherwise, re-evaluate progress.
            else
                evaluateProgress();
        }, updateDelayMs );
    };

    /**
     * Begins dynamically loading assets required by the site. Note that this
     * does not replace our lazy-load directives in App.tsx.
     */
    const load = () => {

        // Dynamic image loading.
        const images = Array.from( document.images );
        const contextImages = getContextPaths( SiteImages );
        contextImages.map( src => (
            images.push( preloadImage( src, () => incrementLoaded()))
        ));

        // Dynamic page loading.
        import( '../../views/Landing' ).then( _ => incrementLoaded());

        // Track item count, which is a count of the images we need to load plus
        // the number of views we need to load.
        totalItems.current = images.length + 1;

        // If all images are loaded, immediately halt and complete the splash
        // loader.
        let imagesLoaded = images.every( image => image.complete );
        if ( imagesLoaded ) {
            complete( true );
        }

        // Otherwise, start checking progress.
        else {
            evaluateProgress();
        }
    };

    /**
     * On component mount, begin dynamically loading site dependencies and
     * tracking progress.
     */
    useEffect(() => {
        load();
    }, [] );

    return (
        <AnimatedDiv className="splash-loader">
            { loadState === 'ok' && children }

            { showBackground && (
                <AnimatedDiv align row className="splash-loader-container">
                    <div className="background-container">
                        <div className="background">
                            <BackgroundAnimator clientX={ 0 } clientY={ 0 } />
                        </div>
                    </div>

                    <Transition
                        items={ loadState }
                        from={{ opacity: 1 }}
                        enter={{ opacity: 1 }}
                        leave={{ opacity: 0 }}
                    >
                        {( styles, item ) => (
                            item === 'loading'
                                ? (
                                    <Fragment>
                                        <Spring to={{ width: `calc( 100vw - ${loadPercent}vw )`, x: loadPercent }}>
                                            {
                                                springProps => (
                                                    <Fragment>
                                                        <div style={ styles } className="percentage-text">{ Math.floor( springProps.x.get() )}</div>
                                                        <div className="loading-text-container" style={{ opacity: styles.opacity, width: springProps.width.get() }}>
                                                            <div className="loading-text">
                                                                Loading...
                                                            </div>
                                                        </div>
                                                    </Fragment>
                                                )
                                            }
                                        </Spring>
                                    </Fragment>
                                )
                                : null
                        )}
                    </Transition>
                </AnimatedDiv>
            )}
        </AnimatedDiv>
    );
};

export default withRouter( SplashLoader );