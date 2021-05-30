import { FC, memo } from 'react';
import { Transition } from 'react-spring';
import AnimatedDiv from '../../AnimatedDiv';
import Links from '../Links';
import './index.scss';

interface IProps {
    initial?: boolean;
    showProfile: boolean;
}

const Description: FC<IProps> = ({ initial, showProfile }) => (
    <Transition
        items={ showProfile }
        from={{
            opacity: 0,
            transform: 'translate( -50%, calc( 50vh - 0px ))'
        }}
        enter={{
            opacity: 1,
            transform: 'translate( -50%, calc( 50vh - 145px ))'
        }}
        leave={{
            opacity: 0
        }}
        delay={ 900 }
    >
        {( styles, item ) => (
            item
                ? (
                    <AnimatedDiv animate className="description-container" style={ styles }>
                        <div className="description">
                            <p>Hi. I'm <span className="accent">Rob</span>.</p>
                            <p>I'm a senior software engineer and technologist with more than 20 years of experience, but I've been pushing pixels and breaking things since 1982.</p>
                        </div>

                        <Links />
                    </AnimatedDiv>
                )
                : null
        )}
    </Transition>
);

export default memo( Description );