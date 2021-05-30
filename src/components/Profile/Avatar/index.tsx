import { FC, memo } from 'react';
import { animated, useSpring, useTransition } from 'react-spring';
import './index.scss';

const avatar2xPath = '/img/img_profile@2x.png';
const avatar1xPath = '/img/img_profile@1x.png';

interface IProps {
    fullScreen?: boolean;
    initial?: boolean;
    onClick: () => void;
    screenSize?: 'sm'|'md'|'lg'|'xl';
}

const Avatar: FC<IProps> = ( props ) => {
    const {
        fullScreen,
        initial,
        onClick,
        screenSize
    } = props;

    const isResponsive = ( screenSize === 'sm' || screenSize === 'md' );
    
    const translateTo = ( isResponsive ) ? 225 : 250;
    const scaleTo = ( isResponsive ) ? 0.3 : 0.25;
    const shadowRightFrom = ( isResponsive ) ? 3 : 5;
    const shadowLeftFrom = ( isResponsive ) ? 2 : 3;

    const transitionFrom = `translate( -50%, calc( 50vh - 100px)) scale( 1 )`;
    const transitionTo = `translate( -50%, calc( 50vh - ${translateTo}px )) scale( 1 )`;
    const springTransitionFrom = `translate( -50%, calc( 50vh - ${translateTo}px )) scale( 1 )`
    const springTransitionTo = `translate( -50%, calc( 0vh - -10px )) scale( ${scaleTo })`;

    const shadowFrom = `0px ${shadowRightFrom}px 12px ${shadowLeftFrom}px rgba(var(--background-0, 0.35))`;
    const shadowTo = `0px ${shadowRightFrom}px 12px ${shadowLeftFrom}px rgba(var(--background-0, 0))`;

    const transitions = useTransition( true, {
        from: { opacity: 0, transform: transitionFrom },
        enter: { opacity: 1, transform: transitionTo },
        leave: { opacity: 0 },
        delay: 600
    });

    const springProps = useSpring({
        to: {
            avatarTransform: fullScreen
                ? springTransitionFrom
                : springTransitionTo,
            boxShadow: fullScreen
                ? shadowFrom
                : shadowTo
        },
        config: {
            mass: 1,
            tension: 200,
            friction: 20
        }
    });

    return transitions(( transitionProps, item ) => (
        item && (
            <animated.img
                className={ `avatar-img ${!fullScreen ? 'clickable' : ''}` }
                srcSet={ `${avatar1xPath}, ${avatar2xPath} 2x` }
                src={ avatar1xPath }
                style={{
                    opacity: transitionProps.opacity,
                    boxShadow: springProps.boxShadow,
                    transform: initial ? transitionProps.transform : springProps.avatarTransform
                }}
                onClick={ onClick }
            />  
        )
    ));
};

export default memo( Avatar );