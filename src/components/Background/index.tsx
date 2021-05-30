import { FC, memo } from 'react';
import { animated, config, useTransition } from 'react-spring';
import BackgroundAnimator from './BackgroundAnimator';
import './index.scss';

interface IProps {
    clientX: number;
    clientY: number;
    fullScreen?: boolean;
    initial?: boolean;
    showDescription?: boolean;
}

const Background: FC<IProps> = ( props ) => {
    const {
        clientX,
        clientY,
        fullScreen,
        initial,
        showDescription
    } = props;

    const containerTransitions = useTransition( fullScreen, {
        from: {
            opacity: initial ? 1 : 0,
            transform: `scaleY( ${initial ? 1 : 0.07 })`,
            background: 'rgb(var(--breakpoint-0))'
        },
        enter: {
            opacity: 1,
            transform: 'scaleY( 1 )',
            background: 'rgb(var(--breakpoint-0))'
        },
        leave: {
            opacity: 0,
            transform: 'scaleY( 0.07 )',
            background: 'rgb(var(--breakpoint-0))'
        },
        config: fullScreen ? config.default : config.slow
    });

    const backgroundAnimatorTransitions = useTransition( showDescription, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    });

    return containerTransitions(( containerProps, containerItem ) => (
        containerItem && (
            <animated.div style={ containerProps } className="bg-container">
                { backgroundAnimatorTransitions(( backgroundProps, backgroundItem ) => (
                    backgroundItem && (
                        <animated.div style={ backgroundProps } className="bg-inner-container">
                            <BackgroundAnimator clientX={ clientX } clientY={ clientY } />
                        </animated.div>
                    )
                ))}
            </animated.div>
        )
    ))
};

export default memo( Background );