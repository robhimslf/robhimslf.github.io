import { Component, ComponentType } from 'react';
import throttle from 'lodash.throttle';

interface IState {
    screenSize: 'sm'|'md'|'lg'|'xl';
}

const withResponsive = <P extends object>( WrappedComponent: ComponentType<P> ) => {
    class WithResponsive extends Component<P,IState> {

        state: IState = {
            screenSize: 'sm'
        };

        componentDidMount() {
            this.calculateInnerWidth();

            window.addEventListener( 'resize',
                throttle( this.calculateInnerWidth, 200 ));
        }

        componentWillUnmount() {
            window.removeEventListener( 'resize', this.calculateInnerWidth );
        }

        getScreenSize = ( width: number ) => {
            if ( width > 1024 )
                return 'xl';
            if ( width <= 1024 && width > 650 )
                return 'lg';
            if ( width <= 650 && width > 450 )
                return 'md';
            else
                return 'sm';
        };

        calculateInnerWidth = () => {
            const screenSize = this.getScreenSize( window.innerWidth );
            this.setState({ screenSize });
        };

        render() {
            const { screenSize } = this.state;

            return (
                <WrappedComponent
                    screenSize={ screenSize }
                    { ...this.props }
                />
            );
        }
    }

    return WithResponsive;
};

export default withResponsive;