import { FC, lazy, Suspense, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Analytics from './components/Analytics';
import AnimatedDiv from './components/AnimatedDiv';
import SplashLoader from './components/SplashLoader';
import { applyTheme, IGlobalState } from './store';

// Lazy-load the landing page.
const Landing = lazy(() => import( './views/Landing' ));

/**
 * Returns a composite mapping of global app state properties provided by redux.
 * 
 * @param {IGlobalState} state 
 * @returns 
 */
const mapState = ( state: IGlobalState ) => ({
    settings: state.settings
});

/**
 * Initializes a wrapper applied to the App component to place it within the
 * scope of redux, and uses the result to prepare a typing of properties for
 * the component.
 */
const connector = connect( mapState );
type IProps = ConnectedProps<typeof connector>;

/**
 * Functional component providing the base functionality of the site.
 */
const App: FC<IProps> = ( props ) => {
    const { theme } = props.settings;

    /**
     * On component mount, apply the stored color theme.
     */
    useEffect(() => {
        applyTheme( theme );
    }, [] );

    return (
        <AnimatedDiv className="rh-main">
            <Router>
                <Route component={ Analytics } />

                <Suspense fallback={ null }>
                    <Switch>
                        <Route path="/">
                            <SplashLoader>
                                <Landing />
                            </SplashLoader>
                        </Route>        
                    </Switch>
                </Suspense>
            </Router>
        </AnimatedDiv>
    );
};

export default connector( App );
