import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useDispatch from '../../hooks/useDispatch';
import useSelector from '../../hooks/useSelector';
import { setTheme, ThemeType } from '../../store';
import './index.scss';

const ThemeSelect: FC = () => {
    const dispatch = useDispatch();
    const { theme } = useSelector( s => s.settings );

    /**
     * Handles the toggle button click by dispatching the redux action to update
     * theme to "light" if "dark" is currently selected, or "dark" if "light" is
     * currently selected.
     */
    const handleThemeToggle = () => {
        const newTheme: ThemeType = ( theme === 'dark' )
            ? 'light'
            : 'dark';

        dispatch( setTheme( newTheme ));
    };

    return (
        <div className="theme-select">
            <span className="theme-text">Dark Mode</span>
            <span className="theme-toggle clickable" onClick={ handleThemeToggle }>
                <FontAwesomeIcon fixedWidth icon={[ 'far', ( theme === 'dark' ? 'toggle-on' : 'toggle-off' )]} />
            </span>
        </div>
    );
};

export default ThemeSelect;