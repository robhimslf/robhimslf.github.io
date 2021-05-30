/**
 * Defines the properties and methods found in an object returned by Webpack's
 * require.context.
 */
interface IRequireContext {
    keys(): string[];
    ( id: string ): any;
    <T>( id: string ): T;
    resolve( id: string ): string;
    id: string;
}

/**
 * Interrogates a Webpack required context object, and returns as a flattened
 * map of file paths.
 * 
 * @param {IRequireContext} context 
 * @returns {string[]}
 */
export const getContextPaths = ( context: IRequireContext ): string[] => {
    return context.keys().map( key => context( key ));
};

/**
 * Preloads an image, and fires the callback once complete or errored.
 * 
 * @param {string} src 
 * @param {string[]|null} srcSet 
 * @param {Function} callback 
 * @returns {HTMLImageElement}
 */
export const preloadImage = ( src: string, callback?: () => void ): HTMLImageElement => {
    const noop = () => { };
    
    const image = new Image();
    image.src = src;
    image.onload = callback || noop;
    image.onerror = callback || noop;

    return image;
};

/**
 * Browser-agnostic cancellation of a frame request handle.
 * 
 * @param {number|undefined} frameRequest 
 */
export const cancelAnimationFrame = ( frameRequest: number ): void => {
    const cancelAnimationFrame =
        window.cancelAnimationFrame ||
        ( window as any ).mozCancelAnimationFrame ||
        ( window as any ).webkitCancelAnimationFrame ||
        ( window as any ).msCancelAnimationFrame;

    cancelAnimationFrame.call( window, frameRequest );
};

/**
 * Browser-agnostic animation frame request functionality
 * operating on a variably-timed callback. Think of this
 * as a debounced request for animation frame, useful for
 * smoothing animations that might need to be updated by
 * component state.
 * 
 * @param {Function} callback 
 * @param {number} timeout 
 */
export const animationFrameTimeout = ( callback: () => void, timeout: number ): void => {
    const requestAnimationFrame =
        window.requestAnimationFrame ||
        ( window as any ).mozRequestAnimationFrame ||
        ( window as any ).webkitRequestAnimationFrame ||
        ( window as any ).msRequestAnimationFrame;

    let lastUpdate: number|undefined,
        frameRequest: number|undefined;

    const animationCallback = ( timestamp: number ): void => {
        if ( !lastUpdate )
            lastUpdate = timestamp;

        if ( timestamp - lastUpdate >= timeout && frameRequest ) {
            callback();
            cancelAnimationFrame( frameRequest );
        } else {
            frameRequest = requestAnimationFrame.call( window, animationCallback );
        }
    };

    frameRequest = requestAnimationFrame.call( window, animationCallback );
};

/**
 * Maps a dynamic object of CSS class names into a single space-delimited string.
 * 
 * @param {string} className 
 * @param {object} classModule 
 * @returns {string}
 */
export const mapClassNames = ( className: string = '', classModule: any = {} ): string => {    
    if ( !classModule )
        return className;

    return className.split( ' ' )
        .map( c => classModule[ c ] || c )
        .join( ' ' );
};