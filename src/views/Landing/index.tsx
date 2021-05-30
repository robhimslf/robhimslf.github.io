import { FC, MouseEvent, useEffect, useState } from 'react';
import AnimatedDiv from '../../components/AnimatedDiv';
import Background from '../../components/Background';
import ProfileDescription from '../../components/Profile/Description';
import ProfileAvatar from '../../components/Profile/Avatar';
import ThemeSelect from '../../components/ThemeSelect';
import withResponsive from '../../components/withResponsive';
import { animationFrameTimeout } from '../../utils/helpers';
import './index.scss';

interface IProps {
    screenSize?: 'sm'|'md'|'lg'|'xl';
}

const Landing: FC<IProps> = ( props ) => {
    const { screenSize } = props;

    const [ fullScreen, setFullScreen ] = useState<boolean>( true );
    const [ mouseHover, setMouseHover ] = useState<boolean>( false );
    const [ showProfile, setShowProfile ] = useState<boolean>( true );
    const [ initial, setInitial ] = useState<boolean>( true );
    const [ clientX, setClientX ] = useState<number>( 0 );
    const [ clientY, setClientY ] = useState<number>( 0 );

    const handleOrientationChange = ( event: DeviceOrientationEvent ) => {
        if ( event.gamma && event.beta ) {
            setClientX( Math.floor( event.gamma ) * 10 );
            setClientY( Math.floor( event.beta ) * 10 );
        }
    };

    const handleMouseMove = ( event: MouseEvent<HTMLDivElement> ) => {
        if ( mouseHover ) {
            setClientX( event.clientX );
            setClientY( event.clientY );
        }
    };

    const handleProfileClick = () => { };

    useEffect(() => {
        animationFrameTimeout(() => {
            if ( screenSize === 'sm' || screenSize === 'md' )
                window.addEventListener( 'deviceorientation', handleOrientationChange, false );

            setInitial( false );
            setMouseHover( true );
        }, 1100 );

        return () => {
            if ( screenSize === 'sm' || screenSize === 'md' )
                window.removeEventListener( 'deviceorientation', handleOrientationChange, false );
        }
    }, [] );

    return (
        <AnimatedDiv className="landing-container" onMouseMove={ handleMouseMove }>
            <AnimatedDiv className="body-container" fillParent>

            </AnimatedDiv>

            <Background
                initial={ initial }
                fullScreen={ fullScreen }
                showDescription={ showProfile }
                clientX={ clientX }
                clientY={ clientY }
            />

            <ThemeSelect />

            <ProfileDescription
                initial={ initial }
                showProfile={ showProfile }
            />

            <ProfileAvatar
                screenSize={ screenSize }
                initial={ initial }
                fullScreen={ fullScreen }
                onClick={ handleProfileClick }
            />
        </AnimatedDiv>
    );
};

export default withResponsive( Landing );