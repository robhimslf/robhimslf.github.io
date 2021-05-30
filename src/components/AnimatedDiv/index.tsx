import { ComponentPropsWithoutRef, FC, memo } from 'react';
import cn from 'classnames';
import { animated } from 'react-spring';
import './index.scss';

/**
 * Defines properties allowed on this component.
 */
interface IProps extends ComponentPropsWithoutRef<any> {
    align?: string|boolean;
    alignSelf?: string|boolean;
    animate?: boolean;
    className?: string;
    fillParent?: boolean;
    flex?: boolean|number;
    justify?: boolean|string;
    passRef?: any;
    row?: boolean;
    style?: any;
}

/**
 * Functional component a normalized memo'd `div` element, optionally animated.
 * 
 * @param {IProps}
 */
const AnimatedDiv: FC<IProps> = ( props ) => {
    const {
        align,
        alignSelf,
        animate,
        children,
        className,
        fillParent,
        flex,
        justify,
        passRef,
        row,
        style,
        ...rest
    } = props;

    /**
     * Calculate the class name for the root element.
     */
    const rootClassName = cn(
        'div',
        {
            'row': row,
            'col': !row,
            'align-center': align && typeof align !== 'string',
            [`align-${align}`]: align && typeof align === 'string',
            'justify-center': justify && typeof justify !== 'string',
            [`justify-${justify}`]: justify && typeof justify === 'string',
            'align-self-center': alignSelf && typeof alignSelf !== 'string',
            [`align-self-${alignSelf}`]: alignSelf && typeof alignSelf === 'string',
            'fill-parent': fillParent
        },
        className
    );

    /**
     * Calculate the inline style for the root element.
     */
    let rootStyle: any = ( style !== undefined ) ? style : {};
    if ( flex )
        rootStyle = {
            ...rootStyle,
            flex: typeof flex === 'number' ? flex : 1
        };

    if ( animate ) {
        return (
            <animated.div className={ rootClassName } style={ rootStyle } { ...rest }>
                { children }
            </animated.div>
        );
    }

    return (
        <div ref={ passRef } className={ rootClassName } style={ rootStyle } { ...rest }>
            { children }
        </div>
    );
};

export default memo( AnimatedDiv );