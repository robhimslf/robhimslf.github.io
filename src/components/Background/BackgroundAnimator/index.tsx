import { FC, Fragment, memo } from 'react';
import { animated, useSpring } from 'react-spring';
import useSelector from '../../../hooks/useSelector';
import './index.scss';

const calc = ( x: number, y: number ): number[] =>
    [ x - window.innerWidth / 2, y - window.innerHeight / 2 ];

const translate20 = ( x: number, y: number ): string =>
    `translate(${x / 20}px, ${y / 20}px)`;
const translate15 = ( x: number, y: number ): string =>
    `translate(${x / 15}px, ${y / 15}px)`;
const translate10 = ( x: number, y: number ): string =>
    `translate(${x / 10}px, ${y / 10}px)`;

interface IProps {
    clientX: number;
    clientY: number;
}

const BackgroundAnimator: FC<IProps> = ({ clientX, clientY }) => {
    const { theme } = useSelector( s => s.settings );

    const animationProps = useSpring({
        xy: calc( clientX, clientY ),
        config: {
            mass: 10,
            tension: 550,
            friction: 240
        }
    });

    return (
        <Fragment>
            <animated.div
                className="bg-img-layer"
                style={{
                    //opacity: 0.1,
                    transform: animationProps.xy.to( translate20 ),
                    backgroundImage: `url(/img/bg/bg_${theme.toLowerCase()}-doodle-fixed.png)`
                }}
            />
            <animated.div
                className="bg-img-layer"
                style={{
                    //opacity: 0.15,
                    transform: animationProps.xy.to( translate15 ),
                    backgroundImage: `url(/img/bg/bg_${theme.toLowerCase()}-doodle-second.png)`
                }}
            />
            <animated.div
                className="bg-img-layer"
                style={{
                    //opacity: 0.25,
                    transform: animationProps.xy.to( translate10 ),
                    backgroundImage: `url(/img/bg/bg_${theme.toLowerCase()}-doodle-first.png)`
                }}
            />
        </Fragment>
    );
};

export default memo( BackgroundAnimator );